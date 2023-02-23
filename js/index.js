/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
navlist=document.querySelector('.navlist')
searching = document.querySelector('.searching')
navbutton=document.querySelector('#navbutton')

function myFunction() {
    navlist.classList.toggle('resp')
    searching.classList.toggle('resp')
    navbutton.classList.toggle('resp')
  }