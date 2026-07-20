const profile = {
  name: "Rajib Khan",
  shortName: "Rajib",
  title: "NLP Researcher and CSE Graduate",
  affiliation: "International University of Business Agriculture and Technology (IUBAT)",
  location: "Dhaka, Bangladesh",
  email: "rajibkhan4438@gmail.com",
  phone: "+8801909259760",
  linkedin: "https://www.linkedin.com/in/rajib-khan-b924a1420",
  github: "https://github.com/Rajib4438",
  scholar: "https://scholar.google.com/citations?user=JC4pI4QAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0002-6688-8818",
  cv: "MY_CV.docx.pdf",
  summary:
    "Hi, I'm **Rajib Khan**, a Computer Science and Engineering graduate from **IUBAT (International University of Business Agriculture and Technology)**. I am passionate about Software Engineering, Artificial Intelligence, Machine Learning, and Natural Language Processing (NLP). I have authored multiple research publications, including papers published in **IEEE conferences** and an **international journal**, focusing on Bangla NLP and AI applications. During my academic journey, I completed an internship and developed several software, web-based, and data analysis projects that strengthened my practical and problem-solving skills. I enjoy learning emerging technologies, building impactful solutions, and contributing to the advancement of AI through research and innovation.",
  interests: [
    "Low-resource NLP",
    "Bengali and Banglish text",
    "Transformer architectures",
    "Multi-label classification",
    "Sentiment analysis",
    "Explainable AI"
  ]
};

const pages = [
  { id: "home", label: "Home", href: "index.html" },
  { id: "education", label: "Education", href: "education.html" },
  { id: "experience", label: "Experience", href: "experience.html" },
  { id: "publications", label: "Publications", href: "publications.html" },
  { id: "projects", label: "Projects", href: "projects.html" },
  { id: "awards", label: "Awards & Certificates", href: "certificates.html" },
  { id: "presentations", label: "Presentation & Workshop", href: "presentations.html" },
  { id: "skills", label: "Skills", href: "skills.html" },
  { id: "contact", label: "Contact", href: "contact.html" }
];

const education = [
  {
    degree: "Bachelor of Computer Science and Engineering",
    institution: "International University of Business Agriculture and Technology (IUBAT)",
    location: "Dhaka, Bangladesh",
    date: "Jan 2022 - Jan 2026",
    meta: "CGPA: 3.47/4.00 | Major CGPA: 3.53/4.00",
    thesis:
      "Enhancing Multi-Label Classification in Bengali Contextual Questions using BERT-based Architecture",
    advisor: "Md. Saidur Rahman",
    details: [
      "Built a research path around Bengali contextual question classification, low-resource NLP, and transformer-based modeling.",
      "Completed coursework in software engineering, database management systems, data structures and algorithms, system analysis and design, and management information systems."
    ],
    tags: ["Software Engineering", "DBMS", "Data Structures", "Algorithms", "System Analysis"]
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Rajbari Government College",
    location: "Rajbari, Bangladesh",
    meta: "GPA: 4.50/5.00"
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Goalanda Nazir Uddin Pilot Government High School",
    location: "Goalanda, Rajbari, Bangladesh",
    meta: "GPA: 4.11/5.00"
  }
];

const experiences = [
  {
    role: "Undergraduate Researcher",
    organization: "NLP and Machine Learning Research, IUBAT",
    date: "2023 - Present",
    meta: "Advisor: Tanjim Taharat Aurpa",
    details: [
      "Developed a framework using XLM-RoBERTa and supervised contrastive learning to improve multi-label classification for low-resource Bengali datasets.",
      "Curated PROSHNO BINNASH, a contextual multi-label question-answering dataset with 4,069 entries sourced from Bengali texts.",
      "Contributed to multiple public-sentiment and aspect-based sentiment analysis studies, including data collection, literature review, research writing, and model analysis.",
      "Presented research findings to international scholars and academic peers at IEEE QPAIN 2026 and IEEE SPICSCON 2025."
    ],
    tags: ["XLM-RoBERTa", "SupCon", "Dataset Curation", "Research Writing"]
  },
  {
    role: "Software Engineer Intern",
    organization: "TechStdio",
    date: "Oct 2025 - Jan 2026",
    meta: "Final Year Project | Advisor: Md. Saidur Rahman",
    details: [
      "Architected and developed a multi-vendor e-commerce platform using ASP.NET Core Web API, SQL Server, and Angular 17.",
      "Implemented a seller dashboard that allows vendors to assign delivery riders to area-wise orders.",
      "Designed a secure checkout flow with bKash API integration and automated PDF invoice generation."
    ],
    tags: ["ASP.NET Core", "Angular 17", "SQL Server", "bKash API"]
  }
];

const leadership = [
  {
    role: "General Member",
    organization: "IUBAT Innovation and Entrepreneurship Center",
    date: "2023 - 2024",
    details: ["Volunteered as a core organizer for the Techno Carts V.1 event."]
  },
  {
    role: "General Member",
    organization: "Debating Forum of IUBAT",
    date: "2023 - 2024",
    details: ["Participated in campus debate sessions and student-led events."]
  }
];

