/* ===========================
   MODERN PORTFOLIO - JAVASCRIPT
   =========================== */

const myName = "SUTHARSANAN";
const myRoleFname = "Software";
const myRoleLname = "Engineer";
const simpleIntro =
  "3.5+ years of experience in web and mobile application development. Specialized in creating scalable solutions with modern technologies.";
const myObjectives = `Full-stack developer with 3.5+ years of professional experience in designing, developing, and maintaining web and mobile applications. Experienced in Angular, Ionic, TypeScript, PHP, Laravel, MySQL, REST APIs, and payment gateway integrations. Strong understanding of end-to-end application development, from requirement analysis and development to testing, deployment, production support, and client handover. Experienced in building responsive applications, reusable components, API integrations, and cross-platform mobile applications.`;

let manualThemeOverride = null;

const languageOptions = [
  { label: "Afrikaans", code: "af" },
  { label: "العربية", code: "ar" },
  { label: "Čeština", code: "cs" },
  { label: "Dansk", code: "da" },
  { label: "Deutsch", code: "de" },
  { label: "Ελληνικά", code: "el" },
  { label: "English", code: "en" },
  { label: "Español (España)", code: "es" },
  { label: "Español", code: "es" },
  { label: "فارسی", code: "fa" },
  { label: "Suomi", code: "fi" },
  { label: "Français", code: "fr" },
  { label: "עברית", code: "iw" },
  { label: "Bahasa Indonesia", code: "id" },
  { label: "Italiano", code: "it" },
  { label: "日本語", code: "ja" },
  { label: "한국어", code: "ko" },
  { label: "Bahasa Melayu", code: "ms" },
  { label: "Norsk", code: "no" },
  { label: "Nederlands", code: "nl" },
  { label: "Polski", code: "pl" },
  { label: "Português (Brasil)", code: "pt" },
  { label: "Português (Portugal)", code: "pt" },
  { label: "Русский", code: "ru" },
  { label: "Svenska", code: "sv" },
  { label: "ภาษาไทย", code: "th" },
  { label: "Filipino", code: "tl" },
  { label: "Türkçe", code: "tr" },
  { label: "中文(简体)", code: "zh-CN" },
  { label: "中文(台灣)", code: "zh-TW" },
  { label: "বাংলা", code: "bn" },
  { label: "ગુજરાતી", code: "gu" },
  { label: "हिन्दी", code: "hi" },
  { label: "Hrvatski", code: "hr" },
  { label: "Magyar", code: "hu" },
  { label: "ಕನ್ನಡ", code: "kn" },
  { label: "മലയാളം", code: "ml" },
  { label: "मराठी", code: "mr" },
  { label: "नेपाली", code: "ne" },
  { label: "ਪੰਜਾਬੀ", code: "pa" },
  { label: "සිංහල", code: "si" },
  { label: "Slovenčina", code: "sk" },
  { label: "தமிழ்", code: "ta" },
  { label: "తెలుగు", code: "te" },
  { label: "اردو", code: "ur" },
  { label: "Tiếng Việt", code: "vi" },
  { label: "中文(香港)", code: "zh-TW" },
  { label: "Български", code: "bg" },
  { label: "Français (Canada)", code: "fr" },
  { label: "Română", code: "ro" },
  { label: "Српски", code: "sr" },
  { label: "Українська", code: "uk" },
];

const supportedLanguageCodes = [
  ...new Set(languageOptions.map((language) => language.code)),
];

function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: supportedLanguageCodes.join(","),
      autoDisplay: false,
    },
    "google_translate_element",
  );
}

function translateWebsite(languageCode) {
  if (languageCode === "en") {
    localStorage.removeItem("portfolio-language");
    document.cookie =
      "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.reload();
    return;
  }

  const googleSelect = document.querySelector(".goog-te-combo");

  if (!googleSelect) {
    window.setTimeout(() => translateWebsite(languageCode), 300);
    return;
  }

  googleSelect.value = languageCode;
  googleSelect.dispatchEvent(new Event("change"));
  localStorage.setItem("portfolio-language", languageCode);
}

function getLocalThemeMode() {
  const currentHour = new Date().getHours();
  return currentHour >= 18 || currentHour < 6 ? "night" : "day";
}

