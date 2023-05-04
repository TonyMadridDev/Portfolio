const toggle = document.getElementById('navbar-toggle');


function navBtnToggle(e) {
  if (e.target.classList.contains('btn-toggle') | e.target.classList.contains('fa-arrow-down')) {
    document.querySelector('.navbar-list').classList.toggle('show-nav');
    navArrowToggle();
  } else {

  }
};

function navArrowToggle(e) {
  console.log('hi');
};




// Event Listeners

// Toggle Nav
toggle.addEventListener('click', navBtnToggle);




