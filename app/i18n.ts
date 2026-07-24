export type Lang = "zh" | "en";

type Card = { n: string; title: string; text: string };
type Ability = { n: string; title: string; text: string };
type Phase = { date: string; title: string; text: string; status: string };
type AudienceItem = { mark: string; title: string; text: string };
type Faq = { q: string; a: string };
type Criterion = { name: string; weight: number; desc: string };
type Award = { tag: string; title: string; text: string; featured?: boolean };

export type Content = {
  htmlLang: string;
  nav: { about: string; challenge: string; criteria: string; awards: string; timeline: string; faq: string; news: string };
  brandSub: string;
  a11y: { home: string; menu: string; countdown: string; toLang: string; toTheme: string };
  hero: {
    eyebrow1: string; eyebrow2: string; kicker: string[]; h1: string[]; h1em: string;
    lead: string; ctaPrimary: string; ctaSecondary: string;
    meta: { label: string; value: string[] }[];
  };
  countdown: { title: string; sub: string; units: { days: string; hours: string; minutes: string; seconds: string } };
  marquee: string;
  intro: { label: string; h2: string[]; lead: string; p2: string; cards: Card[] };
  why: { label: string; kicker: string; h2: string[]; intro: string; cards: { tag: string; title: string; points: string[] }[] };
  challenge: { label: string; kicker: string; h2: string[]; abilities: Ability[]; techLabel: string; techs: string[] };
  criteria: {
    label: string; kicker: string; h2: string[]; note: string;
    groups: { title: string; items: Criterion[] }[];
  };
  audience: { label: string; h2: string[]; h2em: string; p: string; list: AudienceItem[] };
  awards: { label: string; kicker: string; h2: string[]; intro: string; items: Award[]; note: string };
  timeline: { label: string; h2: string[]; p: string; phases: Phase[] };
  venue: {
    label: string; coords: string; dateline: string; h2: string[]; text: string;
    dateLabel: string; dateVal: string; placeLabel: string; placeVal: string;
  };
  faq: { label: string; h2: string; items: Faq[] };
  register: { kicker: string; h2: string[]; lead: string; ctaSite: string; ctaContact: string; note: string };
  footer: {
    brandTitle: string[]; brandSub: string; col1Title: string; col1: string[];
    col2Title: string; col2Links: { label: string; href: string; external?: boolean }[];
    col3Title: string; col3: string[]; email: string; copyright: string;
  };
};

