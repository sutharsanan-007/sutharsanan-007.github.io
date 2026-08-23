/* ===========================
   MODERN PORTFOLIO - JAVASCRIPT
   =========================== */

// ========================
// Navigation & Scroll Effects
// ========================

document.addEventListener("DOMContentLoaded", () => {
  setupNavigation();
  setupScrollEffects();
  populateContent();
  setupFormValidation();
  setupIntersectionObserver();
});

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
    link.addEventListener("click", () => {
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
  const sections = document.querySelectorAll("[id]");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link-modern").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

function setupScrollEffects() {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
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
      "Developed responsive web and mobile applications using HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, and Ionic. Implemented backend functionality with PHP, Laravel, and MySQLi. Integrated Razorpay (Collect Now) payment gateway for seamless payment processing. Managed client communications to gather requirements, provide updates, and ensure successful project delivery.",
  },
  {
    company_name: "AIREI",
    role: "Software Engineer",
    location: "Coimbatore, Tamil Nadu, India - Onsite",
    period: "Full-time, Feb 2025 - Present",
    responsibilities:
      "Specialized in designing and developing high-performance hybrid mobile applications using the Ionic framework, Angular, and TypeScript. Proven expertise in building scalable cross-platform solutions for iOS and Android, with seamless integration of RESTful APIs and native functionalities via Cordova/Capacitor and full-cycle deployment to the Apple App Store and Google Play Store.",
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
    name: "Web Development",
    image: "images/web_dev.svg",
    desc: "Web development is the process of building and maintaining websites or web applications, focusing on coding, functionality, and user interaction.",
  },
  {
    name: "App Development",
    image: "images/app_dev.svg",
    desc: "App development is the process of creating software applications for mobile or desktop platforms, focusing on functionality, user experience, and performance.",
  },
  {
    name: "Web Design",
    image: "images/ui_dev.svg",
    desc: "Web design is the art of planning and creating the layout, visual appearance, and usability of a website to ensure it's attractive and user-friendly.",
  },
  {
    name: "Payment Gateway",
    image: "images/game.svg",
    desc: "A payment gateway is an online service that authorizes and processes payments for e-commerce transactions, ensuring secure and smooth transactions between buyers and sellers.",
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
