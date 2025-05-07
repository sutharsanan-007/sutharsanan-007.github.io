const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.classList.add('slide-up');
    preloader.remove();
  });
}

$(document).ready(function () {
    showNavbar()
    $(window).on('scroll', function() {  
        showNavbar()
    });
    $('nav a').on('click', function(event) {
        event.preventDefault(); 
        
        const targetId = $(this).attr('href');
        const targetOffset = $(targetId).offset().top - 70;
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600);
        closeNav()
    });
    $("#currentYear").html(new Date().getFullYear())
});
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active-nav");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-nav");
    }
  });
});
function showNavbar(){
    if ($(window).scrollTop() > 50) {
        $('#navbar').addClass('bg-scrolled');
    } else {
        $('#navbar').removeClass('bg-scrolled');
    }
}
const navBar = document.querySelector(".nav-bar");
const backdrop = document.querySelector(".backdrop");
const toggleBtn = document.querySelector(".toggle-btn");
const closeBtn = document.querySelector(".close-btn");

function openNav() {
    navBar.classList.add("open");
    backdrop.classList.add("open");
    document.body.classList.add("no-scroll");
}

function closeNav() {
    navBar.classList.remove("open");
    backdrop.classList.remove("open");
    document.body.classList.remove("no-scroll");
}


toggleBtn.addEventListener("click", openNav);
closeBtn.addEventListener("click", closeNav);
backdrop.addEventListener("click", closeNav);

// end 

VanillaTilt.init(document.querySelector(".responsive-img"), {
  glare: true,
  maxGlare: .5
});

// education div dynamic start

const educationData = [
    {
      period: "2019 - 2021",
      degree: "Msc Computer Science",
      institution: "Thiruvalluvar Govt Arts College, Rasipuram",
      result: "79% - First Class Distinction With D Grade",
    },
    {
      period: "2016 - 2019",
      degree: "Bsc Computer Science",
      institution: "Thiruvalluvar Govt Arts College, Rasipuram",
      result: "66% - First Class With A+ Grade",
    },
    {
      period: "2015 - 2016",
      degree: "12th Grade",
      institution: "Govt Boys Hr Sec School, Tiruchengode",
      result: "64%",
    },
    {
      period: "2013 - 2014",
      degree: "10th Grade",
      institution: "SPB High School, SPB Colony",
      result: "69%",
    },
  ];
  
  // Function to create and append education cards
  function appendEducationSection() {
    const container = document.getElementById('education-section').querySelector('.d-flex');
  
    educationData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'mb-5 position-relative wow animate__animated animate__fadeInUp';
  
      card.innerHTML = `
        <span class="position-absolute rounded-circle-position translate-middle p-2 bg-white border border-3 border-theme-color rounded-circle"></span>
        <h5 class="fw-bold">${item.degree}</h5>
        <div class="fw-bold mb-1">${item.period}</div>
        <div class="fst-italic text-muted mb-2">${item.institution}</div>
      `;
  
      container.appendChild(card);
    });
  }
  
  appendEducationSection();
  

//   education div dynamic end

// experience div dynamic start

const experienceData = [
  {
    company_name: "ANGLER Technologies",
    role: "Software Engineer & Project Lead",
    location: "Coimbatore, Tamil Nadu, india - Onsite",
    period: "Full-time, Aug 2024 - Present",
    responsibilities: "Led end-to-end development of two projects as Project Lead, including seamless integration of Razorpay (Collect Now) payment gateway, leveraging technologies such as HTML, CSS, JavaScript, jQuery, Bootstrap, PHP, MySQLi, and MSSQL, and also served as a Software Engineer, providing ongoing support, maintenance, and feature enhancements for multiple client projects."
  },
  {
    company_name: "dsignz media",
    role: "Web & App Developer",
    location: "Coimbatore, Tamil Nadu, india - Onsite",
    period: "Full-time, Dec 2022 - Jul 2024",
    responsibilities: "Developed responsive web and mobile applications using HTML, CSS, JavaScript, jQuery, Bootstrap, Angular, and Ionic. Implemented backend functionality with PHP, Laravel, and MySQLi while managing client communications to gather requirements, provide updates, and ensure successful project delivery."
  },
];

