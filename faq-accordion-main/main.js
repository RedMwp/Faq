let faqBody = document.querySelectorAll(".faq-component__item__body");
let icons = document.querySelectorAll('.faq-component__item__head img');
let faqhead = document.querySelectorAll('.faq-component__item__head');

// Function to check if an element has the active class
function hasActiveClass(el) {
  return el.classList.contains('faq-component__item--active');
}

// Function to toggle the active class and change the icon accordingly
function toggleActiveClass(idx) {
  if (hasActiveClass(faqBody[idx])) {
    faqBody[idx].classList.remove('faq-component__item--active');
    icons[idx].src = 'assets/images/icon-plus.svg'; 
  } else {
    faqBody[idx].classList.add('faq-component__item--active');
    icons[idx].src = 'assets/images/icon-minus.svg'; 
  }
}


faqhead.forEach((item, idx) => {
  item.onclick = () => {
    toggleActiveClass(idx);
  };
});