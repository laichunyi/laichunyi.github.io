const translations = {
  zh: {
    navAbout: "關於我",
    navInterests: "研究興趣",
    navResearch: "學術成果",
    navContact: "聯絡我",
    heroEyebrow: "免疫監測 · 醫學科學研究所 · Taipei",
    heroText: "以醫學科學與免疫監測為核心，關注免疫細胞表現、疾病圖譜與臨床資料之間的連結；透過可視化分析與文獻脈絡，讓研究結果更容易被理解、追蹤與轉譯。",
    emailMe: "寄信給我",
    viewResearch: "查看成果",
    visualLabel: "Research Focus",
    visualTitle: "Immune Mapping",
    heroFocusTitle: "研究焦點",
    heroFocusOne: "免疫細胞圖譜與疾病機制探索",
    heroFocusTwo: "高參數流式分析、熱圖與 UMAP 資料呈現",
    heroFocusThree: "轉譯研究、精準健康與臨床決策連結",
    metricOne: "研究領域",
    metricOneValue: "醫學科學 / 免疫監測",
    metricTwo: "所在地",
    metricThree: "機構",
    aboutEyebrow: "About",
    aboutTitle: "關於我",
    aboutBody: "我隸屬於臺北醫學大學醫學科學研究所，關注免疫檢測、生醫資料、疾病表徵與轉譯醫學的交會。網站文案參考免疫健康監測平台的敘事，聚焦於以標準化生物標記、高參數單細胞資料與可視化圖譜，協助理解個體免疫狀態、疾病風險與研究成果之間的關係。",
    tagOne: "免疫圖譜",
    tagTwo: "高參數分析",
    tagThree: "精準健康",
    tagFour: "學術溝通",
    interestsKicker: "Research interests",
    interestsTitle: "研究興趣",
    interestOneBody: "以免疫細胞族群與功能性亞群為線索，將複雜的免疫狀態轉化成可閱讀、可比較的疾病圖譜。",
    interestTwoBody: "結合高參數流式細胞分析、熱圖、T-SNE/UMAP 與生物統計，整理免疫資料中的族群差異與動態變化。",
    interestThreeBody: "從預防、診斷、治療到癒後追蹤的觀點，探索免疫資訊如何支援精準健康與轉譯醫學研究。",
    researchTitle: "學術成果",
    researchIntro: "以下依 PubMed 目前對「ChunYi Lai」的查詢狀態整理。PubMed 會將此查詢轉譯為 Lai, Chunyi[Full Author Name]，目前列出 4 筆結果。",
    queryLabel: "查詢字串",
    openPubmed: "開啟 PubMed",
    resultMeta: "PubMed query: ChunYi Lai · Results: 4",
    contactEyebrow: "Contact",
    contactTitle: "聯絡我",
    contactHint: "歡迎聯繫免疫監測、生醫資料分析、學術合作或課程相關討論。"
  },
  en: {
    navAbout: "About",
    navInterests: "Interests",
    navResearch: "Publications",
    navContact: "Contact",
    heroEyebrow: "Immune Monitoring · Medical Sciences · Taipei",
    heroText: "Centered on medical science and immune monitoring, this profile connects immune-cell expression, disease mapping, and clinical data through visual analytics and literature context.",
    emailMe: "Email Me",
    viewResearch: "View Work",
    visualLabel: "Research Focus",
    visualTitle: "Immune Mapping",
    heroFocusTitle: "Research Focus",
    heroFocusOne: "Immune-cell mapping and disease mechanisms",
    heroFocusTwo: "High-parameter flow analysis, heatmaps, and UMAP views",
    heroFocusThree: "Translational research for precision health decisions",
    metricOne: "Field",
    metricOneValue: "Medical Science / Immune Monitoring",
    metricTwo: "Location",
    metricThree: "Institution",
    aboutEyebrow: "About",
    aboutTitle: "About Me",
    aboutBody: "Chun Yi is affiliated with the Graduate Institute of Medical Sciences at Taipei Medical University, with interests across immune testing, biomedical data, disease phenotypes, and translational medicine. Inspired by immune health monitoring platforms, this profile highlights standardized biomarkers, high-parameter single-cell data, and visual disease maps as ways to understand immune status, risk, and research outcomes.",
    tagOne: "Immunogram",
    tagTwo: "High-Parameter Analysis",
    tagThree: "Precision Health",
    tagFour: "Academic Communication",
    interestsKicker: "Research interests",
    interestsTitle: "Research Interests",
    interestOneBody: "Using immune-cell populations and functional subsets to translate complex immune states into readable and comparable disease maps.",
    interestTwoBody: "Combining high-parameter flow cytometry, heatmaps, T-SNE/UMAP, and biostatistics to reveal immune-cell differences and dynamic changes.",
    interestThreeBody: "Exploring how immune information can support precision health and translational research across prevention, diagnosis, treatment, and follow-up.",
    researchTitle: "Academic Work",
    researchIntro: "This section reflects the current PubMed query state for “ChunYi Lai”. PubMed translates it as Lai, Chunyi[Full Author Name], with 4 results listed below.",
    queryLabel: "Search query",
    openPubmed: "Open PubMed",
    resultMeta: "PubMed query: ChunYi Lai · Results: 4",
    contactEyebrow: "Contact",
    contactTitle: "Contact",
    contactHint: "Open to discussion on immune monitoring, biomedical data analysis, academic collaboration, and coursework."
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
  }
];

let currentLanguage = localStorage.getItem("language") || "zh";
let currentTheme = localStorage.getItem("theme") || "light";

const languageToggle = document.querySelector("#languageToggle");
const themeToggle = document.querySelector("#themeToggle");
const publicationList = document.querySelector("#publicationList");
const scrollProgress = document.querySelector(".scroll-progress");

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

function updateScrollProgress() {
  if (!scrollProgress) return;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  scrollProgress.style.width = `${Math.min(progress, 100)}%`;
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
updateScrollProgress();

window.addEventListener("load", initAnimations);
window.addEventListener("scroll", updateScrollProgress, { passive: true });