function appendExperienceSection() {
  const container = document.getElementById('experience-section').querySelector('.d-flex');

  experienceData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'mb-5 position-relative wow animate__animated animate__fadeInUp';

    card.innerHTML = `
      <span class="position-absolute rounded-circle-position translate-middle p-2 bg-white border border-3 border-theme-color rounded-circle"></span>
      <h5 class="fw-bold">${item.company_name}</h5>
      <div class="fw-bold mb-1">${item.role}</div>
      <div class="mb-1">${item.period}</div>
      <div class="fst-italic text-muted mb-1">${item.location}</div>
      <p>${item.responsibilities}</p>
    `;

    container.appendChild(card);
  });
}

appendExperienceSection();

// experience div dynamic end

// skills dynamic div start

const skillsData = [
    { name: "HTML", image: "images/skills/html.svg", proficiency: 90 },
    { name: "CSS", image: "images/skills/css.svg", proficiency: 85 },
    { name: "JAVASCRIPT", image: "images/skills/javascript.svg", proficiency: 80 },
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
    { name: "MS SQL", image: "images/skills/microsoftsqlserver.svg", proficiency: 60 },
    { name: "MONGO DB", image: "images/skills/mongo.svg", proficiency: 30 },
  ];
  
  function appendSkillsSection() {
    const container = document.getElementById('skills-section').querySelector('.row.justify-content-evenly.gy-4');
  
    skillsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-lg-3 col-md-4 wow animate__animated animate__fadeInUp';
  
      card.innerHTML = `
        <div class="d-flex align-items-center border-0 shadow-sm rounded p-3">
          <img src="${item.image}" alt="${item.name}" width="70" class="pe-3">
          <div class="d-flex flex-column w-100">
            <p>${item.name}</p>
            <div class="progress height5px">
              <div class="progress-bar theme-bg-color" role="progressbar" style="width: ${item.proficiency}%" aria-valuenow="${item.proficiency}"
                aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }
  
  appendSkillsSection();

//   skills dynamic div end

// projects dynamic div start
  const projectsData = [
    {
      image: 'images/projects/arambam_school.png',
      title: 'Arambam School',
      skills: 'Html, Css, Js, JQuery, Php, Mysql',
      description: 'High quality education to children in need to make a step change difference in their educational attainment and future prospects.'
    },
    {
      image: 'images/projects/cumi_careers.png',
      title: 'Cumi Careers',
      skills: 'Html, Css, Js, JQuery, Bootstrap, Php, Mysql',
      description: 'Join our team and build a career that inspires growth and innovation. Explore exciting opportunities and make an impact in a dynamic work environment!'
    },
    {
      image: 'images/projects/decso_plus.png',
      title: 'Decso Plus',
      skills: 'Html, Css, Typescript, Angular, Ionic, Laravel, Mysql',
      description: 'Dental doctor service provides comprehensive patient care through qualified dental professionals, including junior doctor, BDS duty doctor and MDS consultant.'
    },
    {
      image: 'images/projects/eo_coimbatore.png',
      title: 'Eo Coimbatore',
      skills: 'Html, Css, Js, JQuery, Bootstrap, Php, Mysql, Atom Aes',
      description: 'EO - Coimbatore chapter is a relatively young chapter and is about 80 members strong. For a small brief about Coimbatore chapter - The total member company sales of the coimbatore.'
    },
    {
      image: 'images/projects/sri_lalitam.png',
      title: 'Sri Lalitam',
      skills: 'Html, Css, Js, JQuery, Bootstrap, Php, Mysql, Razor pay',
      description: 'Shop the latest trends and exclusive deals, all from the comfort of your home. Experience fast, secure checkout and fast delivery on every order!'
    },
    {
      image: 'images/projects/supportive_souls.png',
      title: 'Supportive Souls',
      skills: 'Html, Css, Js, JQuery, Bootstrap, Php, Mysql',
      description: 'Supportive Souls is a growing network of like minded individuals dedicated to making a positive impact on the world through our various charitable initiatives.'
    }
  ];
  function appendProjectsSection() {
    const container = document.getElementById('projects-section').querySelector('.row.justify-content-center');
  
    projectsData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-10 col-md-12 col-lg-6 wow animate__animated animate__fadeInUp';
  
      card.innerHTML = `
        <div class="card border rounded-0 p-0 position-relative overflow-hidden project-card">
          <img src="${item.image}" class="project-img rounded-0 w-100" alt="${item.title}">
          <div class="overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center text-white text-center px-3">
            <h4 class="mb-2">${item.title}</h4>
            <p class="mb-2 small">${item.description}</p>
            <p class="small">Technologies: ${item.skills}</p>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }  
  appendProjectsSection()

