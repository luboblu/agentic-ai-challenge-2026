export type Lang = "zh" | "en";

type Card = { n: string; title: string; text: string };
type Ability = { n: string; title: string; text: string };
type Phase = { date: string; title: string; text: string; status: string };
type AudienceItem = { mark: string; title: string; text: string };
type Faq = { q: string; a: string };

export type Content = {
  htmlLang: string;
  nav: { about: string; challenge: string; timeline: string; faq: string; news: string };
  brandSub: string;
  a11y: { home: string; menu: string; countdown: string; toLang: string; toTheme: string };
  hero: {
    eyebrow1: string;
    eyebrow2: string;
    kicker: string[];
    h1: string[];
    h1em: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    meta: { label: string; value: string[] }[];
  };
  countdown: { title: string; sub: string; units: { days: string; hours: string; minutes: string; seconds: string } };
  marquee: string;
  intro: { label: string; h2: string[]; lead: string; p2: string; cards: Card[] };
  challenge: { label: string; kicker: string; h2: string[]; abilities: Ability[]; techLabel: string; techs: string[] };
  audience: { label: string; h2: string[]; h2em: string; p: string; list: AudienceItem[] };
  timeline: { label: string; h2: string[]; p: string; phases: Phase[] };
  venue: {
    label: string; coords: string; dateline: string; h2: string[]; text: string;
    dateLabel: string; dateVal: string; placeLabel: string; placeVal: string;
  };
  faq: { label: string; h2: string; items: Faq[] };
  register: { kicker: string; h2: string[]; lead: string; ctaSite: string; ctaContact: string; note: string };
  footer: {
    brandTitle: string[]; brandSub: string;
    col1Title: string; col1: string[];
    col2Title: string; col2Links: { label: string; href: string; external?: boolean }[];
    col3Title: string; col3: string[]; email: string;
    copyright: string;
  };
};

