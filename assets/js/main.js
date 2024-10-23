const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

  toggle.addEventListener('click', () => {
    nav.classList.toggle('show-menu')
    toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle', 'nav-menu')

const dropdownItems = document.querySelectorAll('.dropdown__item')

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector('.dropdown__button')

  dropdownButton.addEventListener('click', () => {
    
    const showDropdown = document.querySelector('.show-dropdown')

    toggleItem(item)

    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown)
    }
  })
})

const toggleItem = (item) => {
  
  const dropdownContainer = item.querySelector('.dropdown__container')

  if (item.classList.contains('show-dropdown')) {
    dropdownContainer.removeAttribute('style')
    item.classList.remove('show-dropdown')
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
    item.classList.add('show-dropdown')
  }
}

const mediaQuery = matchMedia('(min-width: 1118px)'),
  dropdownContainer = document.querySelectorAll('.dropdown__container')

const removeStyle = () => {
  
  if (mediaQuery.matches) {
    
    dropdownContainer.forEach((e) => {
      e.removeAttribute('style')
    })

    dropdownItems.forEach((e) => {
      e.classList.remove('show-dropdown')
    })
  }
}

addEventListener('resize', removeStyle)

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top')
  if (this.scrollY >= 560) scrollTop.classList.add('show-scroll');
  else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop);

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

const scriptURL = 'https://script.google.com/macros/s/AKfycbyn_dYQZ8oaVjHxNNtt3uIfLTAPOCqkoiSMw9DNCV3Md5QzPV56cp8JogckkO9yB37IMA/exec'
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
        window.location.href = "thank-you";
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