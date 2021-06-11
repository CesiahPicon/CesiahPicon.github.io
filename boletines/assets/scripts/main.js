
let links = document.querySelectorAll(".close");

.close{
height: 40px;
width: 40px;
color: white;
border-radius: 50px;
background-color: #ff006e;
display: inline-block;
box-shadow: 0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);
font-weight: 300;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;

}


links.forEach(function(link) {


link.addEventListener("click" , function(ev) {
  ev.preventDefault();
  let content = document.querySelector('.content');



  content.classList.remove("animate__zoomInDown");
  content.classList.remove("animate__zoomInDown");


    content.classList.add("animate__fadeOutUp");
  content.classList.add("animate__animated");


setTimeout(function(){
window.history.go(-1);
 }, 600);
  setInterval

  return false;


});

});















});