const publications = [
  {
    year: "2025",
    type: "Journal",
    title: "PROSHNO BINNASH: Contextual Multi-Label Question Answering Dataset for Low-Resource NLP",
    authors: "Khan, R., Aurpa, T. T., Rahman, M. S., and Ashrafuzzaman, M.",
    venue: "Data in Brief, Elsevier",
    note: "Dataset publication centered on Bengali contextual question understanding."
  },
  {
    year: "2026",
    type: "Conference",
    title:
      "Aspect-Based Sentiment Analysis of Bangladeshi IT Service Reviews Using Transformer Architectures and Post-Hoc Interpretability",
    authors: "Khan, R., Rakib, A. B., Haque, O., Tabassum, M., Rahman, M. S., and Akter, M.",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    note: "Focuses on transformer-based aspect analysis and interpretability for local service reviews."
  },
  {
    year: "2026",
    type: "Conference",
    title:
      "BanglishBERT-CNN-MTL: A Hybrid Multi-Task Learning Framework for Aspect-Based Sentiment Analysis in Low-Resource Banglish Text",
    authors: "Islam, M. A., Khan, R., Rahman, M. S., Emu, S. A., and Anik, M. A. H.",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    note: "A hybrid model for Banglish aspect-based sentiment analysis."
  },
  {
    year: "2026",
    type: "Conference",
    title: "Emotion-Aware Token Reweighting for Aspect-Based Emotion Detection in Bangla Text",
    authors: "Tabassum, M., Haque, O., Khan, R., Rahman, M. S., and Akter, M.",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    note: "Explores token reweighting for Bangla emotion detection."
  },
  {
    year: "2026",
    type: "Conference",
    title:
      "A Hybrid Stacking-Based Framework for Multiclass Road Accident Severity Prediction with Interpretable SHAP Analysis",
    authors: "Akter, M., Haque, O., Tabassum, M., and Khan, R.",
    venue:
      "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence and Networking (QPAIN)",
    note: "Uses stacked learning and SHAP analysis for interpretable severity prediction."
  },
  {
    year: "2025",
    type: "Conference",
    title:
      "BanglaBERT-BiLSTM: A Novel Hybrid Architecture for Multiclass Mental Health Classification in Bengali Social Media Text",
    authors: "Haque, O., Hossain, A., Tabassum, M., Khan, R., and Tamim, F. S.",
    venue: "2025 28th International Conference on Computer and Information Technology (ICCIT)",
    note: "Hybrid transformer and sequence modeling for Bengali mental health classification."
  },
  {
    year: "2025",
    type: "Conference",
    title: "Deep Learning Analysis of Public Sentiment on the Padma Bridge Through YouTube Comments",
    authors: "Aurpa, T. T., Jeba, S. M., Khan, R., Ahmed, M. S., and Dash, S. R.",
    venue:
      "2025 IEEE International Conference on Signal Processing, Information, Communication and Systems (SPICSCON)",
    note: "Deep learning study of social sentiment around a major Bangladeshi infrastructure project."
  },
  {
    year: "2024",
    type: "Conference",
    title: "Sentiment Analysis on the Elevated Expressway in Bangladesh: A Machine Learning and Deep Learning Approach",
    authors: "Jeba, S. M., Khan, R., Ahmed, M. S., Aurpa, T. T., and Dash, S. R.",
    venue:
      "2024 IEEE International Conference on Power, Electrical, Electronics and Communication (PEEIACON)",
    note: "Public sentiment analysis using machine learning and deep learning methods."
  },
  {
    year: "2023",
    type: "Conference",
    title: "Analysis of Public Sentiment on Dhaka Metro Rail with Transformer-Based Architectures",
    authors: "Jeba, S. M., Aurpa, T. T., Siyam, F. H., Khan, R., and Mansia, F. M.",
    venue: "2023 26th International Conference on Computer and Information Technology (ICCIT)",
    note: "Transformer-based analysis of public response to Dhaka Metro Rail."
  }
];

