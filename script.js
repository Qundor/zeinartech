// MENU
document.getElementById("menu-toggle").onclick = () => {
  document.getElementById("nav").classList.toggle("active");
};

// SCROLL ANIMATION
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll("section, .card").forEach(el=>{
  el.classList.add("fade-up");
  observer.observe(el);
});

// NAV SCROLL EFFECT
window.addEventListener("scroll",()=>{
  const header = document.querySelector("header");
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});