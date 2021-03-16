const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close")

const _open = () => {
      nav.style.width = "100%";
      nav.classList.add("show");
      nav.classList.remove("hide");
}

const _close =  () => {
      nav.style.width = "0%";
      nav.classList.remove("show");
}
open.addEventListener("click", _open);
close.addEventListener("click",_close);