const projects = [
  {
    title: "PROSHNO BINNASH Dataset",
    type: "Research",
    year: "2025",
    summary:
      "Curated a contextual multi-label question-answering dataset for Bengali NLP, bringing together 4,069 entries from true Bengali texts and supporting low-resource model development.",
    tags: ["Dataset", "Bengali NLP", "Multi-label QA"],
    links: [{ label: "Scholar", href: profile.scholar, icon: "scholar" }]
  },
  {
    title: "Bengali Contextual Question Classification",
    type: "Thesis",
    year: "2026",
    summary:
      "Designed a BERT-based research direction for improving multi-label classification in Bengali contextual questions, with emphasis on transformer representations and low-resource evaluation.",
    tags: ["BERT", "XLM-RoBERTa", "SupCon"],
    links: [{ label: "View CV", href: profile.cv, icon: "file-text" }]
  },
  {
    title: "Bangladeshi IT Service Review Analysis",
    type: "Research",
    year: "2026",
    summary:
      "Built the complete dataset and contributed core writing for an aspect-based sentiment analysis study of Bangladeshi IT service reviews using transformer models and post-hoc interpretability.",
    tags: ["ABSA", "Transformers", "Interpretability"],
    links: [{ label: "Scholar", href: profile.scholar, icon: "scholar" }]
  },
  {
    title: "Public Sentiment on National Infrastructure",
    type: "Research",
    year: "2023 - 2025",
    summary:
      "Supported sentiment analysis studies on Dhaka Metro Rail, the Elevated Expressway, and Padma Bridge through data scraping, literature synthesis, and research writing.",
    tags: ["Sentiment Analysis", "Data Scraping", "Deep Learning"],
    links: [{ label: "Scholar", href: profile.scholar, icon: "external-link" }]
  },
  {
    title: "HatBD",
    type: "Software",
    year: "2026",
    summary:
      "A multi-vendor e-commerce website built with ASP.NET Core, SQL Server, and Angular, featuring vendor dashboards, secure checkout, bKash payment integration, and PDF invoices.",
    tags: ["Angular", "ASP.NET Core", "SQL Server", "bKash"],
    image: "assets/Project Img/Index Page HatBD Destop.png",
    links: [{ label: "GitHub", href: profile.github, icon: "github" }]
  },
  {
    title: "BanglishBERT-CNN-MTL",
    type: "Research",
    year: "2026",
    summary:
      "Contributed to a hybrid multi-task learning framework for aspect-based sentiment analysis in low-resource Banglish text.",
    tags: ["Banglish", "CNN", "Multi-task Learning"],
    links: [{ label: "Scholar", href: profile.scholar, icon: "external-link" }]
  }
];

const awards = [
  {
    title: "Level 1 Programme, IUBAT CP Community",
    year: "2023",
    summary: "Secured 11th position in a selection contest and 19th position in a monthly programming contest.",
    tags: ["Competitive Programming", "Problem Solving"]
  },
  {
    title: "Qualifier, IUBAT Defeat Fest",
    year: "2023",
    summary: "Qualified at the campus-level debating fest organized by the Debating Forum of IUBAT.",
    tags: ["Debate", "Communication"]
  }
];

const certificates = [
  {
    title: "Conference Presentation Certificate",
    issuer: "Academic conference participation",
    file: "assets/Certificate's/Certificate_Presentation_PID-207.pdf",
    preview: "assets/certificate-previews/Certificate_Presentation_PID-207.png",
    kind: "PDF"
  },
  {
    title: "Database Certificate",
    issuer: "Database coursework and training",
    file: "assets/Certificate's/Database.pdf",
    preview: "assets/certificate-previews/Database.png",
    kind: "PDF"
  },
  {
    title: "Introduction to Web Development",
    issuer: "HTML, CSS, and JavaScript",
    file: "assets/Certificate's/Introduction to Web Development with HTML CSS  JavaScript.pdf",
    preview: "assets/certificate-previews/Introduction to Web Development with HTML CSS  JavaScript.png",
    kind: "PDF"
  },
  {
    title: "QPAIN Certificate - PID 4532",
    issuer: "QPAIN conference participation",
    file: "assets/Certificate's/QPAIN_PID-4532.pdf",
    preview: "assets/certificate-previews/QPAIN_PID-4532.png",
    kind: "PDF"
  },
  {
    title: "QPAIN Certificate - PID 4648",
    issuer: "QPAIN conference participation",
    file: "assets/Certificate's/QPAIN_PID-4648.pdf",
    preview: "assets/certificate-previews/QPAIN_PID-4648.png",
    kind: "PDF"
  },
  {
    title: "QPAIN Certificate - PID 4671",
    issuer: "QPAIN conference participation",
    file: "assets/Certificate's/QPAIN_PID-4671.pdf",
    preview: "assets/certificate-previews/QPAIN_PID-4671.png",
    kind: "PDF"
  },
  {
    title: "QPAIN Certificate - PID 4696",
    issuer: "QPAIN conference participation",
    file: "assets/Certificate's/QPAIN_PID-4696.pdf",
    preview: "assets/certificate-previews/QPAIN_PID-4696.png",
    kind: "PDF"
  },
  {
    title: "Technocrats V.1 Volunteer Recognition",
    issuer: "IUBAT Innovation and Entrepreneurship Center - 2023",
    file: "assets/Certificate's/WhatsApp Image 2026-07-16 at 9.28.14 PM.jpeg",
    kind: "Image"
  },
  {
    title: "Software Engineering Internship",
    issuer: "TechStdio - October 2025 to January 2026",
    file: "assets/Certificate's/photo_2026-07-16_21-58-12.jpg",
    kind: "Image"
  }
];

const presentations = [
  {
    title: "BanglishBERT-CNN-MTL: A Hybrid Multi-Task Learning Framework for Aspect-Based Sentiment Analysis in Low-Resource Banglish Text",
    event: "2026 IEEE 2nd International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN)",
    date: "April 2026",
    place: "Chattogram, Bangladesh",
    type: "Poster presentation"
  },
  {
    title: "Deep Learning Analysis of Public Sentiment on the Padma Bridge Through YouTube Comments",
    event: "4th IEEE SPICSCON 2025",
    date: "November 2025",
    place: "Rajshahi, Bangladesh",
    type: "Oral presentation"
  }
];

