window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var nav = document.getElementsByClassName("btn")
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}





/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myNewFunction() {
    var y = document.getElementById("menu-btn");
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}