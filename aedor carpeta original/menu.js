let d = document;
let w = window;

const hamburguer = d.querySelector(".hamburguer");
const menu = d.querySelector(".menu-navegacion");

// console.log(menu);
// console.log(hamburguer);

hamburguer.addEventListener("click", () => {
  menu.classList.toggle("spread");
});

w.addEventListener("click", (e) => {
  if (
    menu.classList.contains("spread") &&
    e.target != menu &&
    e.target != hamburguer
  ) {
    menu.classList.toggle("spread");
  }
});