function applyTheme(mode) {
  const body = document.body;

  body.classList.toggle("night-theme", mode === "night");
  body.classList.toggle("day-theme", mode === "day");
  body.setAttribute("data-theme", mode);

  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const isNight = mode === "night";
    themeToggle.classList.toggle("night-mode", isNight);
    themeToggle.setAttribute(
      "aria-label",
      isNight ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

function applyTimeBasedTheme() {
  if (manualThemeOverride) {
    applyTheme(manualThemeOverride);
    return;
  }

  applyTheme(getLocalThemeMode());
}

function applyPersonalData() {
  document.querySelectorAll(".my_name").forEach((element) => {
    element.textContent = myName;
  });

  document.querySelectorAll(".my_role_fname").forEach((element) => {
    element.textContent = myRoleFname;
  });

  document.querySelectorAll(".my_role_lname").forEach((element) => {
    element.textContent = myRoleLname;
  });

  document.querySelectorAll(".my_simple_intro").forEach((element) => {
    element.textContent = simpleIntro;
  });

  document.querySelectorAll(".my_objectives").forEach((element) => {
    element.textContent = myObjectives;
  });
}

function startPreloader() {
  const preloader = document.querySelector("#preloader");
  const progressEl = document.getElementById("progress");
  const progressBar = document.getElementById("progressBar");

  if (!preloader || !progressEl || !progressBar) {
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    if (progress < 90) {
      progress += 1;
      progressEl.textContent = progress;
      progressBar.style.width = progress + "%";
    }
  }, 25);

  window.addEventListener("load", () => {
    clearInterval(interval);
    let final = progress;
    const finish = setInterval(() => {
      final += 1;
      progressEl.textContent = final;
      progressBar.style.width = final + "%";

      if (final >= 100) {
        clearInterval(finish);
        setTimeout(() => {
          preloader.remove();
          document.title = myName;
          new WOW().init();
        }, 100);
      }
    }, 15);
  });
}

// ========================
// Navigation & Scroll Effects
// ========================

document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentMode =
        document.body.getAttribute("data-theme") || getLocalThemeMode();
      manualThemeOverride = currentMode === "night" ? "day" : "night";
      applyTheme(manualThemeOverride);
    });
  }

  applyTimeBasedTheme();
  applyPersonalData();
  startPreloader();
  setupNavigation();
  setupLanguageSelector();
  populateContent();
  setupFormValidation();
  setupIntersectionObserver();
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  setInterval(() => {
    if (!manualThemeOverride) {
      applyTimeBasedTheme();
    }
  }, 60000);
});

function setupLanguageSelector() {
  const languageSelect = document.getElementById("languageSelect");

  if (!languageSelect) {
    return;
  }

  languageOptions.forEach((language) => {
    const option = document.createElement("option");
    option.value = language.code;
    option.textContent = language.label;
    languageSelect.appendChild(option);
  });

  const savedLanguage = localStorage.getItem("portfolio-language") || "en";
  languageSelect.value = "";
  languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    translateWebsite(selectedLanguage);
    event.target.value = "";
  });

  if (savedLanguage !== "en") {
    window.setTimeout(() => translateWebsite(savedLanguage), 800);
  }
}

