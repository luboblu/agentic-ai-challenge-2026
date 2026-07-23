"use client";

import { useEffect, useState } from "react";

const phases = [
  { date: "2026.08", title: "競賽辦法公告", text: "企業題目、報名方式與完整競賽規則正式公開。", status: "即將公開" },
  { date: "2026.08 — 09", title: "團隊報名", text: "全國大專校院學生組隊，選擇企業命題並提出構想。", status: "準備中" },
  { date: "2026.09 — 10", title: "初賽提案審查", text: "依問題洞察、創新性、技術可行性與落地潛力進行評選。", status: "預定" },
  { date: "2026.10 — 11", title: "入圍輔導", text: "入圍團隊媒合企業顧問與學界團隊，深化解決方案。", status: "預定" },
  { date: "2026.11.20", title: "決賽暨成果發表", text: "於 TAAI 2026 現場發表成果、接受評審並舉行頒獎。", status: "Final" },
];

const abilities = [
  ["01", "理解真實問題", "從企業流程、知識管理與服務情境中，辨識值得被解決的核心痛點。"],
  ["02", "打造智慧代理", "運用 LLM、工具調用、工作流與多代理協作，讓 AI 能規劃並執行任務。"],
  ["03", "串接場域系統", "整合 API、資料與既有服務，提出可驗證、可展示的技術原型。"],
];

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const unitLabels: Record<string, string> = { days: "天", hours: "時", minutes: "分", seconds: "秒" };

  useEffect(() => {
    const update = () => {
      const diff = Math.max(0, new Date("2026-11-20T09:00:00+08:00").getTime() - Date.now());
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
    <div className="countdown" aria-label="距離決賽倒數">
      {Object.entries(time).map(([label, value]) => (
        <div className="count" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{unitLabels[label]}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="回到首頁">
          <span className="brand-mark">A<span>↗</span></span>
          <span><b>Agentic AI</b><small>Enterprise Challenge 2026</small></span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="開啟導覽選單">
          <span /><span />
        </button>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#about" onClick={() => setMenuOpen(false)}>競賽介紹</a>
          <a href="#challenge" onClick={() => setMenuOpen(false)}>挑戰內容</a>
          <a href="#timeline" onClick={() => setMenuOpen(false)}>重要時程</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>常見問題</a>
          <a className="nav-cta" href="#register" onClick={() => setMenuOpen(false)}>取得最新消息 ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />
        <div className="eyebrow"><span>NAPAI × TAAI 2026</span><span>企業出題・學界解題</span></div>
        <div className="hero-copy">
          <p className="hero-kicker">2026 Agentic AI<br />智慧代理人企業挑戰賽</p>
          <h1>讓 AI 不只回答，<br /><em>開始行動。</em></h1>
          <p className="hero-lead">走進企業真實場域，打造能理解任務、自主規劃、串接工具並完成工作的 AI Agent。你的解法，可能就是下一個產業轉型的起點。</p>
          <div className="hero-actions">
            <a className="button primary" href="#register">追蹤報名公告 <span>↗</span></a>
            <a className="button ghost" href="#about">探索競賽 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-meta">
          <div><span>決賽日期</span><strong>2026.11.20<br />FRIDAY</strong></div>
          <div><span>決賽地點</span><strong>大板根森林<br />溫泉酒店</strong></div>
          <div><span>參賽對象</span><strong>全國大專<br />校院學生</strong></div>
        </div>
      </section>

      <section className="countdown-band">
        <div><p>COUNTDOWN TO THE FINAL</p><span>決賽開場 · 09:00 · Asia/Taipei</span></div>
        <Countdown />
      </section>

      <div className="marquee" aria-hidden="true">
        <div>AGENTIC AI ✦ 企業命題 ✦ 真實場域 ✦ 產學共創 ✦ 技術驗證 ✦ 人才媒合 ✦ AGENTIC AI ✦ 企業命題 ✦ 真實場域 ✦ 產學共創 ✦ 技術驗證 ✦ 人才媒合 ✦</div>
      </div>

      <section className="section intro" id="about">
        <div className="section-label">01 / ABOUT</div>
        <div className="section-heading">
          <h2>這不是一場只看<br />Demo 的競賽。</h2>
          <div>
            <p className="lead">企業帶來真實問題，學生團隊帶來全新視角。從問題定義、技術開發到場域驗證，一起把 Agentic AI 變成真正能工作的解決方案。</p>
            <p>本競賽由教育部補助 NAPAI 計畫推動，攜手 TAAI 2026 臺灣人工智慧年會，建立「企業需求 → 學界解題 → 技術驗證 → 人才媒合 → 產業落地」的創新循環。</p>
          </div>
        </div>
        <div className="value-grid">
          <article><span>01</span><h3>真實企業題目</h3><p>挑戰來自業務流程、知識管理或服務創新的實際需求，不做紙上談兵。</p></article>
          <article><span>02</span><h3>企業顧問輔導</h3><p>入圍團隊將媒合企業技術專家與學界團隊，獲得貼近場域的回饋。</p></article>
          <article><span>03</span><h3>頂級年會舞台</h3><p>決賽結合 TAAI 2026，在 AI 研究者、教授與產業代表面前展示成果。</p></article>
          <article><span>04</span><h3>從作品走向落地</h3><p>優秀解法有機會延伸為合作、實習、人才媒合或企業產品的新功能。</p></article>
        </div>
      </section>

      <section className="section dark" id="challenge">
        <div className="section-label">02 / THE CHALLENGE</div>
        <div className="dark-title">
          <p>BUILD AN AGENT THAT WORKS</p>
          <h2>你要打造的，<br />是能完成任務的 AI。</h2>
        </div>
        <div className="abilities">
          {abilities.map(([number, title, text]) => (
            <article key={number}>
              <span>{number}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
              <b>↗</b>
            </article>
          ))}
        </div>
        <div className="tech-strip">
          <span>可運用技術</span>
          <div><b>LLM</b><b>Tool Use</b><b>RAG</b><b>Workflow</b><b>Multi-Agent</b><b>API Integration</b></div>
        </div>
      </section>

      <section className="section audience">
        <div className="section-label">03 / WHO SHOULD JOIN</div>
        <div className="audience-layout">
          <div>
            <h2>如果你想讓技術<br />碰到真實世界，<br /><em>這裡就是起點。</em></h2>
            <p>競賽開放全國大專校院學生組隊參加。無論你來自資工、資管、設計、商管或其他領域，只要願意跨域合作、理解問題並把想法做出來，我們都期待你的加入。</p>
          </div>
          <div className="audience-list">
            <div><span>✓</span><p><b>AI／軟體開發者</b>想挑戰 Agent、LLM 與系統整合</p></div>
            <div><span>✓</span><p><b>產品／設計思考者</b>擅長找出痛點、設計流程與使用體驗</p></div>
            <div><span>✓</span><p><b>產業／領域專家</b>能理解情境，讓技術回應真正的需求</p></div>
            <div><span>＋</span><p><b>跨域組隊更加分</b>完整隊伍與報名資格將於競賽辦法公告</p></div>
          </div>
        </div>
      </section>

      <section className="section timeline-section" id="timeline">
        <div className="section-label">04 / TIMELINE</div>
        <div className="timeline-heading">
          <h2>從一個提案，<br />走到決賽舞台。</h2>
          <p>完整競賽辦法預計於 2026 年 8 月公告。先記下關鍵月份，開始尋找隊友、盤點能力，準備迎接企業命題。</p>
        </div>
        <div className="timeline">
          {phases.map((phase, index) => (
            <article key={phase.title} className={index === phases.length - 1 ? "final-phase" : ""}>
              <time>{phase.date}</time>
              <div><span>{String(index + 1).padStart(2, "0")}</span><h3>{phase.title}</h3><p>{phase.text}</p></div>
              <b>{phase.status}</b>
            </article>
          ))}
        </div>
      </section>

      <section className="venue">
        <div className="venue-visual" aria-hidden="true"><span>25°16&apos;N<br />121°24&apos;E</span><div className="rings" /></div>
        <div className="venue-copy">
          <div className="section-label">05 / FINAL VENUE</div>
          <p>NOVEMBER 20, 2026 · NEW TAIPEI CITY</p>
          <h2>大板根森林<br />溫泉酒店</h2>
          <p className="venue-text">在三峽山林裡，把 AI 的未來帶進真實世界。決賽暨成果發表將與 TAAI 2026 同場舉行，讓創意、技術與產業在這裡交會。</p>
          <dl><div><dt>日期</dt><dd>2026 年 11 月 20 日（星期五）</dd></div><div><dt>地點</dt><dd>新北市三峽區，大板根森林溫泉酒店</dd></div></dl>
        </div>
      </section>

      <section className="section faq" id="faq">
        <div className="section-label">06 / FAQ</div>
        <div className="faq-layout">
          <h2>你可能想知道</h2>
          <div>
            <details open><summary>誰可以參加？<span>＋</span></summary><p>競賽以全國大專校院學生為主要參賽對象。詳細學籍資格、隊伍人數與跨校組隊規範，將以 2026 年 8 月公布的正式競賽辦法為準。</p></details>
            <details><summary>一定要具備 AI 開發經驗嗎？<span>＋</span></summary><p>競賽需要完成可驗證的 Agentic AI 解法，但團隊也需要問題洞察、產品設計、簡報與領域知識。建議尋找能力互補的隊友。</p></details>
            <details><summary>企業題目何時公布？<span>＋</span></summary><p>企業題目與完整競賽辦法預計於 2026 年 8 月公告，報名期預計為 8 至 9 月。</p></details>
            <details><summary>入圍後會得到什麼協助？<span>＋</span></summary><p>主辦團隊預計協助媒合入圍隊伍與企業技術顧問，於 10 至 11 月進行輔導，協助團隊深化作品與場域適配性。</p></details>
            <details><summary>獎金與評分方式是什麼？<span>＋</span></summary><p>獎項、獎金、評分標準與成果繳交格式尚待正式競賽辦法確認。請留下聯絡資訊以取得第一時間通知。</p></details>
          </div>
        </div>
      </section>

      <section className="register" id="register">
        <div className="register-grid" aria-hidden="true" />
        <p>THE NEXT MOVE IS YOURS.</p>
        <h2>準備好，讓你的<br />AI Agent 上場。</h2>
        <p className="register-lead">正式報名預計於 2026 年 8 月開放。現在先開始組隊，並關注 NAPAI 與 TAAI 2026 最新公告。</p>
        <div className="register-actions">
          <a className="button light" href="https://taai2026.github.io/" target="_blank" rel="noreferrer">前往 TAAI 2026 官網 <span>↗</span></a>
          <a className="button outline-light" href="mailto:taai2026org@gmail.com?subject=2026 Agentic AI 企業挑戰賽資訊詢問">聯絡主辦單位 <span>→</span></a>
        </div>
        <small>報名連結、競賽辦法、企業題目與獎項資訊將於確認後更新。</small>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">A<span>↗</span></span><div><b>2026 Agentic AI<br />智慧代理人企業挑戰賽</b><p>企業出題・學界解題</p></div></div>
        <div><h3>主辦與合作</h3><p>教育部資訊及科技教育司</p><p>NAPAI 智慧代理與實體 AI 機器人課程推動計畫</p><p>TAAI 2026 臺灣人工智慧年會</p></div>
        <div><h3>快速連結</h3><a href="#about">競賽介紹</a><a href="#timeline">重要時程</a><a href="#faq">常見問題</a><a href="https://taai2026.github.io/" target="_blank" rel="noreferrer">TAAI 2026 ↗</a></div>
        <div><h3>活動資訊</h3><p>2026.11.20</p><p>大板根森林溫泉酒店</p><a href="mailto:taai2026org@gmail.com">taai2026org@gmail.com</a></div>
        <p className="copyright">© 2026 NAPAI × TAAI. All rights reserved.</p>
      </footer>
    </main>
  );
}