// project section end

//  what i do dynamic div start

  const whatidoData = [
    {name: 'Web Development', image: 'images/web_dev.svg', desc: 'Web development is the process of building and maintaining websites or web applications, focusing on coding, functionality, and user interaction.'},
    {name: 'App Development', image: 'images/app_dev.svg', desc: 'App development is the process of creating software applications for mobile or desktop platforms, focusing on functionality, user experience, and performance.'},
    {name: 'Web Design', image: 'images/ui_dev.svg', desc: 'Web design is the art of planning and creating the layout, visual appearance, and usability of a website to ensure it’s attractive and user-friendly.'},
    {name: 'Payment Gateway', image: 'images/game.svg', desc: 'A payment gateway is an online service that authorizes and processes payments for e-commerce transactions, ensuring secure and smooth transactions between buyers and sellers.'}
  ]
  function appendWhatIDoSection() {
    const container = document.getElementById('whatido-section').querySelector('.row.justify-content-evenly.gy-4');
  
    whatidoData.forEach(item => {
      const card = document.createElement('div');
      card.className = 'col-lg-3 col-md-5 d-flex wow animate__animated animate__fadeInUp';
  
      card.innerHTML = `
        <div class="card flex-fill text-center p-3 border-0 shadow-sm h-100">
          <div class="card-body d-flex flex-column justify-content-start">
            <img src="${item.image}" alt="${item.name}" class="mb-3 mx-auto" width="100">
            <h5 class="mb-3">${item.name}</h5>
            <p class="text-muted">${item.desc}</p>
          </div>
        </div>
      `;
  
      container.appendChild(card);
    });
  }  

  appendWhatIDoSection()
//  what i do dynamic div end


  function redirectToEmail(){
    validation = 0
    $(".form-values").removeClass("border border-danger");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();
    if(name == ""){
        $("#name").addClass("border border-danger");
        validation = 1
    }
    if(email == ""){
        $("#email").addClass("border border-danger");
        validation = 1
    }
    if(phone == ""){
        $("#phone").addClass("border border-danger");
        validation = 1
    }
    if(message == ""){
        $("#message").addClass("border border-danger");
        validation = 1
    }
    if(validation == 1){
        return false;
    }

    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedPhone = encodeURIComponent(phone);
    const encodedMessage = encodeURIComponent(message);

    const emailSubject = 'Contact Form Submission';
    const emailBody = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0APhone: ${encodedPhone}%0AMessage: ${encodedMessage}`;
    const mailtoURL = `mailto:sutharsanan100@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    window.location.href = mailtoURL;
  }
  toastr.options = {
    "positionClass": "toast-bottom-center",
    "timeOut": "3000"
  };

  function showSuccess(content) {
    toastr.success(content, 'Success');
  }
 

  function showInfo(content) {
    toastr.info(content, 'Info');
  }

  function showWarning(content) {
    toastr.warning(content, 'Warning');
  }

  function showError(content) {
    toastr.error(content, 'Error');
  }
  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  function redirectToWhatsApp() {
    let validation = 0;
    $(".form-values").removeClass("border border-danger");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var phone = $("#phone").val().trim();
    var message = $("#message").val().trim();

    if (name == "") {
      var message = 'Name is required';
      showError(message);
      return false
    }
    if (email == "") {
      var message = 'Email is required';
      showError(message);
      return false
    }
    if(email != ''){
      if (!isValidEmail(email)) {
        var message = 'Invalid email address';
        showError(message);
        return false
      }
    }
    if (phone == "") {
      var message = 'Phone Number is required';
      showError(message);
      return false
    }
    if (message == "") {
      var message = 'Message is required';
      showError(message);
      return false
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
    }

    const whatsappNumber = "8220224143"; // Replace with your WhatsApp number
    const textMessage = `${greeting} Sutharsanan, My name is ${name}, I’m reaching out regarding: ${message}. You can contact me at: Phone: ${phone},Email: ${email}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
  }