function setupNavigation() {
  const navbar = document.getElementById("navbar");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const navMenuDesktop = document.querySelector(".nav-menu-desktop");

  // Scroll effect for navbar
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    updateActiveNavLink();
  });

  // Mobile menu toggle
  mobileMenuToggle.addEventListener("click", () => {
    mobileMenuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  });

  // Close menu when link clicked
  const allNavLinks = document.querySelectorAll(
    ".mobile-nav-link, .nav-link-modern",
  );
  allNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        event.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
        setActiveNavLink(link);
      }

      mobileMenuToggle.classList.remove("active");
      mobileMenu.classList.remove("show");
      document.body.classList.remove("no-scroll");
    });
  });

  // Desktop navigation
  if (window.innerWidth > 1024) {
    navMenuDesktop.classList.add("show");
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]");
  let currentId = "";
  const scrollPosition = window.scrollY + 140;

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPosition) {
      currentId = section.getAttribute("id");
    }
  });

  const allNavLinks = document.querySelectorAll(
    ".nav-link-modern, .mobile-nav-link",
  );

  allNavLinks.forEach((link) => {
    const href = link.getAttribute("href");
    const isActive = href === `#${currentId}`;
    link.classList.toggle("active", isActive);
    if (isActive) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

function setActiveNavLink(link) {
  const allNavLinks = document.querySelectorAll(
    ".nav-link-modern, .mobile-nav-link",
  );

  allNavLinks.forEach((item) => {
    const isActive = item === link;
    item.classList.toggle("active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "page");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

// ========================
// Content Population
// ========================

function populateContent() {
  populateEducation();
  populateExperience();
  populateServices();
  populateSkills();
  populateProjects();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
}

// Education Data
const educationData = [
  {
    period: "2013 - 2014",
    degree: "10th Grade",
    institution: "SPB High School, SPB Colony",
    percentage: "69%",
    result: "",
  },
  {
    period: "2015 - 2016",
    degree: "12th Grade",
    institution: "Govt Boys Hr Sec School, Tiruchengode",
    percentage: "64%",
    result: "",
  },
  {
    period: "2016 - 2019",
    degree: "Bsc Computer Science",
    institution: "Thiruvalluvar Govt Arts College, Rasipuram",
    percentage: "66%",
    result: "First Class With A+ Grade",
  },
  {
    period: "2019 - 2021",
    degree: "Msc Computer Science",
    institution: "Thiruvalluvar Govt Arts College, Rasipuram",
    percentage: "79%",
    result: "First Class Distinction With D Grade",
  },
];

function populateEducation() {
  const container = document.getElementById("education-timeline");
  container.innerHTML = "";

  educationData.forEach((item, index) => {
    const html = `
      <div class="timeline-item wow animate__animated animate__fadeInUp">
        <div class="timeline-marker">${index + 1}</div>
        <div class="timeline-content">
          <div class="period">${item.period}</div>
          <h4>${item.degree}</h4>
          <div class="institution">${item.institution}</div>
          <div class="result-wrapper">
                <span class="grade-badge">${item.percentage}</span>
                ${item.result ? `<p>${item.result}</p>` : ""}
            </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Experience Data
const experienceData = [
  {
    company_name: "DSIGNZ MEDIA",
    role: "Web Developer",
    location: "Coimbatore, Tamil Nadu, India - Onsite",
    period: "Full-time, Dec 2022 - Jan 2025",
    responsibilities:
      "I worked on developing and maintaining web and mobile applications using Angular, Ionic, PHP, Laravel, JavaScript, and MySQL. I was involved in the complete project lifecycle, including requirement analysis, application development, REST API integration, testing, deployment, and production support. I also worked on payment gateway integrations such as Razorpay and Atom AES, responsive web development, client requirements, debugging, and performance optimization.",
  },
  {
    company_name: "AIREI",
    role: "Software Engineer",
    location: "Coimbatore, Tamil Nadu, India - Onsite",
    period: "Full-time, Feb 2025 - Present",
    responsibilities:
      "I have been involved in developing and maintaining cross-platform web and mobile applications using Angular, Ionic, and TypeScript. My work includes implementing reusable components, integrating REST APIs, working with Capacitor and Cordova plugins for native mobile functionality, and improving application performance and user experience. I also contribute to debugging, testing, production support, deployment activities, and collaborate with project managers, QA teams, and UI/UX designers throughout the development lifecycle.",
  },
];

function populateExperience() {
  const container = document.getElementById("experience-timeline");
  container.innerHTML = "";

  experienceData.forEach((item, index) => {
    const html = `
      <div class="timeline-item wow animate__animated animate__fadeInUp">
        <div class="timeline-marker">${index + 1}</div>
        <div class="timeline-content">
          <h4>${item.company_name}</h4>
          <div class="period">${item.role}</div>
          <div class="experience-period">${item.period}</div>
          <div class="institution">${item.location}</div>
          <p>${item.responsibilities}</p>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Services Data
const servicesData = [
  {
    name: "Web Application Development",
    image: "images/services/web_application.svg",
    desc: "Web application development involves building functional and scalable web-based applications using modern technologies to support business operations and user workflows.",
  },
  {
    name: "Mobile App Development",
    image: "images/services/mobile_app.svg",
    desc: "Mobile app development involves building functional and responsive applications for mobile devices with a focus on performance, usability, and reliability.",
  },
  {
    name: "Frontend Development",
    image: "images/services/frontend.svg",
    desc: "Frontend development focuses on building interactive and responsive user interfaces using modern web technologies for a seamless application experience.",
  },
  {
    name: "Backend Development",
    image: "images/services/backend.svg",
    desc: "Backend development involves building server-side logic, business processes, authentication, and data handling to power reliable applications.",
  },
  {
    name: "REST API Development & Integration",
    image: "images/services/rest_api.svg",
    desc: "REST API development and integration enables seamless communication between applications, services, and databases for efficient data exchange.",
  },
  {
    name: "Third-Party API Integration",
    image: "images/services/third_party_api.svg",
    desc: "Third-party API integration connects applications with external services and platforms to extend functionality and provide additional features.",
  },
  {
    name: "Payment Gateway Integration",
    image: "images/services/payment_gateway.svg",
    desc: "Payment gateway integration enables secure online payment processing by connecting applications with reliable payment service providers.",
  },
  {
    name: "Database Design & Development",
    image: "images/services/database.svg",
    desc: "Database design and development focuses on structuring, storing, and managing application data efficiently for reliable access and performance.",
  },
  {
    name: "Admin Panel Development",
    image: "images/services/admin_panel.svg",
    desc: "Admin panel development involves building secure dashboards for managing users, data, content, settings, and business operations.",
  },
  {
    name: "ERP Application Development",
    image: "images/services/erp.svg",
    desc: "ERP application development involves building integrated business solutions for managing operations such as production, supply chain, inventory, and reporting.",
  },
  {
    name: "Performance Optimization & Bug Fixing",
    image: "images/services/performance.svg",
    desc: "Performance optimization and bug fixing improve application speed, stability, reliability, and overall functionality by resolving technical issues.",
  },
  {
    name: "Website Maintenance & Support",
    image: "images/services/maintenance.svg",
    desc: "Website maintenance and support keeps applications updated, secure, reliable, and functional through ongoing improvements and technical fixes.",
  },
  {
    name: "Deployment & Production Support",
    image: "images/services/deployment.svg",
    desc: "Deployment and production support involves releasing applications to live environments, configuring services, and resolving production issues.",
  },
];

function populateServices() {
  const container = document.getElementById("services-grid");
  container.innerHTML = "";

  servicesData.forEach((item) => {
    const html = `
      <div class="service-card wow animate__animated animate__fadeInUp">
        <img src="${item.image}" alt="${item.name}">
        <h5>${item.name}</h5>
        <p>${item.desc}</p>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Skills Data
const skillsData = [
  { name: "HTML", image: "images/skills/html.svg", proficiency: 90 },
  { name: "CSS", image: "images/skills/css.svg", proficiency: 85 },
  {
    name: "JAVASCRIPT",
    image: "images/skills/javascript.svg",
    proficiency: 80,
  },
  { name: "JQUERY", image: "images/skills/jquery.svg", proficiency: 80 },
  { name: "BOOTSTRAP", image: "images/skills/bootstrap.svg", proficiency: 90 },
  { name: "ANGULAR", image: "images/skills/angular.svg", proficiency: 85 },
  { name: "REACT", image: "images/skills/react.svg", proficiency: 30 },
  { name: "IONIC", image: "images/skills/ionic.svg", proficiency: 75 },
  { name: "PHP", image: "images/skills/php.svg", proficiency: 80 },
  { name: "LARAVEL", image: "images/skills/laravel.svg", proficiency: 85 },
  { name: "NODE JS", image: "images/skills/node-js.svg", proficiency: 30 },
  { name: "EXPRESS JS", image: "images/skills/express.svg", proficiency: 30 },
  { name: "MY SQL", image: "images/skills/mysql.svg", proficiency: 80 },
  {
    name: "MS SQL",
    image: "images/skills/microsoftsqlserver.svg",
    proficiency: 60,
  },
  { name: "MONGO DB", image: "images/skills/mongo.svg", proficiency: 30 },
];

function populateSkills() {
  const container = document.getElementById("skills-grid");
  container.innerHTML = "";

  skillsData.forEach((item) => {
    const html = `
      <div class="skill-card" style="--proficiency: ${item.proficiency}%">
        <div class="skill-icon">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="skill-info">
          <div class="skill-name">${item.name}</div>
          <div class="skill-bar">
            <div class="skill-progress"></div>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// Projects Data
const projectsData = [
  {
    image: "images/projects/cumi_careers.png",
    title: "Cumi Careers",
    skills: "Html, Css, Js, JQuery, Bootstrap, Php, Mysql",
    description:
      "The careers and recruitment section for Carborundum Universal Limited (CUMI), part of the Murugappa Group, designed to showcase job opportunities.",
  },
  {
    image: "images/projects/decso_plus.png",
    title: "Decso Plus",
    skills: "Html, Css, Typescript, Angular, Ionic, Laravel, Mysql",
    description:
      "A digital platform designed to empower dental professionals with smart appointment management and service collaboration.",
  },
  {
    image: "images/projects/sri_lalitam.png",
    title: "Sri Lalitam",
    skills: "Html, Css, Js, JQuery, Bootstrap, Php, Mysql, Razor pay",
    description:
      "Developed the online shop interface for Sri Lalitam, enabling users to browse and filter spiritual and religious categories with a clear cart and checkout process.",
  },
  {
    image: "images/projects/supportive_souls.png",
    title: "Supportive Souls",
    skills: "Html, Css, Js, JQuery, Bootstrap, Php, Mysql",
    description:
      "Developed Supportive Souls, a charitable website — including education support and hunger relief — with donation and volunteer engagement features.",
  },
  {
    image: "images/projects/pkps.jpg",
    title: "PKPS",
    skills: "Html, Css, Typescript, Angular, Ionic",
    description:
      "The project management system to streamline task assignment, tracking, and collaboration. Implemented role-based access, real-time updates.",
  },
  {
    image: "images/projects/my_palm_mill.jpg",
    title: "MyPalm Mill",
    skills: "Html, Css, Typescript, Angular, Ionic",
    description:
      "The system integrates modules like Grading & Weighbridge, Production, Maintenance, Laboratory, Supply Chain and Traceability, providing real-time data insights.",
  },
];

function populateProjects() {
  const container = document.getElementById("projects-grid");
  container.innerHTML = "";

  projectsData.forEach((item) => {
    const html = `
      <div class="project-card wow animate__animated animate__fadeInUp">
        <img src="${item.image}" alt="${item.title}" class="project-image">
        <div class="project-label">
          <h3 class="project-title">${item.title}</h3>
        </div>
        <div class="project-overlay">
          <h3 class="project-title">${item.title}</h3>
          <p class="project-description">${item.description}</p>
          <p class="project-tech"><strong>Tech:</strong> ${item.skills}</p>
        </div>
      </div>
    `;
    container.innerHTML += html;
  });
}

// ========================
// Form Validation
// ========================

function setupFormValidation() {
  const formInputs = document.querySelectorAll(".form-input");

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.placeholder = "";
    });

    input.addEventListener("blur", function () {
      if (this.value === "") {
        this.placeholder = this.getAttribute("placeholder");
      }
    });
  });
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function showSuccess(content) {
  toastr.success(content, "Success");
}

function showError(content) {
  toastr.error(content, "Error");
}

function redirectToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validation
  if (!name) {
    showError("Name is required");
    return false;
  }
  if (!email) {
    showError("Email is required");
    return false;
  }
  if (!isValidEmail(email)) {
    showError("Invalid email address");
    return false;
  }
  if (!phone) {
    showError("Phone Number is required");
    return false;
  }
  if (!message) {
    showError("Message is required");
    return false;
  }

  // Get time-based greeting
  const hour = new Date().getHours();
  let greeting = "Hello";
  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else if (hour >= 17 && hour <= 22) {
    greeting = "Good evening";
  } else {
    greeting = "Hello";
  }

  const whatsappNumber = "8220224143";
  const textMessage = `${greeting} Sutharsanan, My name is ${name}. I'm reaching out regarding: ${message}. You can contact me at Phone: ${phone}, Email: ${email}`;

  const encodedMessage = encodeURIComponent(textMessage);
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, "_blank");
  showSuccess("Opening WhatsApp...");

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}

// ========================
// Intersection Observer for Animations
// ========================

function setupIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Animate skills when they come into view
        if (entry.target.classList.contains("skill-card")) {
          entry.target.classList.add("show");
        }
      }
    });
  }, observerOptions);

  document.querySelectorAll(".skill-card").forEach((card) => {
    observer.observe(card);
  });
}

// ========================
// Responsive Navigation
// ========================

window.addEventListener("resize", () => {
  const navMenuDesktop = document.querySelector(".nav-menu-desktop");
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (window.innerWidth > 768) {
    navMenuDesktop.classList.add("show");
    mobileMenuToggle.classList.remove("active");
    mobileMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  } else {
    navMenuDesktop.classList.remove("show");
  }
});

// ========================
// Toastr Configuration
// ========================

toastr.options = {
  positionClass: "toast-bottom-center",
  timeOut: 3000,
  extendedTimeOut: 1000,
  progressBar: true,
  preventDuplicates: true,
};
// Lazy load images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

console.log("✨ Modern Portfolio Loaded Successfully");
