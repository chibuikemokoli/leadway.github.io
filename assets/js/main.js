const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu')

    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

var className = "inverted";
var scrollTrigger = 170;

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};

const q = document.querySelectorAll('.q');
const a = document.querySelectorAll('.a');
const arr = document.querySelectorAll('.arrow');

for (let i = 0; i < q.length; i++) {

  q[i].addEventListener('click', () => {
    a[i].classList.toggle('a-opened');
    arr[i].classList.toggle('arrow-rotated');
  });
};

gsap.from('.header, .inverted-1', { opacity: 0, duration: 2.2, delay: 2, y: -25 })
gsap.from('.header__content', { opacity: 0, duration: 2, delay: 1.4, y: 25 })

gsap.from('.delp', { opacity: 0, duration: 1.7, delay: 1.6, y: 25, ease: 'expo.out' })

gsap.from('.about-us-3', { opacity: 0, duration: 1.5, delay: 1.2, y: 25 })

gsap.from('.nav__logo, .nav__toggle', { opacity: 0, duration: 1.5, delay: 2, y: 25 })
gsap.from('.nav__list', { opacity: 0, duration: 1.2, delay: 2.4, y: 25 })
gsap.from('.h21, .h22', { opacity: 0, duration: 3, delay: 2, y: -25 })
gsap.from('.home__bird-2', 1.2, {opacity: 0, x: 80, delay: 1.2})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyKcjRpHkJVX8NQ0rB8b2qJsTOGG5ofC32h5xwr-rcUFZojdjcHdwaKuJ7pB4555rh2EQ/exec'
const form = document.forms['leadway-contact']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      if (response.ok) {
        msg.innerHTML = "Message Sent Successfully!";
        setTimeout(function () {
          msg.innerHTML = ""
        }, 5000)
        form.reset()
        window.location.href = "thank-you.html";
      } else {
        console.error('Error!', response.statusText);
      }
    })
    .catch(error => console.error('Error!', error.message));
});

function delayer() {
  setTimeout(downLoad, 500)
}
function downLoad() {
  if (document.all) {
    document.all["preloader"].style.display = "none";
    document.all["layer2"].style.display = "block";
  } else if (document.getElementById) {
    node = document.getElementById("preloader").style.display = 'none';

    node = document.getElementById("layer2").style.visibility = 'visible';

  }
}