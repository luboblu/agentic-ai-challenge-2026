"use client";

import { Fragment, useEffect, useState, type CSSProperties } from "react";
import Link from "next/link";
import { content, type Lang } from "./i18n";

// Splits a trailing icon (e.g. "Explore ↓") into its own span so the
// button's space-between layout pushes the icon to the right edge.
function BtnLabel({ text }: { text: string }) {
  const i = text.lastIndexOf(" ");
  if (i === -1) return <>{text}</>;
  return <>{text.slice(0, i)} <span>{text.slice(i + 1)}</span></>;
}

function Lines({ items }: { items: string[] }) {
  return (
    <>
      {items.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          {line}
        </Fragment>
      ))}
    </>
  );
}

function Countdown({ label, units }: { label: string; units: Record<string, string> }) {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, new Date("2026-11-21T09:00:00+08:00").getTime() - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff / 3600000) % 24),
        minutes: Math.floor((diff / 60000) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label={label}>
      {Object.entries(time).map(([key, value]) => (
        <div className="count" key={key}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{units[key]}</span>
        </div>
      ))}
    </div>
  );
}

const navIds = ["about", "challenge", "criteria", "awards", "timeline", "faq"] as const;

// Switching locales is a real route change, so the browser would drop the
// reader back at the top. Both locales render the same blocks in the same
// order, but Chinese and English copy differ in height — so instead of a raw
// pixel offset we remember which block the reader was in and how far through
// it they were, then land on the same spot in the other language.
const SCROLL_KEY = "langSwitchAnchor";
const HEADER_OFFSET = 80;

function scrollBlocks() {
  return Array.from(document.querySelectorAll<HTMLElement>("main > section, main > footer"));
}

function rememberScrollAnchor() {
  const blocks = scrollBlocks();
  const y = window.scrollY + HEADER_OFFSET;
  let index = 0;
  let ratio = 0;
  blocks.forEach((block, i) => {
    const rect = block.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    if (y < top) return;
    index = i;
    ratio = rect.height ? Math.min(1, (y - top) / rect.height) : 0;
  });
  try {
    sessionStorage.setItem(SCROLL_KEY, JSON.stringify({ index, ratio }));
  } catch {
    // Private-browsing quota failures just mean we land at the top as before.
  }
}

function restoreScrollAnchor() {
  let raw: string | null = null;
  try {
    raw = sessionStorage.getItem(SCROLL_KEY);
    if (raw) sessionStorage.removeItem(SCROLL_KEY);
  } catch {
    return;
  }
  if (!raw) return;

  let anchor: { index: number; ratio: number };
  try {
    anchor = JSON.parse(raw);
  } catch {
    return;
  }

  const block = scrollBlocks()[anchor.index];
  if (!block) return;
  const rect = block.getBoundingClientRect();
  const top = rect.top + window.scrollY + rect.height * anchor.ratio - HEADER_OFFSET;
  // "instant" overrides the page's smooth scroll-behavior, so the new language
  // is simply already in the right place rather than animating there.
  window.scrollTo({ top: Math.max(0, top), behavior: "instant" });
}

