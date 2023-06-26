const swiper = new Swiper('.swiper', {
    speed: 600,
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
  

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay:6000,
        disableOnInteraction: false,
    },


    on: {
        init: function () {
          this.el.addEventListener('mouseenter', function () {
            this.autoplay.stop();
          }.bind(this));
          
          this.el.addEventListener('mouseleave', function () {
            this.autoplay.start();
          }.bind(this));
        },
      },

  });



  const form = document.querySelector("form");
  const nameField = form.querySelector(".name-field");
const nameInput = nameField.querySelector("#name");
function checkName(){
    const namePattern = /^(?:\s{0}|[A-Za-z\s]{3,})$/;
    if(!nameInput.value.match(namePattern)){
        return nameField.classList.add("invalid");
    }
    nameField.classList.remove("invalid");
}


const phoneField = form.querySelector(".phone-field");
const phoneInput = phoneField.querySelector("#phone");
function checkPhone(){
    const phonePattern = /^(?:\d{0}|\d{9})$/;
    if(!phoneInput.value.match(phonePattern)){
        return phoneField.classList.add("invalid");
    }
    phoneField.classList.remove("invalid");
}


const emailField = form.querySelector(".email-field");
const emailInput = emailField.querySelector("#email");
function checkEmail(){
    const emaipattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailInput.value.match(emaipattern)) {
         return emailField.classList.add("invalid");
    }
    emailField.classList.remove("invalid");
}


var btn = document.getElementById('btn');
btn.addEventListener('click',function(e) {
    e.preventDefault()
    checkName();
    checkPhone();
    checkEmail();

    nameInput.addEventListener("keyup",checkName);
    phoneInput.addEventListener("keyup",checkPhone);
    emailInput.addEventListener("keyup",checkEmail);

    if(!nameField.classList.contains("invalid") && !phoneField.classList.contains("invalid") && !emailField.classList.contains("invalid")){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var body = 'MaxTech Developers:<br>'+ 'Imię: ' +name + '<br/> Telefon: ' + phone + '<br/> Email: ' + email;

        const confirm = document.querySelector(".confirm");
        confirm.style.display = "inline-block";

        Email.send({
            SecureToken : "26919f03-6045-4c29-baab-d53068bfcfdf",
            To : 'adam.padam24@gmail.com', 
            From : "jacekplacek221155@gmail.com",
            Subject : "Contact message",
            Body : body
        }).then(
        message => alert(message)
        );

    }
})





let close_phone_contact_window = document.querySelector("#close-phone-contact-window");
let phone_contact_window = document.querySelector("#phone-contact-window");
let phone_contact = document.querySelector(".phone-contact");
close_phone_contact_window .addEventListener('click', () =>phone_contact_window .classList.remove('active'));
phone_contact.addEventListener('click', () =>phone_contact_window .classList.add('active'));













const dropdownIcon = document.querySelector('.dropdown_icon');

let menu = document.querySelector('.bx-menu');
let navmenu = document.querySelector('.navmenu');

menu.addEventListener("click", () =>{
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');

    if (menu.classList.contains('bx-x')) {
      dropdownIcon.classList.replace('bxs-chevron-down', 'bx-chevron-right');
    } else {
      dropdownIcon.classList.replace('bx-chevron-right', 'bxs-chevron-down');
    }
})










const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})












let dropdown=document.querySelector(".dropdown");
let dropmenu = document.querySelector(".dropmenu");
let close_dropmenu = document.querySelector("#close-dropmenu");
dropdown.addEventListener('click', () => dropmenu.classList.add('active-dropmenu'));
close_dropmenu.addEventListener('click', (event) =>{
  event.stopPropagation();
  dropmenu.classList.remove('active-dropmenu');
});



