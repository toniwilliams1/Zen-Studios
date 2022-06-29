var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


document.querySelector(".button2").addEventListener('click', showCalendar)   
function showCalendar(){
  const date  = document.querySelector('#onSiteDate').value

  document.querySelector('#onSiteDate').style.display = 'block'
  document.querySelector('.confirmed').style.display = 'block'
    document.querySelector('.button2').style.display = "none"
  document.querySelector('.confirm').style.display = 'block'
  document.querySelector('.visitP').style.display = 'none'
}

document.querySelector(".confirm").addEventListener('click', showConfirm)
function showConfirm(){
    const date  = document.querySelector('#onSiteDate').value
    document.querySelector('.confirmed').innerText= `Booking Confirmed! See you on ${date}. Please check your email for further instructions.`
  document.querySelector('input').style.display = 'none'
  document.querySelector('.confirm').style.display = 'none'
    document.querySelector('#onSiteDate').style.display = 'none'

}

document.querySelector(".button3").addEventListener('click', showOnSite)
function showOnSite(){
  const date  = document.querySelector('#visitDate').value
  document.querySelector('#visitDate').style.display = 'block'
  document.querySelector('.confirmed').style.display = 'block'
    document.querySelector('.button3').style.display = "none"
  document.querySelector('.confirm2').style.display = 'block'
    document.querySelector('.visitP2').style.display = 'none'

}

document.querySelector(".confirm2").addEventListener('click', showConfirmTwo)
function showConfirmTwo(){
    const date  = document.querySelector('#visitDate').value
    document.querySelector('#paragraph').innerText= `Booking Confirmed! See you on ${date}. Please check your email for further instructions.`
  document.querySelector('#visitDate').style.display = 'none'
  document.querySelector('.confirm2').style.display = 'none'

}