const skills = [
  {
    group: "Programming",
    items: ["Python", "R", "SQL", "C", "C++", "Java", "C#", "JavaScript", "TypeScript"]
  },
  {
    group: "ML and Data Libraries",
    items: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Seaborn", "PyTorch", "Hugging Face"]
  },
  {
    group: "Web and Software Engineering",
    items: ["Angular 17", "ASP.NET Core", "SQL Server", "Swagger UI", "Git", "Visual Studio", "VS Code"]
  },
  {
    group: "Research Domains",
    items: [
      "Data Analysis",
      "Exploratory Data Analysis",
      "Data Visualization",
      "Multi-label Classification",
      "Zero-Trust Architecture",
      "DSAS",
      "Statistical Analysis"
    ]
  }
];

const languages = [
  { name: "Bengali", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "Hindi/Urdu", level: "Conversational" }
];

const icons = {
  "arrow-up":
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m18 15-6-6-6 6"/><path d="M12 9v12"/></svg>',
  award:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M15.5 13.2 17 22l-5-3-5 3 1.5-8.8"/></svg>',
  book:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5z"/></svg>',
  code:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>',
  copy:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
  download:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>',
  "external-link":
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>',
  "file-text":
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>',
  github:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1.3-3.7c4.2-.5 8.6-2.1 8.6-9.3 0-2.1-.7-3.8-1.9-5.1.2-.5.8-2.5-.2-5.1 0 0-1.6-.5-5.2 2a18 18 0 0 0-9.5 0c-3.6-2.5-5.2-2-5.2-2-1 2.6-.4 4.6-.2 5.1A7.2 7.2 0 0 0 2 10c0 7.2 4.4 8.8 8.6 9.3A4.8 4.8 0 0 0 9.3 23v-4"/><path d="M9 18c-4.5 2-5-2-7-2"/></svg>',
  linkedin:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  map:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  menu:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>',
  moon:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M12 3a6 6 0 0 0 9 7.3A9 9 0 1 1 12 3z"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2.1z"/></svg>',
  scholar:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  sun:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>',
  user:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M20 21a8 8 0 1 0-16 0"/><circle cx="12" cy="7" r="4"/></svg>',
  x:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'
};

