function plans() {
  var element = document.querySelector(".plans");

  element.scrollIntoView({ behavior: "smooth", block: "start" });
}

// botoes de informações toggle
let div = document.querySelector(".container__open--child");
let isShow = false;

function toggleBtn() {
  if (isShow === false) {
    div.style.display = "block";
    isShow = true;
  } else {
    div.style.display = "none";
    isShow = false;
  }
}
