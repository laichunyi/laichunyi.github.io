const translations = {
  zh: {
    navAbout: "關於我",
    navResearch: "學術成果",
    navContact: "聯絡我",
    heroEyebrow: "醫學科學研究所 · Taipei",
    heroText: "以醫學科學為核心，探索疾病機制、轉譯研究與臨床資料之間的連結，讓知識從實驗桌走向照護現場。",
    emailMe: "寄信給我",
    viewResearch: "查看成果",
    visualLabel: "Research Focus",
    visualTitle: "Medical Science",
    metricOne: "研究領域",
    metricOneValue: "醫學科學",
    metricTwo: "所在地",
    metricThree: "機構",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutBody: "我隸屬於臺北醫學大學醫學科學研究所，關注生醫資料、疾病表徵與轉譯醫學的交會。這張電子名片以 PubMed 的乾淨資訊層級作為靈感，將研究者身份、聯絡方式與學術足跡集中在一頁。",
    tagOne: "轉譯醫學",
    tagTwo: "生醫資料",
    tagThree: "疾病機制",
    tagFour: "學術溝通",
    researchTitle: "學術成果",
    researchIntro: "以下依 PubMed 目前對「ChunYi Lai」的查詢狀態整理。PubMed 會將此查詢轉譯為 Lai, Chunyi[Full Author Name]，目前列出 6 筆結果。",
    queryLabel: "查詢字串",
    openPubmed: "開啟 PubMed",
    resultMeta: "PubMed query: ChunYi Lai · Results: 6",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactHint: "歡迎聯繫研究交流、學術合作或課程相關討論。"
  },
  en: {
    navAbout: "About",
    navResearch: "Publications",
    navContact: "Contact",
    heroEyebrow: "Graduate Institute of Medical Sciences · Taipei",
    heroText: "Centered on medical science, this profile connects disease mechanisms, translational research, and clinical data so knowledge can move from bench insight toward care.",
    emailMe: "Email Me",
    viewResearch: "View Work",
    visualLabel: "Research Focus",
    visualTitle: "Medical Science",
    metricOne: "Field",
    metricOneValue: "Medical Science",
    metricTwo: "Location",
    metricThree: "Institution",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutBody: "Chun Yi is affiliated with the Graduate Institute of Medical Sciences at Taipei Medical University, with interests across biomedical data, disease phenotypes, and translational medicine. This digital card borrows PubMed's clean information hierarchy to bring identity, contact, and academic traces into one page.",
    tagOne: "Translational Medicine",
    tagTwo: "Biomedical Data",
    tagThree: "Disease Mechanisms",
    tagFour: "Academic Communication",
    researchTitle: "Academic Work",
    researchIntro: "This section reflects the current PubMed query state for “ChunYi Lai”. PubMed translates it as Lai, Chunyi[Full Author Name], with 6 results listed below.",
    queryLabel: "Search query",
    openPubmed: "Open PubMed",
    resultMeta: "PubMed query: ChunYi Lai · Results: 6",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactHint: "Open to research exchange, academic collaboration, and course-related discussion."
  }
};

const publications = [
  {
    title: "Anticancer polypyrrole-polyethylenimine drug-free nanozyme for precise B-cell lymphoma therapy.",
    meta: "Biomed Pharmacother · 2023 Apr · PMID: 36796279 · DOI: 10.1016/j.biopha.2023.114397",
    url: "https://pubmed.ncbi.nlm.nih.gov/36796279/"
  },
  {
    title: "Distinct B and NKT cell responses shape the delayed response to ChAdOx1 nCoV-19 vaccine in end-stage renal disease.",
    meta: "J Infect · 2022 Jun · PMID: 35240199 · DOI: 10.1016/j.jinf.2022.02.027",
    url: "https://pubmed.ncbi.nlm.nih.gov/35240199/"
  },
  {
    title: "Different Induction of PD-L1 (CD274) and PD-1 (CD279) Expression in THP-1-Differentiated Types 1 and 2 Macrophages.",
    meta: "J Inflamm Res · 2021 · PMID: 34675601 · DOI: 10.2147/JIR.S329921",
    url: "https://pubmed.ncbi.nlm.nih.gov/34675601/"
  },
  {
    title: "Carnosic Acid Alleviates Levodopa-Induced Dyskinesia and Cell Death in 6-Hydroxydopamine-lesioned Rats and in SH-SY5Y Cells.",
    meta: "Front Pharmacol · 2021 · PMID: 34434108 · DOI: 10.3389/fphar.2021.703894",
    url: "https://pubmed.ncbi.nlm.nih.gov/34434108/"
  },
  {
    title: "Antiviral activity of Portulaca oleracea L. against influenza A viruses.",
    meta: "J Ethnopharmacol · 2019 Sep 15 · PMID: 31170517 · DOI: 10.1016/j.jep.2019.112013",
    url: "https://pubmed.ncbi.nlm.nih.gov/31170517/"
  },
  {
    title: "Persistent nasal carriers of Acinetobacter baumannii in long-term-care facilities.",
    meta: "Am J Infect Control · 2017 Jul 1 · PMID: 28284750 · DOI: 10.1016/j.ajic.2017.02.005",
    url: "https://pubmed.ncbi.nlm.nih.gov/28284750/"
  }
];

