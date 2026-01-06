const aboutImg = document.getElementById("aboutImg");
const aboutBack = document.getElementById("aboutBack");
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;
var mouseX = 0;

onmousemove = function(e){
    //aboutImg.style.transform = ("rotateY(" + (-17.5 + (60 * (mouseX/screenWidth))) + "deg)");
    //aboutImg.style.filter = ("drop-shadow: '#555' " + (-5 + (15 * (mouseX/screenWidth))) + "px 0px 20px");

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const picRect = aboutImg.getBoundingClientRect();
    const picY = picRect.top;
    const picHeight = picRect.height;

    //console.log("Mouse:", mouseY, "Picture:", picY, "Screen:", screenHeight);

    const rotateX = (-20 * (mouseY - (picY + picHeight / 2)) / (screenHeight / 2));
    const rotateY = (-14 + (40 * (mouseX / screenWidth)));

    aboutImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}