export const content: Record<Lang, Content> = {
  zh: {
    htmlLang: "zh-Hant",
    nav: { about: "競賽介紹", challenge: "四大賽道", criteria: "評分標準", awards: "獎項", timeline: "重要時程", faq: "常見問題", news: "掌握報名資訊 ↗" },
    brandSub: "Campus Innovation Challenge 2026",
    a11y: { home: "回到頁首", menu: "開啟導覽選單", countdown: "距離決賽倒數", toLang: "切換英文", toTheme: "切換明暗模式" },
    hero: {
      eyebrow1: "教育部 NAPAI 計畫 × TAAI 2026",
      eyebrow2: "真實場域・自主代理・落地驗證",
      kicker: ["NAPAI Agentic AI", "校園落地創新應用競賽"],
      h1: ["讓智慧代理走進校園，"],
      h1em: "真正落地運行。",
      lead: "針對校園與產業的真實痛點，打造能自主規劃、調用工具、串接系統並完成多步驟任務的 Agentic AI 應用。從提案、輔導到實機 Demo，讓作品經得起真實場域驗證。",
      ctaPrimary: "掌握報名資訊 ↗",
      ctaSecondary: "查看四大賽道 ↓",
      meta: [
        { label: "決賽日期", value: ["2026.11.21", "星期六"] },
        { label: "組隊方式", value: ["每隊 3–5 人", "可跨校跨域"] },
        { label: "決賽形式", value: ["實機 Demo", "現場發表"] },
      ],
    },
    countdown: { title: "COUNTDOWN TO THE FINAL", sub: "決賽暨頒獎・2026.11.21・Asia/Taipei", units: { days: "天", hours: "時", minutes: "分", seconds: "秒" } },
    marquee: "AGENTIC AI ✦ 校園落地 ✦ 四大賽道 ✦ 真實場域 ✦ 自主代理 ✦ 實機 DEMO ✦ 產學共創 ✦ ",
    intro: {
      label: "01 / ABOUT",
      h2: ["不只展示技術，", "更要真正落地。"],
      lead: "本競賽以「真實場域出題、學生團隊以 Agentic AI 解題、成果須可落地驗證」為核心，邀請全國大專校院學生打造可實際部署運行的智慧代理應用。",
      p2: "競賽源自教育部資科司 NAPAI 計畫，由國立中央大學資訊工程學系張嘉惠教授主持，攜手 TAAI 2026 臺灣人工智慧年會，由 NAPAI 計畫協同主持人、國立臺北大學資訊管理研究所戴敏育教授主責承辦。",
      cards: [
        { n: "01", title: "真實場域與資料", text: "題目來自校園或產業需求，合作場域提供去敏感資料集、API 文件與導入情境。" },
        { n: "02", title: "技術增能與資源", text: "提供 Agentic AI、Tool Use、RAG、評測與安全治理講座，並媒合雲端、模型 API 與開發工具。" },
        { n: "03", title: "一對一顧問輔導", text: "入圍團隊媒合校園場域或企業技術顧問，深化需求理解、技術實作與部署可行性。" },
        { n: "04", title: "獎項與落地機會", text: "設首獎、優選、企業特別獎、數位徽章與證書，優秀作品可獲導入評估及實習優先面試。" },
      ],
    },
    why: {
      label: "02 / WHY CAMPUS",
      kicker: "校園是 AGENTIC AI 的理想試驗場",
      h2: ["從被動問答，升級為能完成任務的智慧代理。"],
      intro: "校園擁有邊界清楚且需求真實的教務、圖書館、學習支援、行政流程與校園服務場景；學生同時是開發者與使用者，能快速取得回饋並持續迭代。",
      cards: [
        { tag: "Agentic 核心", title: "作品必須展現自主代理能力", points: ["自主拆解與規劃", "工具調用與系統串接", "完成多步驟任務"] },
        { tag: "落地核心", title: "作品必須回應真實場域需求", points: ["實機操作 Demo", "部署與採用可行性", "資料與安全規範"] },
        { tag: "校園標竿", title: "中興大學「興 ArIs」展示落地可能", points: ["課程與教務查詢", "圖書與法規資源", "多語介面與校園單一登入"] },
        { tag: "機制借鏡", title: "吸收國內外競賽最佳實務", points: ["Microsoft 多賽道與技術增能", "政大兩階段評選", "實機 Demo 與入圍實作支持"] },
      ],
    },
    challenge: {
      label: "03 / FOUR TRACKS",
      kicker: "報名時擇一賽道參賽",
      h2: ["四大賽道，", "讓代理進入真實工作流。"],
      abilities: [
        { n: "01", title: "智慧教務與學習支援", text: "協助選課、學習診斷、課業諮詢與個人化學習路徑，如課程推薦、學習歷程診斷、跨系所修課規劃。" },
        { n: "02", title: "校園行政流程自動化", text: "自動化表單、文書、法規查詢與跨單位流程，如行政文書草擬、請假報帳、跨處室申辦導引。" },
        { n: "03", title: "圖書館與知識服務代理", text: "串接館藏與知識庫，提供館藏與全文檢索、文獻彙整、研究主題探索與資源推薦。" },
        { n: "04", title: "產業出題・場域共創", text: "依合作企業提供的真實場域、API 與資料集，打造知識管理、智慧客服、查詢分析或業務流程自動化代理。" },
      ],
      techLabel: "技術方向",
      techs: ["LLM", "Tool Use", "RAG", "Workflow", "Multi-Agent", "API Integration", "Agent Evaluation", "AI Safety"],
    },
    criteria: {
      label: "04 / JUDGING",
      kicker: "兩階段評選・從提案到實機驗證",
      h2: ["評的不只是創意，更是落地與自主性。"],
      groups: [
        {
          title: "初賽｜提案計畫書＋概念影片",
          items: [
            { name: "落地可行性", weight: 25, desc: "問題是否對應真實需求，解法能否在校園或產業場域實際部署運行。" },
            { name: "技術規劃完整度", weight: 25, desc: "Agentic 架構、工具調用與系統串接規劃是否清晰可行。" },
            { name: "創新性", weight: 25, desc: "是否具備獨到觀點，能為場域帶來創新或突破性改善。" },
            { name: "泛用性", weight: 25, desc: "解法是否具備延伸至其他相似場域、流程或使用情境的潛力。" },
          ],
        },
        {
          title: "決賽｜實機 Demo Poster＋上台發表",
          items: [
            { name: "實作完成度（Demo）", weight: 35, desc: "是否具體展示可運行的代理成果及其於真實場域應用的可能性。" },
            { name: "技術深度（自主性）", weight: 20, desc: "代理的自主規劃、工具調用、系統串接與多步驟任務完成能力。" },
            { name: "落地驗證與實用價值", weight: 20, desc: "部署、使用者採用、持續運行的驗證程度與服務或商用價值。" },
            { name: "創新性", weight: 15, desc: "解法的創新觀點與對場域的突破性貢獻。" },
            { name: "現場發表", weight: 10, desc: "報告是否完整清晰，能有效傳達成果並引起評審與聽眾共鳴。" },
          ],
        },
      ],
      note: "決賽以可實機操作為核心要求。若入圍團隊無法提供實際 Demo，主辦單位保留要求繳回入圍獎金的最終裁決權。",
    },
    audience: {
      label: "05 / ELIGIBILITY",
      h2: ["跨校、跨域組隊，"],
      h2em: "把想法做成可運行的作品。",
      p: "參賽對象為全國大專校院在學學生，包含研究生，不限科系。鼓勵由技術、設計、產品、行政或領域知識等不同背景成員共同組隊。",
      list: [
        { mark: "3–5", title: "每隊 3 至 5 人", text: "須設隊長 1 名，可設指導教師 1 名但非必要。" },
        { mark: "跨", title: "可跨域、跨校組隊", text: "不限科系，鼓勵以互補能力回應複雜的真實場域問題。" },
        { mark: "原", title: "作品須為原創", text: "以 Agentic AI 為核心，資料使用須符合場域提供方的去敏感與使用規範。" },
        { mark: "1", title: "每位學生限參加一隊", text: "每隊原則上選擇一個賽道參賽。" },
      ],
    },
    awards: {
      label: "06 / AWARDS",
      kicker: "獎金・獎狀・數位徽章・落地媒合",
      h2: ["不只把獎帶走，", "更把作品帶進真實場域。"],
      intro: "競賽設名次獎項與企業特別獎，並為所有完成決賽的團隊備妥數位徽章與參賽證明。表現優異的作品更有機會進入場域導入評估，讓成果延續到競賽之後。",
      items: [
        { tag: "名次獎項", title: "首獎・優選", text: "設首獎、優選等名次，頒發獎金與獎狀，表彰落地成熟度與整體完成度最高的作品。", featured: true },
        { tag: "企業特別獎", title: "由贊助企業冠名設置", text: "表彰最具商用或落地價值之作品。評審並得視各賽道作品水準，於賽道首獎之外增設特別獎。" },
        { tag: "完賽肯定", title: "數位徽章與參賽證書", text: "所有完成決賽的團隊均頒發數位徽章與參賽證明，可作為學習歷程與求職的具體佐證。" },
        { tag: "落地與媒合", title: "導入評估與實習優先面試", text: "優秀作品可獲校園或企業場域的導入評估機會；參賽學生並享合作企業實習優先面試。" },
      ],
      note: "獎項名額、獎金金額與入圍獎金發放方式，以後續公布的正式競賽辦法為準。決賽若無法提供實機 Demo，主辦單位保留要求繳回入圍獎金之最終裁決權。",
    },
    timeline: {
      label: "07 / TIMELINE",
      h2: ["從技術增能，走到 TAAI 決賽舞台。"],
      p: "競賽採「增能—初賽—輔導—複賽」四階段。初賽以書面與影片審查，入圍後接受場域顧問輔導，最終以實機 Demo 與現場發表驗證成果。",
      phases: [
        { date: "2026.06–07", title: "場域邀請與題目確認", text: "邀請校園單位與企業，確認題目、去敏感資料、API 與評分規格。", status: "籌備" },
        { date: "2026.08.07", title: "辦法公告・開放報名", text: "公布競賽辦法、四大賽道、題目與報名資訊。", status: "報名啟動" },
        { date: "2026.08–09", title: "隊伍報名與技術增能", text: "辦理線上或實體工作坊，提供技術、運算、API 與場域資源。", status: "增能" },
        { date: "2026.09.30", title: "初賽提案審查", text: "繳交 20 頁簡報與 6 分鐘影片，依初賽四項標準進行審查。", status: "初賽" },
        { date: "2026.10.21", title: "入圍隊伍宣布", text: "宣布入圍團隊，媒合校園場域或企業顧問並展開一對一輔導。", status: "輔導" },
        { date: "2026.11.21", title: "決賽・成果發表與頒獎", text: "於 TAAI 2026 現場進行實機 Demo Poster 與上台發表。", status: "FINAL" },
      ],
    },
    venue: {
      label: "08 / FINAL VENUE",
      coords: "25°16'N\n121°24'E",
      dateline: "NOVEMBER 21, 2026・NEW TAIPEI CITY",
      h2: ["大板根森林", "溫泉酒店"],
      text: "決賽暨頒獎將與 TAAI 2026 臺灣人工智慧年會同場舉行。入圍團隊在產學評審與專業社群面前，以實機成果證明智慧代理可在真實場域運行。",
      dateLabel: "日期",
      dateVal: "2026 年 11 月 21 日（星期六）",
      placeLabel: "地點",
      placeVal: "新北市三峽區，大板根森林溫泉酒店",
    },
    faq: {
      label: "09 / FAQ",
      h2: "參賽前，你需要知道",
      items: [
        { q: "誰可以參加？隊伍要幾人？", a: "全國大專校院在學學生（含研究生）皆可參加，不限科系。每隊 3 至 5 人，須設隊長 1 名，可跨校跨域組隊；指導教師非必要。" },
        { q: "初賽要繳交什麼？", a: "新版企畫書時程表載明初賽提交 20 頁簡報與 6 分鐘影片，並依落地可行性、技術規劃完整度、創新性及泛用性評分。" },
        { q: "決賽一定要有實機 Demo 嗎？", a: "是。決賽採實機 Demo Poster 加上台發表；無法提供實際 Demo 時，主辦單位保留要求繳回入圍獎金的最終裁決權。" },
        { q: "主辦單位會提供哪些支援？", a: "包含 Agentic AI 專家講座、雲端與模型 API 資源、去敏感資料集、API 文件，以及入圍後的一對一場域顧問輔導。" },
        { q: "有哪些獎勵與後續機會？", a: "設首獎、優選、企業特別獎、獎金與獎狀；完賽團隊可獲數位徽章與參賽證明，優秀作品有機會接受場域導入評估，參賽學生享實習優先面試。" },
      ],
    },
    register: {
      kicker: "BUILD FOR THE REAL WORLD.",
      h2: ["找到隊友，", "讓 Agent 在真實場域運行。"],
      lead: "競賽辦法與報名預定於 2026 年 8 月 7 日公告。現在就開始組隊、選擇賽道，準備你的 Agentic AI 落地提案。",
      ctaSite: "前往 TAAI 2026 官網 ↗",
      ctaContact: "查看競賽時程 ↑",
      note: "正式報名連結、場域題目、獎金金額與完整繳交格式，以後續公布的正式競賽辦法為準。",
    },
    footer: {
      brandTitle: ["NAPAI Agentic AI", "校園落地創新應用競賽"],
      brandSub: "真實場域・自主代理・落地驗證",
      col1Title: "主協承辦單位",
      col1: ["主辦｜教育部資科司 NAPAI 計畫", "協辦｜TAAI 2026 臺灣人工智慧年會", "承辦｜國立中央大學資訊工程學系", "承辦｜國立臺北大學資訊管理研究所"],
      col2Title: "快速連結",
      col2Links: [
        { label: "競賽介紹", href: "#about" },
        { label: "四大賽道", href: "#challenge" },
        { label: "評分標準", href: "#criteria" },
        { label: "獎項與激勵", href: "#awards" },
        { label: "重要時程", href: "#timeline" },
        { label: "TAAI 2026 ↗", href: "https://taai2026.github.io/", external: true },
      ],
      col3Title: "活動資訊",
      col3: ["決賽｜2026.11.21", "地點｜大板根森林溫泉酒店", "對象｜全國大專校院在學學生", "組隊｜每隊 3–5 人"],
      email: "",
      copyright: "© 2026 NAPAI × TAAI. All rights reserved.",
    },
  },
  en: {
    htmlLang: "en",
    nav: { about: "About", challenge: "Four Tracks", criteria: "Judging", awards: "Awards", timeline: "Timeline", faq: "FAQ", news: "Registration updates ↗" },
    brandSub: "Campus Innovation Challenge 2026",
    a11y: { home: "Back to top", menu: "Open navigation menu", countdown: "Countdown to the final", toLang: "Switch to Chinese", toTheme: "Toggle light or dark theme" },
    hero: {
      eyebrow1: "MOE NAPAI PROGRAM × TAAI 2026",
      eyebrow2: "REAL FIELDS・AUTONOMOUS AGENTS・DEPLOYMENT",
      kicker: ["NAPAI Agentic AI", "Campus Innovation Challenge"],
      h1: ["Bring intelligent agents to campus—"],
      h1em: "and make them work.",
      lead: "Tackle real campus and industry pain points with Agentic AI that plans autonomously, calls tools, integrates systems, and completes multi-step tasks. Move from proposal and mentoring to a live demo validated in a real field.",
      ctaPrimary: "Registration updates ↗",
      ctaSecondary: "Explore four tracks ↓",
      meta: [
        { label: "Final date", value: ["2026.11.21", "SATURDAY"] },
        { label: "Team", value: ["3–5 students", "Cross-campus welcome"] },
        { label: "Final format", value: ["Live Demo", "On-stage pitch"] },
      ],
    },
    countdown: { title: "COUNTDOWN TO THE FINAL", sub: "Final & Awards・2026.11.21・Asia/Taipei", units: { days: "Days", hours: "Hrs", minutes: "Min", seconds: "Sec" } },
    marquee: "AGENTIC AI ✦ CAMPUS DEPLOYMENT ✦ FOUR TRACKS ✦ REAL FIELDS ✦ AUTONOMOUS AGENTS ✦ LIVE DEMO ✦ CO-CREATION ✦ ",
    intro: {
      label: "01 / ABOUT",
      h2: ["Beyond showcasing tech—", "make it work for real."],
      lead: "The challenge centers on real field problems, student-built Agentic AI solutions, and deployment validation. University students nationwide are invited to build intelligent agents that can actually run in campus or industry settings.",
      p2: "The challenge is organized under the Ministry of Education's NAPAI program, led by Prof. Chia-Hui Chang of National Central University, in collaboration with TAAI 2026 and coordinated by co-PI Prof. Min-Yuh Day of National Taipei University.",
      cards: [
        { n: "01", title: "Real fields and data", text: "Campus and industry partners provide de-identified datasets, API documents, deployment contexts, and real operational needs." },
        { n: "02", title: "Training and resources", text: "Expert sessions cover Agentic AI, tool use, RAG, evaluation, and safety, with cloud, model API, and development resources." },
        { n: "03", title: "One-on-one mentoring", text: "Finalists are matched with campus or enterprise mentors to deepen field understanding, implementation, and deployment feasibility." },
        { n: "04", title: "Awards and adoption", text: "Top prizes, merit awards, corporate awards, badges, certificates, adoption reviews, and priority internship interviews await." },
      ],
    },
    why: {
      label: "02 / WHY CAMPUS",
      kicker: "CAMPUS IS AN IDEAL AGENTIC AI TESTBED",
      h2: ["Move from passive answers to agents that complete tasks."],
      intro: "Campuses offer bounded yet authentic settings across academic affairs, libraries, learning support, administration, and student services. Students are both developers and users, enabling fast feedback and continuous iteration.",
      cards: [
        { tag: "Agentic core", title: "Every project must demonstrate autonomy", points: ["Autonomous task planning", "Tool use and system integration", "Multi-step task completion"] },
        { tag: "Deployment core", title: "Every project must answer a real need", points: ["Hands-on live demo", "Adoption and deployment feasibility", "Data and safety compliance"] },
        { tag: "Campus benchmark", title: "NCHU's Hsing ArIs shows what deployment can be", points: ["Course and academic information", "Library and policy resources", "Multilingual UI and campus SSO"] },
        { tag: "Format benchmarks", title: "Learning from leading competitions", points: ["Microsoft multi-track training", "NCCU two-stage selection", "Live demos and finalist build support"] },
      ],
    },
    challenge: {
      label: "03 / FOUR TRACKS",
      kicker: "CHOOSE ONE TRACK WHEN REGISTERING",
      h2: ["Four tracks.", "One goal: agents in real workflows."],
      abilities: [
        { n: "01", title: "Smart Academic & Learning Support", text: "Course selection, learning diagnostics, academic advising, personalized pathways, course recommendations, and cross-department study planning." },
        { n: "02", title: "Campus Administration Automation", text: "Automate forms, documents, policy search, leave and reimbursement processes, and cross-office service guidance." },
        { n: "03", title: "Library & Knowledge Service Agents", text: "Connect catalogs and knowledge bases for full-text retrieval, literature synthesis, topic exploration, and resource recommendations." },
        { n: "04", title: "Industry Field Co-Creation", text: "Use real environments, APIs, and datasets from partners to build knowledge, customer service, analytics, or process automation agents." },
      ],
      techLabel: "Technical directions",
      techs: ["LLM", "Tool Use", "RAG", "Workflow", "Multi-Agent", "API Integration", "Agent Evaluation", "AI Safety"],
    },
    criteria: {
      label: "04 / JUDGING",
      kicker: "TWO STAGES・FROM PROPOSAL TO LIVE VALIDATION",
      h2: ["Judged not only on ideas,", "but deployment and autonomy."],
      groups: [
        {
          title: "Preliminary｜Proposal deck + concept video",
          items: [
            { name: "Deployment feasibility", weight: 25, desc: "Whether the problem reflects a real need and the solution can run in a campus or industry field." },
            { name: "Technical plan completeness", weight: 25, desc: "Clarity and feasibility of the Agentic architecture, tool use, and system integration plan." },
            { name: "Innovation", weight: 25, desc: "Originality and potential to create meaningful improvement in the target field." },
            { name: "Generalizability", weight: 25, desc: "Potential to extend the solution to comparable fields, workflows, or user scenarios." },
          ],
        },
        {
          title: "Final｜Live Demo Poster + on-stage pitch",
          items: [
            { name: "Implementation completeness", weight: 35, desc: "A working agent demonstrated live and its realistic application potential." },
            { name: "Technical depth and autonomy", weight: 20, desc: "Autonomous planning, tool use, integration, and multi-step task completion." },
            { name: "Validation and practical value", weight: 20, desc: "Evidence of deployment, adoption, sustainable operation, and service or business value." },
            { name: "Innovation", weight: 15, desc: "Novel insight and breakthrough contribution to the target field." },
            { name: "Presentation", weight: 10, desc: "Completeness, clarity, and ability to engage judges and the audience." },
          ],
        },
      ],
      note: "A hands-on live demo is a core final requirement. If a finalist cannot provide an actual demo, the organizer reserves the final right to request the return of the finalist award.",
    },
    audience: {
      label: "05 / ELIGIBILITY",
      h2: ["Build across campuses and disciplines—"],
      h2em: "turn ideas into working systems.",
      p: "Open to currently enrolled students, including graduate students, at colleges and universities nationwide. All majors are welcome, and teams with complementary skills are encouraged.",
      list: [
        { mark: "3–5", title: "Teams of 3 to 5", text: "Each team must name one leader; one faculty adviser is optional." },
        { mark: "＋", title: "Cross-disciplinary and cross-campus", text: "Students from any major may combine complementary technical, product, design, and domain skills." },
        { mark: "✓", title: "Original work required", text: "Agentic AI must be central, and all data use must follow partner de-identification and usage rules." },
        { mark: "1", title: "One team per student", text: "Each team should select one competition track." },
      ],
    },
    awards: {
      label: "06 / AWARDS",
      kicker: "PRIZES・CERTIFICATES・BADGES・ADOPTION",
      h2: ["More than a prize—", "a path into the real field."],
      intro: "The challenge offers ranked prizes and sponsor-named special awards, with digital badges and certificates for every team that completes the final. Standout projects can move on to field adoption reviews.",
      items: [
        { tag: "Ranked prizes", title: "Top prize & merit awards", text: "Top and merit placements receive cash prizes and certificates, recognizing the most deployment-ready and complete work.", featured: true },
        { tag: "Corporate award", title: "Sponsor-named special awards", text: "Recognizing the most commercially or operationally valuable work. Judges may add track-level special awards beyond each track's top prize." },
        { tag: "Completion", title: "Digital badges & certificates", text: "Every team that completes the final receives a digital badge and certificate of participation for portfolios and job applications." },
        { tag: "Adoption & matching", title: "Adoption review & priority interviews", text: "Standout projects may enter campus or enterprise adoption reviews, and participants receive priority internship interviews with partner companies." },
      ],
      note: "Award counts, prize amounts, and finalist award disbursement follow the official guidelines. If a finalist cannot provide a live demo, the organizer reserves the final right to request the return of the finalist award.",
    },
    timeline: {
      label: "07 / TIMELINE",
      h2: ["From technical training to the TAAI final stage."],
      p: "The four stages are training, preliminary review, mentoring, and the final. Written and video submissions lead to field mentoring, then a live demo and presentation at TAAI 2026.",
      phases: [
        { date: "2026.06–07", title: "Field partners and topics", text: "Confirm campus and industry topics, de-identified data, APIs, and judging specifications.", status: "PREP" },
        { date: "2026.08.07", title: "Rules announced & registration opens", text: "Publish the guidelines, four tracks, topics, and registration information.", status: "OPEN" },
        { date: "2026.08–09", title: "Registration & technical training", text: "Run online or in-person workshops and provide technical, cloud, API, and field resources.", status: "TRAIN" },
        { date: "2026.09.30", title: "Preliminary review", text: "Submit a 20-page deck and 6-minute video for review under four equally weighted criteria.", status: "PRELIM" },
        { date: "2026.10.21", title: "Finalists announced", text: "Finalists are matched with campus or enterprise field mentors for one-on-one guidance.", status: "MENTOR" },
        { date: "2026.11.21", title: "Final, showcase & awards", text: "Live Demo Poster and on-stage presentation at TAAI 2026.", status: "FINAL" },
      ],
    },
    venue: {
      label: "08 / FINAL VENUE",
      coords: "25°16'N\n121°24'E",
      dateline: "NOVEMBER 21, 2026・NEW TAIPEI CITY",
      h2: ["The Great Roots", "Forestry Spa Resort"],
      text: "The final and awards will be held alongside TAAI 2026. Finalists will demonstrate to academic and industry judges that their intelligent agents can work in real fields.",
      dateLabel: "Date",
      dateVal: "Saturday, November 21, 2026",
      placeLabel: "Venue",
      placeVal: "The Great Roots Forestry Spa Resort, Sanxia, New Taipei City",
    },
    faq: {
      label: "09 / FAQ",
      h2: "Before you enter",
      items: [
        { q: "Who can join and how large is a team?", a: "Currently enrolled college and university students, including graduate students, may enter. Teams have 3–5 students, must name one leader, may be cross-campus and cross-disciplinary, and may optionally have one faculty adviser." },
        { q: "What is required for the preliminary round?", a: "The draft schedule specifies a 20-page presentation deck and a 6-minute video, judged on deployment feasibility, technical plan completeness, innovation, and generalizability." },
        { q: "Is a live demo mandatory in the final?", a: "Yes. The final uses a Live Demo Poster plus on-stage presentation. The organizer reserves the right to request return of the finalist award if an actual demo cannot be provided." },
        { q: "What support is provided?", a: "Agentic AI expert sessions, cloud and model API resources, de-identified datasets, API documents, and one-on-one field mentoring for finalists." },
        { q: "What awards and opportunities are available?", a: "Top and merit prizes, corporate special awards, certificates, digital badges, possible field adoption reviews, and priority internship interviews." },
      ],
    },
    register: {
      kicker: "BUILD FOR THE REAL WORLD.",
      h2: ["Find your team.", "Make your agent work in the field."],
      lead: "Guidelines and registration are scheduled for August 7, 2026. Start forming your 3–5 person team, choose a track, and prepare an Agentic AI deployment proposal.",
      ctaSite: "Visit TAAI 2026 ↗",
      ctaContact: "View timeline ↑",
      note: "The final registration link, field topics, prize amounts, and complete submission formats are subject to the official guidelines.",
    },
    footer: {
      brandTitle: ["NAPAI Agentic AI", "Campus Innovation Challenge"],
      brandSub: "Real fields・Autonomous agents・Deployment validation",
      col1Title: "Organizations",
      col1: ["Organizer｜MOE NAPAI Program", "Co-organizer｜TAAI 2026", "Coordinator｜Dept. of Computer Science & Information Engineering, NCU", "Coordinator｜Graduate Institute of Information Management, NTPU"],
      col2Title: "Quick Links",
      col2Links: [
        { label: "About", href: "#about" },
        { label: "Four Tracks", href: "#challenge" },
        { label: "Judging", href: "#criteria" },
        { label: "Awards", href: "#awards" },
        { label: "Timeline", href: "#timeline" },
        { label: "TAAI 2026 ↗", href: "https://taai2026.github.io/", external: true },
      ],
      col3Title: "Event Info",
      col3: ["Final｜2026.11.21", "Venue｜The Great Roots Forestry Spa Resort", "Eligibility｜Currently enrolled university students", "Team｜3–5 students"],
      email: "",
      copyright: "© 2026 NAPAI × TAAI. All rights reserved.",
    },
  },
};