export const content: Record<Lang, Content> = {
  zh: {
    htmlLang: "zh-Hant",
    nav: { about: "競賽介紹", challenge: "挑戰內容", timeline: "重要時程", faq: "常見問題", news: "取得最新消息 ↗" },
    brandSub: "Enterprise Challenge 2026",
    a11y: { home: "回到首頁", menu: "開啟導覽選單", countdown: "距離決賽倒數", toLang: "切換為英文", toTheme: "切換深淺色主題" },
    hero: {
      eyebrow1: "NAPAI × TAAI 2026",
      eyebrow2: "企業出題・學界解題",
      kicker: ["2026 Agentic AI", "智慧代理人企業挑戰賽"],
      h1: ["讓 AI 不只回答，"],
      h1em: "開始行動。",
      lead: "走進企業真實場域，打造能理解任務、自主規劃、串接工具並完成工作的 AI Agent。你的解法，可能就是下一個產業轉型的起點。",
      ctaPrimary: "追蹤報名公告 ↗",
      ctaSecondary: "探索競賽 ↓",
      meta: [
        { label: "決賽日期", value: ["2026.11.20", "FRIDAY"] },
        { label: "決賽地點", value: ["大板根森林", "溫泉酒店"] },
        { label: "參賽對象", value: ["全國大專", "校院學生"] },
      ],
    },
    countdown: { title: "COUNTDOWN TO THE FINAL", sub: "決賽開場 · 09:00 · Asia/Taipei", units: { days: "天", hours: "時", minutes: "分", seconds: "秒" } },
    marquee: "AGENTIC AI ✦ 企業命題 ✦ 真實場域 ✦ 產學共創 ✦ 技術驗證 ✦ 人才媒合 ✦ ",
    intro: {
      label: "01 / ABOUT",
      h2: ["這不是一場只看", "Demo 的競賽。"],
      lead: "企業帶來真實問題，學生團隊帶來全新視角。從問題定義、技術開發到場域驗證，一起把 Agentic AI 變成真正能工作的解決方案。",
      p2: "本競賽由教育部補助 NAPAI 計畫推動，攜手 TAAI 2026 臺灣人工智慧年會，建立「企業需求 → 學界解題 → 技術驗證 → 人才媒合 → 產業落地」的創新循環。",
      cards: [
        { n: "01", title: "真實企業題目", text: "挑戰來自業務流程、知識管理或服務創新的實際需求，不做紙上談兵。" },
        { n: "02", title: "企業顧問輔導", text: "入圍團隊將媒合企業技術專家與學界團隊，獲得貼近場域的回饋。" },
        { n: "03", title: "頂級年會舞台", text: "決賽結合 TAAI 2026，在 AI 研究者、教授與產業代表面前展示成果。" },
        { n: "04", title: "從作品走向落地", text: "優秀解法有機會延伸為合作、實習、人才媒合或企業產品的新功能。" },
      ],
    },
    challenge: {
      label: "02 / THE CHALLENGE",
      kicker: "BUILD AN AGENT THAT WORKS",
      h2: ["你要打造的，", "是能完成任務的 AI。"],
      abilities: [
        { n: "01", title: "理解真實問題", text: "從企業流程、知識管理與服務情境中，辨識值得被解決的核心痛點。" },
        { n: "02", title: "打造智慧代理", text: "運用 LLM、工具調用、工作流與多代理協作，讓 AI 能規劃並執行任務。" },
        { n: "03", title: "串接場域系統", text: "整合 API、資料與既有服務，提出可驗證、可展示的技術原型。" },
      ],
      techLabel: "可運用技術",
      techs: ["LLM", "Tool Use", "RAG", "Workflow", "Multi-Agent", "API Integration"],
    },
    audience: {
      label: "03 / WHO SHOULD JOIN",
      h2: ["如果你想讓技術", "碰到真實世界，"],
      h2em: "這裡就是起點。",
      p: "競賽開放全國大專校院學生組隊參加。無論你來自資工、資管、設計、商管或其他領域，只要願意跨域合作、理解問題並把想法做出來，我們都期待你的加入。",
      list: [
        { mark: "✓", title: "AI／軟體開發者", text: "想挑戰 Agent、LLM 與系統整合" },
        { mark: "✓", title: "產品／設計思考者", text: "擅長找出痛點、設計流程與使用體驗" },
        { mark: "✓", title: "產業／領域專家", text: "能理解情境，讓技術回應真正的需求" },
        { mark: "＋", title: "跨域組隊更加分", text: "完整隊伍與報名資格將於競賽辦法公告" },
      ],
    },
    timeline: {
      label: "04 / TIMELINE",
      h2: ["從一個提案，", "走到決賽舞台。"],
      p: "完整競賽辦法預計於 2026 年 8 月公告。先記下關鍵月份，開始尋找隊友、盤點能力，準備迎接企業命題。",
      phases: [
        { date: "2026.08", title: "競賽辦法公告", text: "企業題目、報名方式與完整競賽規則正式公開。", status: "即將公開" },
        { date: "2026.08 — 09", title: "團隊報名", text: "全國大專校院學生組隊，選擇企業命題並提出構想。", status: "準備中" },
        { date: "2026.09 — 10", title: "初賽提案審查", text: "依問題洞察、創新性、技術可行性與落地潛力進行評選。", status: "預定" },
        { date: "2026.10 — 11", title: "入圍輔導", text: "入圍團隊媒合企業顧問與學界團隊，深化解決方案。", status: "預定" },
        { date: "2026.11.20", title: "決賽暨成果發表", text: "於 TAAI 2026 現場發表成果、接受評審並舉行頒獎。", status: "Final" },
      ],
    },
    venue: {
      label: "05 / FINAL VENUE",
      coords: "25°16'N\n121°24'E",
      dateline: "NOVEMBER 20, 2026 · NEW TAIPEI CITY",
      h2: ["大板根森林", "溫泉酒店"],
      text: "在三峽山林裡，把 AI 的未來帶進真實世界。決賽暨成果發表將與 TAAI 2026 同場舉行，讓創意、技術與產業在這裡交會。",
      dateLabel: "日期",
      dateVal: "2026 年 11 月 20 日（星期五）",
      placeLabel: "地點",
      placeVal: "新北市三峽區，大板根森林溫泉酒店",
    },
    faq: {
      label: "06 / FAQ",
      h2: "你可能想知道",
      items: [
        { q: "誰可以參加？", a: "競賽以全國大專校院學生為主要參賽對象。詳細學籍資格、隊伍人數與跨校組隊規範，將以 2026 年 8 月公布的正式競賽辦法為準。" },
        { q: "一定要具備 AI 開發經驗嗎？", a: "競賽需要完成可驗證的 Agentic AI 解法，但團隊也需要問題洞察、產品設計、簡報與領域知識。建議尋找能力互補的隊友。" },
        { q: "企業題目何時公布？", a: "企業題目與完整競賽辦法預計於 2026 年 8 月公告，報名期預計為 8 至 9 月。" },
        { q: "入圍後會得到什麼協助？", a: "主辦團隊預計協助媒合入圍隊伍與企業技術顧問，於 10 至 11 月進行輔導，協助團隊深化作品與場域適配性。" },
        { q: "獎金與評分方式是什麼？", a: "獎項、獎金、評分標準與成果繳交格式尚待正式競賽辦法確認。請留下聯絡資訊以取得第一時間通知。" },
      ],
    },
    register: {
      kicker: "THE NEXT MOVE IS YOURS.",
      h2: ["準備好，讓你的", "AI Agent 上場。"],
      lead: "正式報名預計於 2026 年 8 月開放。現在先開始組隊，並關注 NAPAI 與 TAAI 2026 最新公告。",
      ctaSite: "前往 TAAI 2026 官網 ↗",
      ctaContact: "聯絡主辦單位 →",
      note: "報名連結、競賽辦法、企業題目與獎項資訊將於確認後更新。",
    },
    footer: {
      brandTitle: ["2026 Agentic AI", "智慧代理人企業挑戰賽"],
      brandSub: "企業出題・學界解題",
      col1Title: "主辦與合作",
      col1: ["教育部資訊及科技教育司", "NAPAI 智慧代理與實體 AI 機器人課程推動計畫", "TAAI 2026 臺灣人工智慧年會"],
      col2Title: "快速連結",
      col2Links: [
        { label: "競賽介紹", href: "#about" },
        { label: "重要時程", href: "#timeline" },
        { label: "常見問題", href: "#faq" },
        { label: "TAAI 2026 ↗", href: "https://taai2026.github.io/", external: true },
      ],
      col3Title: "活動資訊",
      col3: ["2026.11.20", "大板根森林溫泉酒店"],
      email: "taai2026org@gmail.com",
      copyright: "© 2026 NAPAI × TAAI. All rights reserved.",
    },
  },
  en: {
    htmlLang: "en",
    nav: { about: "About", challenge: "Challenge", timeline: "Timeline", faq: "FAQ", news: "Get updates ↗" },
    brandSub: "Enterprise Challenge 2026",
    a11y: { home: "Back to top", menu: "Open navigation menu", countdown: "Countdown to the final", toLang: "Switch to Chinese", toTheme: "Toggle light or dark theme" },
    hero: {
      eyebrow1: "NAPAI × TAAI 2026",
      eyebrow2: "Enterprises pose · Academia solves",
      kicker: ["2026 Agentic AI", "Enterprise Agent Challenge"],
      h1: ["Beyond answers—"],
      h1em: "AI that acts.",
      lead: "Step into real enterprise environments and build AI agents that understand tasks, plan autonomously, connect to tools, and get work done. Your solution could spark the next industry transformation.",
      ctaPrimary: "Follow registration news ↗",
      ctaSecondary: "Explore the challenge ↓",
      meta: [
        { label: "Final date", value: ["2026.11.20", "FRIDAY"] },
        { label: "Final venue", value: ["Dabangen Forest", "Hot Spring Hotel"] },
        { label: "Who can join", value: ["College students", "nationwide"] },
      ],
    },
    countdown: { title: "COUNTDOWN TO THE FINAL", sub: "Final opens · 09:00 · Asia/Taipei", units: { days: "Days", hours: "Hrs", minutes: "Min", seconds: "Sec" } },
    marquee: "AGENTIC AI ✦ ENTERPRISE PROBLEMS ✦ REAL-WORLD FIELDS ✦ INDUSTRY × ACADEMIA ✦ TECH VALIDATION ✦ TALENT MATCH ✦ ",
    intro: {
      label: "01 / ABOUT",
      h2: ["This isn't a", "demo-only contest."],
      lead: "Enterprises bring real problems; student teams bring fresh perspectives. From problem definition and technical development to field validation, let's turn Agentic AI into solutions that truly work.",
      p2: "Powered by the Ministry of Education–funded NAPAI program in partnership with TAAI 2026, the contest builds an innovation loop: enterprise needs → academic solutions → technical validation → talent matching → industry adoption.",
      cards: [
        { n: "01", title: "Real enterprise problems", text: "Challenges come from real needs in business processes, knowledge management, and service innovation—no armchair theory." },
        { n: "02", title: "Enterprise mentorship", text: "Finalist teams are matched with enterprise technical experts and academic mentors for field-grounded feedback." },
        { n: "03", title: "A premier conference stage", text: "The final is held alongside TAAI 2026, presenting to AI researchers, professors, and industry leaders." },
        { n: "04", title: "From project to production", text: "Outstanding solutions may extend into collaborations, internships, talent matching, or new enterprise product features." },
      ],
    },
    challenge: {
      label: "02 / THE CHALLENGE",
      kicker: "BUILD AN AGENT THAT WORKS",
      h2: ["What you build", "is AI that gets things done."],
      abilities: [
        { n: "01", title: "Understand real problems", text: "Identify the core pain points worth solving across enterprise processes, knowledge management, and service scenarios." },
        { n: "02", title: "Build intelligent agents", text: "Use LLMs, tool calling, workflows, and multi-agent collaboration so AI can plan and execute tasks." },
        { n: "03", title: "Integrate real systems", text: "Connect APIs, data, and existing services to deliver a verifiable, demonstrable technical prototype." },
      ],
      techLabel: "Toolbox",
      techs: ["LLM", "Tool Use", "RAG", "Workflow", "Multi-Agent", "API Integration"],
    },
    audience: {
      label: "03 / WHO SHOULD JOIN",
      h2: ["If you want your tech", "to meet the real world,"],
      h2em: "this is where it starts.",
      p: "The contest is open to college and university student teams nationwide. Whether you come from CS, information management, design, business, or any other field—if you're ready to collaborate across disciplines, understand problems, and ship ideas, we want you.",
      list: [
        { mark: "✓", title: "AI / software developers", text: "want to tackle agents, LLMs, and system integration" },
        { mark: "✓", title: "Product / design thinkers", text: "great at finding pain points, designing flows and UX" },
        { mark: "✓", title: "Domain / industry experts", text: "understand context so tech answers real needs" },
        { mark: "＋", title: "Cross-disciplinary teams win", text: "Full team and eligibility rules announced with the guidelines" },
      ],
    },
    timeline: {
      label: "04 / TIMELINE",
      h2: ["From a single proposal", "to the final stage."],
      p: "Full contest guidelines are expected in August 2026. Note the key months, start finding teammates, take stock of your skills, and get ready for the enterprise challenges.",
      phases: [
        { date: "2026.08", title: "Rules announced", text: "Enterprise topics, registration, and full contest rules go public.", status: "Coming soon" },
        { date: "2026.08 — 09", title: "Team registration", text: "Students nationwide form teams, pick an enterprise topic, and propose ideas.", status: "Preparing" },
        { date: "2026.09 — 10", title: "Preliminary review", text: "Judged on problem insight, innovation, technical feasibility, and adoption potential.", status: "Planned" },
        { date: "2026.10 — 11", title: "Finalist mentoring", text: "Finalist teams are matched with enterprise and academic mentors to deepen solutions.", status: "Planned" },
        { date: "2026.11.20", title: "Final & showcase", text: "Present results live at TAAI 2026, face the judges, and the awards ceremony.", status: "Final" },
      ],
    },
    venue: {
      label: "05 / FINAL VENUE",
      coords: "25°16'N\n121°24'E",
      dateline: "NOVEMBER 20, 2026 · NEW TAIPEI CITY",
      h2: ["Dabangen Forest", "Hot Spring Hotel"],
      text: "Deep in the Sanxia mountains, bring the future of AI into the real world. The final and showcase are held alongside TAAI 2026, where creativity, technology, and industry meet.",
      dateLabel: "Date",
      dateVal: "Friday, November 20, 2026",
      placeLabel: "Venue",
      placeVal: "Dabangen Forest Hot Spring Hotel, Sanxia, New Taipei City",
    },
    faq: {
      label: "06 / FAQ",
      h2: "You might be wondering",
      items: [
        { q: "Who can join?", a: "The contest is primarily for college and university students nationwide. Detailed enrollment eligibility, team size, and cross-campus rules will follow the official guidelines published in August 2026." },
        { q: "Do I need AI development experience?", a: "The contest requires a verifiable Agentic AI solution, but teams also need problem insight, product design, presentation, and domain knowledge. We recommend finding teammates with complementary skills." },
        { q: "When are enterprise topics released?", a: "Enterprise topics and full guidelines are expected in August 2026, with registration expected from August to September." },
        { q: "What support do finalists get?", a: "Organizers plan to match finalist teams with enterprise technical mentors, with mentoring from October to November to deepen solutions and field fit." },
        { q: "What about prizes and judging?", a: "Awards, prize money, judging criteria, and submission formats await the official guidelines. Leave your contact info to be notified first." },
      ],
    },
    register: {
      kicker: "THE NEXT MOVE IS YOURS.",
      h2: ["Get ready to put your", "AI agent on stage."],
      lead: "Official registration is expected to open in August 2026. Start forming your team now and follow the latest from NAPAI and TAAI 2026.",
      ctaSite: "Visit TAAI 2026 ↗",
      ctaContact: "Contact the organizers →",
      note: "Registration links, guidelines, enterprise topics, and prize details will be updated once confirmed.",
    },
    footer: {
      brandTitle: ["2026 Agentic AI", "Enterprise Agent Challenge"],
      brandSub: "Enterprises pose · Academia solves",
      col1Title: "Organizers & Partners",
      col1: ["Dept. of Information & Technology Education, Ministry of Education", "NAPAI — Intelligent Agents & Physical AI Robotics Program", "TAAI 2026 Taiwan Conference on Artificial Intelligence"],
      col2Title: "Quick Links",
      col2Links: [
        { label: "About", href: "#about" },
        { label: "Timeline", href: "#timeline" },
        { label: "FAQ", href: "#faq" },
        { label: "TAAI 2026 ↗", href: "https://taai2026.github.io/", external: true },
      ],
      col3Title: "Event Info",
      col3: ["2026.11.20", "Dabangen Forest Hot Spring Hotel"],
      email: "taai2026org@gmail.com",
      copyright: "© 2026 NAPAI × TAAI. All rights reserved.",
    },
  },
};
