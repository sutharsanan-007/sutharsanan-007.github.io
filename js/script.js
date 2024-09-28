$(window).on('load', function() {
   setTimeout(() => {
    $('#preloader').fadeOut('slow', function() {
        $('#content').fadeIn('slow');
    });
   }, 1000);
});
$(document).ready(function () {
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('#navbar').addClass('bg-scrolled');
        } else {
            $('#navbar').removeClass('bg-scrolled');
        }
    });
    $('nav a').on('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior
        
        const targetId = $(this).attr('href');
        const targetOffset = $(targetId).offset().top - 70; // 50px offset
        closeCanvas()
        $('html, body').animate({
            scrollTop: targetOffset
        }, 600); // 600 milliseconds for smooth scroll
    });
});

let currentIndex = 0;
const words = ['Web','App','Full Stack','Angular','Ionic','Laravel'];
function changeText() {
    const span = document.getElementById('dynamic-text');
    currentIndex = (currentIndex + 1) % words.length;
    span.textContent = words[currentIndex];
}
setInterval(changeText, 2000);

function redirectToWhatsApp(){
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();
    
    // Encode values for URL
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);
    
    // Construct WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=8220224143&text=Name:%20${encodedName}%0AEmail:%20${encodedEmail}%0AMessage:%20${encodedMessage}`;
    
    // Redirect to WhatsApp
    window.location.href = whatsappURL;
}

function redirectToEmail(){
    validation = 0
    $(".form-control").removeClass("border border-danger");

    var name = $("#name").val().trim();
    var email = $("#email").val().trim();
    var message = $("#message").val().trim();
    if(name == ""){
        $("#name").addClass("border border-danger");
        validation = 1
    }
    if(email == ""){
        $("#email").addClass("border border-danger");
        validation = 1
    }
    if(message == ""){
        $("#message").addClass("border border-danger");
        validation = 1
    }
    if(validation == 1){
        return false;
    }
    // Encode values for URL
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);
    const encodedMessage = encodeURIComponent(message);

    // Construct mailto URL
    const emailSubject = 'Contact Form Submission';
    const emailBody = `Name: ${encodedName}%0AEmail: ${encodedEmail}%0AMessage: ${encodedMessage}`;
    const mailtoURL = `mailto:sutharsanan100@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${emailBody}`;

    // Redirect to mailto URL
    window.location.href = mailtoURL;
}

var offcanvasElement = document.getElementById('myOffcanvas');
var offcanvas = new bootstrap.Offcanvas(offcanvasElement);
function openCanvas(){
    offcanvas.show();
}
function closeCanvas(){
    offcanvas.hide();
}