const translations = {
  en: {
    nav_services: "Services",
    nav_geography: "Geography",
    nav_expertise: "Expertise",
    nav_contact: "Contact",
    hero_title: "International Consulting, Analytics & Logistics",
    hero_text: "We are an international consulting and logistics company with expertise across three continents: Asia, Africa, and Latin America. Our clients receive a full range of services — from strategic consulting and analytical research to logistics management and customs clearance.",
    services_title: "What We Offer",
    s1_title: "Business Consulting",
    s1_text: "We provide consulting for businesses of all sizes, helping them enter new markets, optimize processes, and adapt to local conditions in Asia, Africa, and Latin America. Our experts have practical experience working in regions with complex business environments.",
    s2_title: "Analytical Research",
    s2_text: "In-depth market analysis, investment attractiveness assessments, and studies of the competitive landscape and consumer behavior. We provide objective data and forecasts necessary for making strategic decisions in unstable and high-risk locations.",
    s3_title: "Logistics & Customs Operations",
    s3_text: "We organize transportation of any complexity, including multimodal routes, and provide full cargo support — from transport selection to customs clearance. We understand the specifics of dealing with non-standard regulatory requirements and help minimize delays.",
    geo_title: "Three Continents — Unlimited Opportunities",
    geo_asia_title: "Asia",
    geo_asia_text: "From the Middle East to Southeast Asia — deep expertise in diverse and rapidly evolving markets across the continent.",
    geo_africa_title: "Africa",
    geo_africa_text: "Countries in North, West, and East Africa — navigating complex regulatory landscapes and emerging opportunities.",
    geo_latam_title: "Latin America",
    geo_latam_text: "From Mexico to Argentina — comprehensive coverage of the continent's most dynamic economies.",
    geo_desc: "We don't just operate in these territories; we understand their cultural, economic, and political nuances. This allows our clients to move forward confidently, even in the most unpredictable environments.",
    spec_title: "Extreme Conditions & High Risks Are Our Element",
    spec_subtitle: "We specialize in projects that other companies avoid. A key area of our focus is executing projects in extreme environments and high-risk territories. If your business requires a presence in challenging regions, we take on all operational and analytical tasks.",
    sp1_title: "Conflict & Post-Conflict Zones",
    sp1_text: "Operations in conflict zones and post-conflict reconstruction areas, ensuring continuity and safety.",
    sp2_title: "Underdeveloped Infrastructure",
    sp2_text: "Logistics in regions with limited infrastructure and harsh climates, delivering results where others cannot.",
    sp3_title: "Political Instability",
    sp3_text: "Consulting in countries with unstable political situations, helping clients navigate uncertainty with confidence.",
    sp4_title: "Personnel & Cargo Safety",
    sp4_text: "Ensuring the safety of personnel and cargo at all stages of operations, from planning to execution.",
    spec_quote: "Our experience allows us to minimize risks and achieve results where standard approaches fail.",
    footer_desc: "International Consulting, Analytics, and Logistics in Asia, Africa, and Latin America. Operations in Extreme Environments and High-Risk Zones.",
    footer_nav: "Navigation",
    footer_contact: "Contact Us",
  },
  zh: {
    nav_services: "服务",
    nav_geography: "业务区域",
    nav_expertise: "专业能力",
    nav_contact: "联系我们",
    hero_title: "国际咨询、分析与物流",
    hero_text: "我们是一家在亚洲、非洲和拉丁美洲三大洲拥有专业经验的国际咨询和物流公司。我们的客户可获得全方位服务——从战略咨询和分析研究到物流管理和海关清关。",
    services_title: "我们提供的服务",
    s1_title: "商业咨询",
    s1_text: "我们为各种规模的企业提供咨询服务，帮助他们进入新市场、优化流程并适应亚洲、非洲和拉丁美洲的当地条件。我们的专家在复杂商业环境的地区拥有丰富的实践经验。",
    s2_title: "分析研究",
    s2_text: "深入的市场分析、投资吸引力评估以及竞争格局和消费者行为研究。我们提供在不稳定和高风险地区做出战略决策所需的客观数据和预测。",
    s3_title: "物流与海关业务",
    s3_text: "我们组织各种复杂程度的运输，包括多式联运路线，并提供从运输选择到海关清关的全程货物支持。我们了解处理非标准监管要求的细节，帮助最大限度地减少延误。",
    geo_title: "三大洲 — 无限机遇",
    geo_asia_title: "亚洲",
    geo_asia_text: "从中东到东南亚——在整个大陆多元化且快速发展的市场中拥有深厚的专业知识。",
    geo_africa_title: "非洲",
    geo_africa_text: "北非、西非和东非国家——驾驭复杂的监管环境和新兴机遇。",
    geo_latam_title: "拉丁美洲",
    geo_latam_text: "从墨西哥到阿根廷——全面覆盖该大陆最具活力的经济体。",
    geo_desc: "我们不仅在这些地区开展业务，而且深入了解其文化、经济和政治细微差别。这使我们的客户即使在最不可预测的环境中也能充满信心地前进。",
    spec_title: "极端条件与高风险是我们的领域",
    spec_subtitle: "我们专注于其他公司回避的项目。我们的核心关注领域是在极端环境和高风险地区执行项目。如果您的业务需要在具有挑战性的地区建立存在，我们将承担所有运营和分析任务。",
    sp1_title: "冲突与冲突后地区",
    sp1_text: "在冲突地区和冲突后重建区域开展业务，确保连续性和安全性。",
    sp2_title: "基础设施不发达地区",
    sp2_text: "在基础设施有限、气候恶劣的地区提供物流服务，在他人无法实现的地方取得成果。",
    sp3_title: "政治不稳定地区",
    sp3_text: "在政治局势不稳定的国家提供咨询，帮助客户自信地应对不确定性。",
    sp4_title: "人员与货物安全",
    sp4_text: "在运营的各个阶段确保人员和货物的安全，从规划到执行。",
    spec_quote: "我们的经验使我们能够在标准方法失败的地方将风险降至最低并取得成果。",
    footer_desc: "亚洲、非洲和拉丁美洲的国际咨询、分析和物流。在极端环境和高风险区域的运营。",
    footer_nav: "导航",
    footer_contact: "联系我们",
  },
};

let currentLang = "en";

function setLang(lang) {
  currentLang = lang;

  if (lang === "zh") {
    document.documentElement.classList.add("zh");
  } else {
    document.documentElement.classList.remove("zh");
  }

  document.querySelectorAll(".lang-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });

  const t = translations[lang];
  if (!t) return;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

const navbar = document.getElementById("navbar");

function updateNav() {
  const scrollY = window.scrollY;
  navbar.classList.toggle("scrolled", scrollY > 40);

  const pageH = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = pageH > 0 ? scrollY / pageH : 0;
  const threshold = 0.25;

  if (ratio < threshold) {
    navbar.classList.add("light-mode");
    navbar.classList.remove("dark-mode");
  } else {
    navbar.classList.add("dark-mode");
    navbar.classList.remove("light-mode");
  }
}

window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

document.getElementById("mobileToggle").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    document.getElementById("navLinks").classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