let currentLanguage = localStorage.getItem("language") || "zh";
let currentTheme = localStorage.getItem("theme") || "light";

const languageToggle = document.querySelector("#languageToggle");
const themeToggle = document.querySelector("#themeToggle");
const publicationList = document.querySelector("#publicationList");

function applyTranslations() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-Hant" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (translations[currentLanguage][key]) {
      node.textContent = translations[currentLanguage][key];
    }
  });
  languageToggle.querySelector(".toggle-label").textContent = currentLanguage === "zh" ? "EN" : "中";
  renderPublications();
}

function applyTheme() {
  document.documentElement.dataset.theme = currentTheme;
  themeToggle.querySelector(".theme-icon").textContent = currentTheme === "light" ? "☾" : "☼";
}

function renderPublications() {
  publicationList.innerHTML = publications.map((item) => `
    <li>
      <a href="${item.url}" target="_blank" rel="noopener">${item.title}</a>
      <span class="pub-meta">${item.meta}</span>
      <span class="pub-meta">${translations[currentLanguage].resultMeta}</span>
    </li>
  `).join("");
}

function initAnimations() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const revealNodes = document.querySelectorAll(".reveal");
  if (window.gsap) {
    gsap.to(revealNodes, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      stagger: 0.09
    });

    gsap.from(".brand-mark", {
      rotate: -10,
      scale: 0.86,
      duration: 0.7,
      ease: "back.out(1.8)"
    });
  } else {
    revealNodes.forEach((node) => {
      node.style.opacity = "1";
      node.style.transform = "none";
    });
  }
}

function initCanvas() {
  const canvas = document.querySelector("#bioCanvas");
  const ctx = canvas.getContext("2d");
  const particles = Array.from({ length: 54 }, (_, index) => ({
    angle: (Math.PI * 2 * index) / 54,
    orbit: 72 + Math.random() * 220,
    speed: 0.002 + Math.random() * 0.006,
    radius: 2 + Math.random() * 4,
    phase: Math.random() * Math.PI * 2
  }));

  function colors() {
    const dark = document.documentElement.dataset.theme === "dark";
    return {
      bg: dark ? "rgba(24, 34, 30, 0.2)" : "rgba(255, 255, 255, 0.22)",
      line: dark ? "rgba(159, 189, 152, 0.18)" : "rgba(70, 107, 88, 0.16)",
      dot: dark ? "rgba(125, 197, 189, 0.88)" : "rgba(47, 111, 115, 0.82)",
      accent: dark ? "rgba(214, 179, 94, 0.78)" : "rgba(193, 154, 74, 0.75)"
    };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * ratio;
    canvas.height = rect.height * ratio;
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  }

  function draw(time) {
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const palette = colors();
    ctx.clearRect(0, 0, rect.width, rect.height);

    const gradient = ctx.createRadialGradient(centerX, centerY, 20, centerX, centerY, rect.width * 0.7);
    gradient.addColorStop(0, palette.bg);
    gradient.addColorStop(1, "transparent");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    particles.forEach((particle, index) => {
      const pulse = Math.sin(time * 0.001 + particle.phase) * 18;
      const x = centerX + Math.cos(particle.angle + time * particle.speed) * (particle.orbit + pulse);
      const y = centerY + Math.sin(particle.angle * 1.7 + time * particle.speed) * (particle.orbit * 0.68 + pulse);

      if (index % 3 === 0) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = palette.line;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.beginPath();
      ctx.arc(x, y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = index % 8 === 0 ? palette.accent : palette.dot;
      ctx.fill();
    });

    ctx.beginPath();
    ctx.arc(centerX, centerY, 58 + Math.sin(time * 0.002) * 5, 0, Math.PI * 2);
    ctx.strokeStyle = palette.accent;
    ctx.lineWidth = 2;
    ctx.stroke();

    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(draw);
}

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "zh" ? "en" : "zh";
  localStorage.setItem("language", currentLanguage);
  applyTranslations();
});

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "light" ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
  applyTheme();
});

applyTheme();
applyTranslations();
initCanvas();

window.addEventListener("load", initAnimations);
