var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myDIV").style.top = "0";
  } else {
    document.getElementById("myDIV").style.top = "-1000px";
  }
  prevScrollpos = currentScrollPos;
}
