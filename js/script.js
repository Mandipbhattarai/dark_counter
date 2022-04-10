// counter


const counters = document.querySelectorAll(".counter");
const speed = 200;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");

    const count = +counter.innerText;

    const incrementRate = target / speed;

    if (count < target) {
      counter.innerText = Math.round(count + incrementRate);
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});



// dark theme 
var icon = document.getElementById("icon");

icon.onclick = function(){
  document.body.classList.toggle("dark-theme")
  if( document.body.classList.contains("dark-theme")){
    icon.src = "img/sun.png";
  }
  else{
    icon.src = "img/moon.png"
  }
}
 