export default function HomePage({ lang }: { lang: Lang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [ready, setReady] = useState(false);

  const t = content[lang];
  const otherLang: Lang = lang === "zh" ? "en" : "zh";
  const otherHref = lang === "zh" ? "/en" : "/";

  // Keep the document language in sync with the current page's locale.
  useEffect(() => {
    document.documentElement.lang = t.htmlLang;
  }, [t.htmlLang]);

  // Land on the block the reader left behind in the other language. Keyed on
  // `lang` so it runs whether the route change remounts this component or not.
  useEffect(() => {
    restoreScrollAnchor();
  }, [lang]);

  // Adopt the theme the inline layout script applied pre-paint, then start
  // syncing. Gating on `ready` avoids clobbering it (which would flash).
  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    setTheme(current === "dark" ? "dark" : "light");
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme, ready]);

  // Lock body scroll while the mobile menu overlay is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveal + active-section tracking.
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => revealObserver.observe(el));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  return (
    <main className={lang === "zh" ? "lang-zh" : "lang-en"}>
      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label={t.a11y.home}>
          <span className="brand-mark">A<span>↗</span></span>
          <span><b>Agentic AI</b><small>{t.brandSub}</small></span>
        </a>
        <div className="header-right">
          <nav id="primary-nav" className={menuOpen ? "open" : ""}>
            {navIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                aria-current={active === id ? "true" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {t.nav[id]}
              </a>
            ))}
            <a className="nav-cta" href="#register" onClick={() => setMenuOpen(false)}>{t.nav.news}</a>
          </nav>
          <div className="header-tools">
            <Link
              className="tool"
              href={otherHref}
              scroll={false}
              onClick={rememberScrollAnchor}
              aria-label={t.a11y.toLang}
            >
              {otherLang === "en" ? "EN" : "中"}
            </Link>
            <button
              className="tool theme-toggle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={t.a11y.toTheme}
              aria-pressed={theme === "dark"}
            >
              <span aria-hidden="true">{theme === "light" ? "☾" : "☀"}</span>
            </button>
          </div>
          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="primary-nav"
            aria-label={t.a11y.menu}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="eyebrow"><span>{t.hero.eyebrow1}</span><span>{t.hero.eyebrow2}</span></div>
        <div className="hero-copy">
          <p className="hero-kicker"><Lines items={t.hero.kicker} /></p>
          <h1><Lines items={t.hero.h1} /><br /><em>{t.hero.h1em}</em></h1>
          <p className="hero-lead">{t.hero.lead}</p>
          <div className="hero-actions">
            <a className="button primary" href="#register"><BtnLabel text={t.hero.ctaPrimary} /></a>
            <a className="button ghost" href="#about"><BtnLabel text={t.hero.ctaSecondary} /></a>
          </div>
        </div>
        <div className="hero-meta">
          {t.hero.meta.map((m) => (
            <div key={m.label}><span>{m.label}</span><strong><Lines items={m.value} /></strong></div>
          ))}
        </div>
      </section>

      <section className="countdown-band">
        <div><p>{t.countdown.title}</p><span>{t.countdown.sub}</span></div>
        <Countdown label={t.a11y.countdown} units={t.countdown.units} />
      </section>

      <div className="marquee" aria-hidden="true">
        <div>{t.marquee.repeat(2)}</div>
      </div>

      <section className="section intro" id="about">
        <div className="section-label">{t.intro.label}</div>
        <div className="section-heading" data-reveal>
          <h2><Lines items={t.intro.h2} /></h2>
          <div>
            <p className="lead">{t.intro.lead}</p>
            <p>{t.intro.p2}</p>
          </div>
        </div>
        <div className="value-grid">
          {t.intro.cards.map((card, i) => (
            <article key={card.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span>{card.n}</span><h3>{card.title}</h3><p>{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section why">
        <div className="section-label">{t.why.label}</div>
        <div className="why-head" data-reveal>
          <p className="why-kicker">{t.why.kicker}</p>
          <h2><Lines items={t.why.h2} /></h2>
          <p className="why-intro">{t.why.intro}</p>
        </div>
        <div className="gaps">
          {t.why.cards.map((card, i) => (
            <article key={card.tag} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span className="gap-tag">{card.tag}</span>
              <h3>{card.title}</h3>
              <ul>{card.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark" id="challenge">
        <div className="section-label">{t.challenge.label}</div>
        <div className="dark-title" data-reveal>
          <p>{t.challenge.kicker}</p>
          <h2><Lines items={t.challenge.h2} /></h2>
        </div>
        <div className="abilities">
          {t.challenge.abilities.map((ability, i) => (
            <article key={ability.n} data-reveal style={{ transitionDelay: `${i * 90}ms` }}>
              <span>{ability.n}</span>
              <div><h3>{ability.title}</h3><p>{ability.text}</p></div>
              <b>↗</b>
            </article>
          ))}
        </div>
        <div className="tech-strip" data-reveal>
          <span>{t.challenge.techLabel}</span>
          <div>{t.challenge.techs.map((tech) => <b key={tech}>{tech}</b>)}</div>
        </div>
      </section>

      <section className="section criteria" id="criteria">
        <div className="section-label">{t.criteria.label}</div>
        <div className="criteria-head" data-reveal>
          <p className="crit-kicker">{t.criteria.kicker}</p>
          <h2><Lines items={t.criteria.h2} /></h2>
        </div>
        {t.criteria.groups.map((group, groupIndex) => (
          <div className="crit-group" key={group.title}>
            <h3 className="crit-group-title" data-reveal>{group.title}</h3>
            <div className="crit-list">
              {group.items.map((item, i) => (
                <div
                  className="crit"
                  key={`${groupIndex}-${item.name}`}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms`, ["--w"]: `${item.weight}%` } as CSSProperties}
                >
                  <div className="crit-top"><b>{item.name}</b><span>{item.weight}%</span></div>
                  <div className="crit-bar"><i /></div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="crit-note">{t.criteria.note}</p>
      </section>

      <section className="section audience">
        <div className="section-label">{t.audience.label}</div>
        <div className="audience-layout">
          <div data-reveal>
            <h2><Lines items={t.audience.h2} /><br /><em>{t.audience.h2em}</em></h2>
            <p>{t.audience.p}</p>
          </div>
          <div className="audience-list" data-reveal>
            {t.audience.list.map((item) => (
              <div key={item.title}><span>{item.mark}</span><p><b>{item.title}</b>{item.text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section awards" id="awards">
        <div className="section-label">{t.awards.label}</div>
        <div className="awards-head" data-reveal>
          <p className="awards-kicker">{t.awards.kicker}</p>
          <h2><Lines items={t.awards.h2} /></h2>
          <p className="awards-intro">{t.awards.intro}</p>
        </div>
        <div className="award-grid">
          {t.awards.items.map((award, i) => (
            <article
              key={award.title}
              className={award.featured ? "award featured" : "award"}
              data-reveal
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <span className="award-tag">{award.tag}</span>
              <h3>{award.title}</h3>
              <p>{award.text}</p>
            </article>
          ))}
        </div>
        <p className="awards-note">{t.awards.note}</p>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-label">{t.timeline.label}</div>
        <div className="timeline-heading" data-reveal>
          <h2><Lines items={t.timeline.h2} /></h2>
          <p>{t.timeline.p}</p>
        </div>
        <div className="timeline">
          {t.timeline.phases.map((phase, index) => (
            <article
              key={phase.title}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className={index === t.timeline.phases.length - 1 ? "final-phase" : undefined}
            >
              <time>{phase.date}</time>
              <div><h3>{phase.title}</h3><p>{phase.text}</p></div>
              <b>{phase.status}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="venue">
        <div className="venue-visual">
          <iframe
            className="venue-map"
            title={t.venue.h2.join("")}
            src={`https://www.google.com/maps?q=%E5%A4%A7%E6%9D%BF%E6%A0%B9%E6%A3%AE%E6%9E%97%E6%BA%AB%E6%B3%89%E9%85%92%E5%BA%97&z=15&hl=${lang === "en" ? "en" : "zh-TW"}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <div className="venue-copy" data-reveal>
          <div className="section-label">{t.venue.label}</div>
          <p>{t.venue.dateline}</p>
          <h2><Lines items={t.venue.h2} /></h2>
          <p className="venue-text">{t.venue.text}</p>
          <dl>
            <div><dt>{t.venue.dateLabel}</dt><dd>{t.venue.dateVal}</dd></div>
            <div><dt>{t.venue.placeLabel}</dt><dd>{t.venue.placeVal}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-label">{t.faq.label}</div>
        <div className="faq-layout">
          <h2 data-reveal>{t.faq.h2}</h2>
          <div data-reveal>
            {t.faq.items.map((item, i) => (
              <details key={item.q} open={i === 0}>
                <summary>{item.q}<span>＋</span></summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="register" id="register">
        <div className="register-grid" aria-hidden="true" />
        <p>{t.register.kicker}</p>
        <h2 data-reveal><Lines items={t.register.h2} /></h2>
        <p className="register-lead">{t.register.lead}</p>
        <div className="register-actions">
          <a className="button light" href="https://taai2026.github.io/" target="_blank" rel="noreferrer"><BtnLabel text={t.register.ctaSite} /></a>
          <a className="button outline-light" href="#timeline"><BtnLabel text={t.register.ctaContact} /></a>
        </div>
        <small>{t.register.note}</small>
      </section>

      <footer>
        <div className="footer-brand">
          <span className="brand-mark">A<span>↗</span></span>
          <div><b><Lines items={t.footer.brandTitle} /></b><p>{t.footer.brandSub}</p></div>
        </div>
        <div>
          <h3>{t.footer.col1Title}</h3>
          {t.footer.col1.map((line) => <p key={line}>{line}</p>)}
        </div>
        <div>
          <h3>{t.footer.col2Title}</h3>
          {t.footer.col2Links.map((link) =>
            link.external
              ? <a key={link.href} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
              : <a key={link.href} href={link.href}>{link.label}</a>
          )}
        </div>
        <div>
          <h3>{t.footer.col3Title}</h3>
          {t.footer.col3.map((line) => <p key={line}>{line}</p>)}
          {t.footer.email && <a href={`mailto:${t.footer.email}`}>{t.footer.email}</a>}
        </div>
        <p className="copyright">{t.footer.copyright}</p>
      </footer>
    </main>
  );
}
