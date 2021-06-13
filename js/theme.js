const header = document.getElementById("navbar")
const backtop = document.getElementById("footer-widgets-backtop")
const navbarHeight = header.clientHeight;
const scrollTargets = document.querySelectorAll(".scrollTargets")

const navHeight = () => {
    document.documentElement.style.setProperty('--header-height', `${header.clientHeight}px`)
}
navHeight(); 

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
    if ( (window.innerHeight + window.scrollY) >= document.body.offsetHeight ){
        backtop.classList.remove("d-none")
    } else {
        backtop.classList.add("d-none")
    }
    
    var myTop = scrollTargets[0].style.height;
    if ( myTop == ""){
        for (var i = 0; i < scrollTargets.length; i++) {
            scrollTargets[i].style.height = `0px`;
        }
    } 
    
})

function smoothAnchorScroll(){
    for (var j = 0; j < scrollTargets.length; j++) {
        scrollTargets[j].style.height = `${navbarHeight}px`;
    }
}

document.addEventListener("mousemove", parallax);

function parallax(e){
      var layers = document.getElementsByClassName("layer");
      for (var k = 0; k < layers.length; k++){
          var speed = layers[k].getAttribute('data-speed');
          var x = (window.innerWidth - e.pageX*speed)/100;
          var y = (window.innerHeight - e.pageY*speed)/100;
          layers[k].style.transform = `translateX(${x}px) translateY(${y}px)`;
      }
}


