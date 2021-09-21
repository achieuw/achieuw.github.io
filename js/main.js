var nav = document.getElementsByClassName('nav-items');
var borderAnim = document.getElementsByClassName('border-anim');

function toggle_menu(){
  for(var i= 0; i < borderAnim.length; i++)
    borderAnim[i].style.visibility = "hidden";

  if(nav[0].style.visibility == "hidden"){
    nav[0].style.visibility = "visible";
  }
  else
    nav[0].style.visibility = "hidden";
}