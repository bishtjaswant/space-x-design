(function() {
  
let linkmoves=document.querySelectorAll(".link-move");

linkmoves.forEach((element,ind) => {
    console.log('k');
    element.style.animation=`linkMove .${ind}s linear forwards `;
});



}())