function icon(name) {
  return icons[name] || icons["external-link"];
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function tags(items) {
  return `<div class="tag-list">${items.map((item) => `<span class="tag">${escapeHtml(item)}</span>`).join("")}</div>`;
}

function pageHero(label, title, lede) {
  return `
    <section class="page-hero">
      <div class="container reveal">
        <p class="eyebrow">${escapeHtml(label)}</p>
        <h1 class="page-title">${escapeHtml(title)}</h1>
        <p class="page-lede">${escapeHtml(lede)}</p>
      </div>
    </section>
  `;
}

function sectionHeading(title, text) {
  return `
    <div class="section-heading reveal">
      <h2>${escapeHtml(title)}</h2>
      ${text ? `<p>${escapeHtml(text)}</p>` : ""}
    </div>
  `;
}

function linkButton(label, href, type = "ghost", iconName = "external-link", extra = "") {
  return `
    <a class="button ${type}" href="${escapeHtml(href)}" ${extra}>
      <span class="button-icon">${icon(iconName)}</span>
      <span>${escapeHtml(label)}</span>
    </a>
  `;
}

function renderNav() {
  const current = document.body.dataset.page || "home";
  const nav = document.querySelector("#primary-nav");
  nav.innerHTML = pages
    .map(
      (page) =>
        `<a href="${page.href}" ${page.id === current ? 'aria-current="page"' : ""}>${escapeHtml(page.label)}</a>`
    )
    .join("");
}

function renderHome() {
  const featuredPublications = publications.slice(0, 3);
  return `
    <section class="arrival-hero" aria-labelledby="arrival-name">
      <div class="arrival-hero-image" aria-hidden="true"></div>
      <div class="arrival-hero-overlay" aria-hidden="true"></div>
      <div class="container arrival-hero-content">
        <p class="arrival-kicker">Academic Portfolio</p>
        <h1 id="arrival-name">${escapeHtml(profile.name)}</h1>
        <p>${escapeHtml(profile.title)}</p>
        <a class="arrival-scroll" href="#about-me" aria-label="Scroll to learn more about Rajib Khan">
          <span>Discover my work</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>

    <section class="home-hero" id="about-me" aria-labelledby="about-me-title">
      <div class="container home-hero-grid">
        <div class="hero-copy reveal">
          <div class="hero-kicker">About me</div>
          <h2 class="hero-title" id="about-me-title">About Me</h2>
          <p class="hero-lede">${escapeHtml(profile.summary).replaceAll(/\*\*([\s\S]*?)\*\*/g, "<strong>$1</strong>")}</p>
          <div class="hero-actions">
            ${linkButton("Google Scholar", profile.scholar, "ghost", "scholar", 'target="_blank" rel="noreferrer"')}
          </div>
          <div class="hero-meta">
            <span class="meta-pill">${icon("map")}${escapeHtml(profile.location)}</span>
            <span class="meta-pill">${icon("book")}9 publications and preprints</span>
            <span class="meta-pill">${icon("code")}Full-stack research engineering</span>
          </div>
        </div>
        <aside class="hero-aside reveal">
          <div class="profile-frame">
            <img src="assets/Khan.webp" alt="Headshot of Rajib Khan">
          </div>
        </aside>
      </div>
    </section>

    <section class="section-band alt">
      <div class="container">
        ${sectionHeading("Research Focus")}
        <div class="quick-grid">
          ${profile.interests
      .map(
        (interest, index) => `
                <article class="info-card reveal">
                  <div class="card-icon">${icon(index % 3 === 0 ? "book" : index % 3 === 1 ? "code" : "search")}</div>
                  <h3>${escapeHtml(interest)}</h3>
                  <p>${researchDescription(interest)}</p>
                </article>
              `
      )
      .join("")}
        </div>
      </div>
    </section>

    <section class="section-band">
      <div class="container">
        ${sectionHeading("Featured Work")}
        <div class="project-grid">
          ${projects
      .slice(0, 4)
      .map((project) => projectCard(project))
      .join("")}
        </div>
      </div>
    </section>

    <section class="section-band alt">
      <div class="container">
        ${sectionHeading("Recent Publications")}
        <div class="publication-list">
          ${featuredPublications.map((pub) => publicationItem(pub)).join("")}
        </div>
        <div class="hero-actions publication-actions reveal">
          ${linkButton("View all publications", "publications.html", "primary", "book")}
        </div>
      </div>
    </section>

  `;
}

function researchDescription(interest) {
  const descriptions = {
    "Low-resource NLP": "Designing methods and datasets for language contexts where annotated resources are limited.",
    "Bengali and Banglish text": "Working with local language data from Bengali and mixed-script communication settings.",
    "Transformer architectures": "Applying BERT-family models, hybrid neural architectures, and task-specific fine-tuning.",
    "Multi-label classification": "Studying classification settings where each question or review can express multiple labels.",
    "Sentiment analysis": "Analyzing public response, service reviews, and infrastructure-related social media data.",
    "Explainable AI": "Using post-hoc interpretability to make model behavior easier to inspect and communicate."
  };
  return descriptions[interest] || "";
}

function renderEducation() {
  return `
    <section class="section-band">
      <div class="container">
        <div class="timeline">
          ${education
      .map(
        (item) => `
                <article class="timeline-item reveal">
                  <div class="timeline-top">
                    <div>
                      <h2>${escapeHtml(item.degree)}</h2>
                      <p class="timeline-meta">${escapeHtml(item.institution)} | ${escapeHtml(item.location)}</p>
                    </div>
                    ${item.date ? `<span class="timeline-date">${escapeHtml(item.date)}</span>` : ""}
                  </div>
                  <p><strong>${escapeHtml(item.meta)}</strong></p>
                  ${item.thesis ? `<p><strong>Thesis:</strong> ${escapeHtml(item.thesis)}</p>` : ""}
                  ${item.advisor ? `<p><strong>Advisor:</strong> ${escapeHtml(item.advisor)}</p>` : ""}
                  ${item.details ? `<ul class="clean-list">${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}</ul>` : ""}
                  ${item.tags ? tags(item.tags) : ""}
                </article>
              `
      )
      .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderExperience() {
  return `
    <section class="section-band">
      <div class="container">
        ${sectionHeading("Research and Engineering", "")}
        <div class="timeline">
          ${experiences.map((item) => experienceItem(item)).join("")}
        </div>
      </div>
    </section>
    <section class="section-band alt">
      <div class="container">
        ${sectionHeading("Service and Leadership", "")}
        <div class="timeline">
          ${leadership.map((item) => experienceItem(item)).join("")}
        </div>
      </div>
    </section>
  `;
}

function experienceItem(item) {
  return `
    <article class="timeline-item reveal">
      <div class="timeline-top">
        <div>
          <h3>${escapeHtml(item.role)}</h3>
          <p class="timeline-meta">${escapeHtml(item.organization)}</p>
        </div>
        <span class="timeline-date">${escapeHtml(item.date)}</span>
      </div>
      ${item.meta ? `<p><strong>${escapeHtml(item.meta)}</strong></p>` : ""}
      <ul class="clean-list">
        ${item.details.map((detail) => `<li>${escapeHtml(detail)}</li>`).join("")}
      </ul>
      ${item.tags ? tags(item.tags) : ""}
    </article>
  `;
}

function renderPublications() {
  const filters = ["All", ...Array.from(new Set(publications.map((pub) => pub.type)))];
  return `
    <section class="section-band">
      <div class="container">
        <div class="toolbar reveal">
          <label class="search-box" for="publication-search">
            ${icon("search")}
            <input id="publication-search" type="search" placeholder="Search publications">
          </label>
          <div class="segmented" role="group" aria-label="Publication filters">
            ${filters
      .map(
        (filter, index) =>
          `<button class="seg-button" type="button" data-publication-filter="${escapeHtml(filter)}" aria-pressed="${index === 0}">${escapeHtml(filter)}</button>`
      )
      .join("")}
          </div>
        </div>
        <div class="publication-list" id="publication-list">
          ${publications.map((pub) => publicationItem(pub)).join("")}
        </div>
        <div class="contact-actions reveal">
          ${linkButton("Google Scholar Profile", profile.scholar, "primary", "scholar", 'target="_blank" rel="noreferrer"')}
          ${linkButton("Download Full CV", profile.cv, "ghost", "download", "download")}
        </div>
      </div>
    </section>
  `;
}

function publicationItem(pub) {
  return `
    <article class="publication-item reveal" data-type="${escapeHtml(pub.type)}" data-search="${escapeHtml(
    `${pub.title} ${pub.authors} ${pub.venue} ${pub.year} ${pub.type}`
  ).toLowerCase()}">
      <div class="publication-head">
        <div>
          <span class="pub-type">${escapeHtml(pub.type)} | ${escapeHtml(pub.year)}</span>
          <h3>${escapeHtml(pub.title)}</h3>
        </div>
        <span class="timeline-date">${escapeHtml(pub.year)}</span>
      </div>
      <p class="publication-meta">${escapeHtml(pub.authors)}</p>
      <p>${escapeHtml(pub.venue)}</p>
      <p>${escapeHtml(pub.note)}</p>
    </article>
  `;
}

function bindPublicationFilters() {
  const search = document.querySelector("#publication-search");
  const buttons = Array.from(document.querySelectorAll("[data-publication-filter]"));
  const list = document.querySelector("#publication-list");
  if (!search || !buttons.length || !list) return;

  const apply = () => {
    const query = search.value.trim().toLowerCase();
    const active = buttons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.publicationFilter || "All";
    let visible = 0;
    Array.from(list.querySelectorAll(".publication-item")).forEach((item) => {
      const matchesFilter = active === "All" || item.dataset.type === active;
      const matchesSearch = !query || item.dataset.search.includes(query);
      const show = matchesFilter && matchesSearch;
      item.hidden = !show;
      if (show) visible += 1;
    });
    let empty = list.querySelector(".empty-state");
    if (!visible && !empty) {
      empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No publications match this search.";
      list.append(empty);
    }
    if (empty) empty.hidden = visible > 0;
  };

  search.addEventListener("input", apply);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      apply();
    });
  });
}

function renderProjects() {
  const filters = ["All", ...Array.from(new Set(projects.map((project) => project.type)))];
  return `
    <section class="section-band">
      <div class="container">
        <div class="toolbar reveal">
          <label class="search-box" for="project-search">
            ${icon("search")}
            <input id="project-search" type="search" placeholder="Search projects">
          </label>
          <div class="segmented" role="group" aria-label="Project filters">
            ${filters
      .map(
        (filter, index) =>
          `<button class="seg-button" type="button" data-project-filter="${escapeHtml(filter)}" aria-pressed="${index === 0}">${escapeHtml(filter)}</button>`
      )
      .join("")}
          </div>
        </div>
        <div class="project-grid" id="project-list">
          ${projects.map((project) => projectCard(project)).join("")}
        </div>
      </div>
    </section>
  `;
}

function projectCard(project) {
  return `
    <article class="project-card reveal" data-type="${escapeHtml(project.type)}" data-search="${escapeHtml(
    `${project.title} ${project.type} ${project.year} ${project.summary} ${project.tags.join(" ")}`
  ).toLowerCase()}">
      ${project.image ? `<img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)} project interface">` : ""}
      <p class="project-meta">${escapeHtml(project.type)} | ${escapeHtml(project.year)}</p>
      <h3>${escapeHtml(project.title)}</h3>
      <p>${escapeHtml(project.summary)}</p>
      ${tags(project.tags)}
      <div class="project-links">
        ${project.links
      .map(
        (link) =>
          `<a class="mini-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">${icon(link.icon)}${escapeHtml(link.label)}</a>`
      )
      .join("")}
      </div>
    </article>
  `;
}

function bindProjectFilters() {
  const search = document.querySelector("#project-search");
  const buttons = Array.from(document.querySelectorAll("[data-project-filter]"));
  const list = document.querySelector("#project-list");
  if (!search || !buttons.length || !list) return;

  const apply = () => {
    const query = search.value.trim().toLowerCase();
    const active = buttons.find((button) => button.getAttribute("aria-pressed") === "true")?.dataset.projectFilter || "All";
    let visible = 0;
    Array.from(list.querySelectorAll(".project-card")).forEach((item) => {
      const matchesFilter = active === "All" || item.dataset.type === active;
      const matchesSearch = !query || item.dataset.search.includes(query);
      const show = matchesFilter && matchesSearch;
      item.hidden = !show;
      if (show) visible += 1;
    });
    let empty = list.querySelector(".empty-state");
    if (!visible && !empty) {
      empty = document.createElement("p");
      empty.className = "empty-state";
      empty.textContent = "No projects match this search.";
      list.append(empty);
    }
    if (empty) empty.hidden = visible > 0;
  };

  search.addEventListener("input", apply);
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.setAttribute("aria-pressed", "false"));
      button.setAttribute("aria-pressed", "true");
      apply();
    });
  });
}

function renderAwards() {
  return `
    <section class="section-band">
      <div class="container">
        ${sectionHeading("Awards", "")}
        <div class="award-grid">
          ${awards
      .map(
        (award) => `
                <article class="award-card reveal">
                  <div class="card-icon">${icon("award")}</div>
                  <p class="project-meta">${escapeHtml(award.year)}</p>
                  <h3>${escapeHtml(award.title)}</h3>
                  <p>${escapeHtml(award.summary)}</p>
                  ${tags(award.tags)}
                </article>
              `
      )
      .join("")}
        </div>
      </div>
    </section>
    <section class="section-band alt">
      <div class="container">
        ${sectionHeading("Certificates", "")}
        <div class="certificate-grid">
          ${certificates
      .map(
        (certificate) => `
                <a class="certificate-card reveal" href="${escapeHtml(certificate.file)}" target="_blank" rel="noreferrer" aria-label="Open ${escapeHtml(certificate.title)}">
                  <div class="certificate-preview${certificate.preview || certificate.kind === "Image" ? " certificate-preview--image" : ""}">
                    ${certificate.preview || certificate.kind === "Image" ? `<img src="${escapeHtml(certificate.preview || certificate.file)}" alt="Preview of ${escapeHtml(certificate.title)}">` : `<span class="certificate-file-type">PDF</span>${icon("file-text")}`}
                  </div>
                  <div class="certificate-content">
                    <p class="certificate-kind">${escapeHtml(certificate.kind)} certificate</p>
                    <h3>${escapeHtml(certificate.title)}</h3>
                    <p>${escapeHtml(certificate.issuer)}</p>
                    <span class="certificate-open">Open certificate ${icon("external-link")}</span>
                  </div>
                </a>
              `
      )
      .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderPresentations() {
  return `
    <section class="section-band">
      <div class="container">
        <div class="timeline">
          ${presentations
      .map(
        (item) => `
                <article class="timeline-item reveal">
                  <div class="timeline-top">
                    <div>
                      <h3>${escapeHtml(item.title)}</h3>
                      <p class="timeline-meta">${escapeHtml(item.type)} | ${escapeHtml(item.event)}</p>
                    </div>
                    <span class="timeline-date">${escapeHtml(item.date)}</span>
                  </div>
                  <p>${escapeHtml(item.place)}</p>
                </article>
              `
      )
      .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderSkills() {
  return `
    <section class="section-band">
      <div class="container skills-layout">
        <div class="skill-grid">
          ${skills
      .map(
        (group) => `
                <article class="skill-group reveal">
                  <div class="card-icon">${icon(group.group.includes("Programming") ? "code" : "book")}</div>
                  <h3>${escapeHtml(group.group)}</h3>
                  ${tags(group.items)}
                </article>
              `
      )
      .join("")}
        </div>
        <aside class="skill-group reveal">
          <div class="card-icon">${icon("user")}</div>
          <h3>Languages</h3>
          <div class="language-list">
            ${languages
      .map(
        (language) => `
                  <div class="language-row">
                    <strong>${escapeHtml(language.name)}</strong>
                    <span>${escapeHtml(language.level)}</span>
                  </div>
                `
      )
      .join("")}
          </div>
        </aside>
      </div>
    </section>
  `;
}

function renderContact() {
  const contacts = [
    {
      title: "Email",
      text: "Best for research collaboration, project inquiries, and academic communication.",
      link: `mailto:${profile.email}`,
      label: profile.email,
      iconName: "mail"
    },
    {
      title: "LinkedIn",
      text: "Professional updates, networking, and career-facing contact.",
      link: profile.linkedin,
      label: "LinkedIn profile",
      iconName: "linkedin"
    },
    {
      title: "GitHub",
      text: "Code, project repositories, and technical experiments.",
      link: profile.github,
      label: "GitHub profile",
      iconName: "github"
    }
  ];

  return `
    <section class="section-band">
      <div class="container">
        <div class="contact-grid">
          ${contacts
      .map(
        (contact) => `
                <article class="contact-card reveal">
                  <div class="card-icon">${icon(contact.iconName)}</div>
                  <h3>${escapeHtml(contact.title)}</h3>
                  <p>${escapeHtml(contact.text)}</p>
                  <a class="contact-link" href="${escapeHtml(contact.link)}" target="_blank" rel="noreferrer">
                    ${icon(contact.iconName)}${escapeHtml(contact.label)}
                  </a>
                </article>
              `
      )
      .join("")}
        </div>
        <div class="cv-panel reveal" style="margin-top: 18px;">
          <div>
            <p class="eyebrow">Availability</p>
            <h2>Research and engineering conversations are welcome.</h2>
            <p>Rajib's profile is strongest for Bengali NLP, dataset development, applied machine learning, sentiment analysis, and full-stack academic software systems.</p>
            <div class="hero-actions">
              <button class="button primary" type="button" data-copy-email>
                <span class="button-icon">${icon("copy")}</span>
                <span>Copy Email</span>
              </button>
              ${linkButton("Download CV", profile.cv, "ghost", "download", "download")}
            </div>
          </div>
          <a class="cv-preview" href="${profile.cv}" target="_blank" rel="noreferrer" aria-label="Open Rajib Khan CV">
            <img src="assets/cv-preview.png" alt="Preview of Rajib Khan CV">
          </a>
        </div>
      </div>
    </section>
  `;
}

function renderFooter() {
  const footer = document.querySelector("#site-footer");
  footer.innerHTML = `
    <div class="footer-grid">
      <div>
        <p class="footer-title">${escapeHtml(profile.name)}</p>
        <p class="footer-meta">${escapeHtml(profile.title)} | ${escapeHtml(profile.location)}</p>
        <p class="footer-meta">&copy; <span id="year"></span> ${escapeHtml(profile.name)}. Built as a clean academic portfolio.</p>
      </div>
      <div class="footer-connect">
        <p class="footer-connect-label">Connect and explore</p>
        <div class="footer-links">
          <a class="social-link" href="mailto:${escapeHtml(profile.email)}" aria-label="Email">${icon("mail")}<span class="footer-link-label">Email</span></a>
          <a class="social-link" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer" aria-label="LinkedIn">${icon("linkedin")}<span class="footer-link-label">LinkedIn</span></a>
          <a class="social-link" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer" aria-label="GitHub">${icon("github")}<span class="footer-link-label">GitHub</span></a>
          <a class="social-link" href="${escapeHtml(profile.scholar)}" target="_blank" rel="noreferrer" aria-label="Google Scholar">${icon("scholar")}<span class="footer-link-label">Scholar</span></a>
          <a class="social-link orcid-link" href="${escapeHtml(profile.orcid)}" target="_blank" rel="noreferrer" aria-label="ORCID profile"><span class="orcid-mark" aria-hidden="true">iD</span><span class="footer-link-label">ORCID</span></a>
        </div>
      </div>
      <!-- Developer attribution: Rajib Khan -->
      <p class="developer-credit footer-credit-final">Developed by <a href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">Rajib Khan</a></p>
    </div>
  `;
  const year = footer.querySelector("#year");
  if (year) year.textContent = String(new Date().getFullYear());
}

function renderIcons() {
  document.querySelectorAll("[data-icon]").forEach((target) => {
    target.innerHTML = icon(target.dataset.icon);
  });
}

function pageImageHeader(page) {
  const labels = {
    education: "Education",
    experience: "Professional experience",
    publications: "Publications",
    projects: "Projects",
    awards: "Awards",
    presentations: "Presentation & Workshop",
    skills: "Skills",
    contact: "Contact"
  };
  const titleHtml = page === "education" ? `<div class="container header-title-container"><h1 class="header-image-title">Education</h1></div>` : "";
  return `<div class="section-image-header section-image-header--${escapeHtml(page)}" role="img" aria-label="${escapeHtml(labels[page] || "Portfolio")} header image">${titleHtml}</div>`;
}

function renderPage() {
  const page = document.body.dataset.page || "home";
  const main = document.querySelector("#main");
  const renderers = {
    home: renderHome,
    education: renderEducation,
    experience: renderExperience,
    publications: renderPublications,
    projects: renderProjects,
    awards: renderAwards,
    presentations: renderPresentations,
    skills: renderSkills,
    contact: renderContact
  };
  const pageContent = (renderers[page] || renderHome)();
  main.innerHTML = page === "home" ? pageContent : `${pageImageHeader(page)}${pageContent}`;
  if (page === "publications") bindPublicationFilters();
  if (page === "projects") bindProjectFilters();
  bindCopyEmail();
  initReveal();
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem("portfolio-theme", theme);
  const toggleIcon = document.querySelector("#theme-toggle [data-icon]");
  if (toggleIcon) {
    toggleIcon.dataset.icon = theme === "dark" ? "sun" : "moon";
    toggleIcon.innerHTML = icon(toggleIcon.dataset.icon);
  }
}

function initTheme() {
  const stored = localStorage.getItem("portfolio-theme");
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(stored || preferred);
  const toggle = document.querySelector("#theme-toggle");
  toggle?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    setTheme(next);
  });
}

function initMenu() {
  const toggle = document.querySelector("#menu-toggle");
  const nav = document.querySelector("#primary-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    toggle.querySelector("[data-icon]").dataset.icon = isOpen ? "x" : "menu";
    renderIcons();
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  });
}

function initScroll() {
  const progress = document.querySelector("#scroll-progress");
  const backToTop = document.querySelector("#back-to-top");
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const value = max > 0 ? (window.scrollY / max) * 100 : 0;
    if (progress) progress.style.width = `${value}%`;
    backToTop?.classList.toggle("is-visible", window.scrollY > 540);
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
  backToTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const items = Array.from(document.querySelectorAll(".reveal"));
  if (!items.length) return;
  if (!("IntersectionObserver" in window)) {
    items.forEach((item) => item.classList.add("is-visible"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  items.forEach((item) => observer.observe(item));
}

function bindCopyEmail() {
  document.querySelectorAll("[data-copy-email]").forEach((button) => {
    button.addEventListener("click", async () => {
      await copyText(profile.email);
      showToast("Email copied");
    });
  });
}

async function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.append(input);
  input.select();
  document.execCommand("copy");
  input.remove();
}

let toastTimer;
function showToast(message) {
  const toast = document.querySelector("#toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderNav();
  renderIcons();
  renderPage();
  renderFooter();
  renderIcons();
  initMenu();
  initScroll();
});
