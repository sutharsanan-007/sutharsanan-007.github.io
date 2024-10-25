$(window).on('load', function() {
   setTimeout(() => {
    $('#preloader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
    });
   }, 1000);
});
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
      card.className = 'col-12 col-sm-12 col-md-10 col-lg-6 card p-4 mb-4';
  
      card.innerHTML = `
        <p><span class="badge theme-bg-color">${item.period}</span></p>
        <h3>${item.degree}</h3>
        <h5>${item.institution}</h5>
        <p>${item.result}</p>
      `;
  
      container.appendChild(card);
    });
  }
  
  appendEducationSection();

//   education div dynamic end

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
    const container = document.getElementById('skills-section').querySelector('.row.justify-content-center');
  
    skillsData.forEach(skill => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-8 col-md-4 col-lg-3 card py-2 m-1';
  
      card.innerHTML = `
        <div class="row">
          <div class="col-3">
            <img src="${skill.image}" alt="${skill.name}" width="50">
          </div>
          <div class="col-9">
            <p>${skill.name}</p>
            <div class="progress height5px">
              <div class="progress-bar theme-bg-color" role="progressbar" style="width: ${skill.proficiency}%" aria-valuenow="${skill.proficiency}"
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
    const encodedMessage = encodeURIComponent(message);

    const emailSubject = 'Contact Form Submission';
    const emailBody = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0AMessage: ${encodedMessage}`;
    const mailtoURL = `mailto:sutharsanan100@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    window.location.href = mailtoURL;
}