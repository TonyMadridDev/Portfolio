const toggle = document.getElementById('navbar-toggle');
const arrowToggle = document.getElementById('toggle-arrow');

function navBtnToggle(e) {
  if (e.target.classList.contains('btn-toggle') | e.target.classList.contains('fa-arrow-down') | e.target.classList.contains('fa-arrow-up')) {
    document.querySelector('.navbar-list').classList.toggle('show-nav');
    navArrowToggle();
  } else {

  }
};

function navArrowToggle(e) {
  arrowToggle.classList.toggle('fa-arrow-down');
  arrowToggle.classList.toggle('fa-arrow-up');
  
};





// Event Listeners

// Toggle Nav
toggle.addEventListener('click', navBtnToggle);




