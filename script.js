burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');
navlist = document.querySelector('.navlist');

burger.addEventListener('click', () => {
  rightNav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
});


navlist.addEventListener('click', () => {
  rightNav.classList.toggle('v-class-resp');
  navlist.classList.toggle('v-class-resp');
  navbar.classList.toggle('h-nav-resp');
});



function openVideo() {
  var videoUrl = "Gadget.mp4";
  window.open(videoUrl, "_blank", "width=600, height=400");
}

function openLoginPage() {
  window.location.href = "login.html";
}

const form = document.querySelector('.form');
const submitButton = document.querySelector('.btn-dark');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const textArea = document.getElementById('text');

  let isValid = true;


  if (nameInput.value.trim() === '') {
    isValid = false;
    nameInput.classList.add('error');
  } else {
    nameInput.classList.remove('error');
  }

  if (phoneInput.value.trim() === '' || !isValidPhone(phoneInput.value.trim())) {
    isValid = false;
    phoneInput.classList.add('error');
  } else {
    phoneInput.classList.remove('error');
  }

  if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value.trim())) {
    isValid = false;
    emailInput.classList.add('error');
  } else {
    emailInput.classList.remove('error');
  }


  if (textArea.value.trim() === '') {
    isValid = false;
    textArea.classList.add('error');
  } else {
    textArea.classList.remove('error');
  }

  return isValid;

}


function isValidPhone(phone) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
}


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


