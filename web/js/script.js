// MENU-BARRAS

let menu = document.getElementById("menub");
function mostrarmenu() {
  console.log(menu.style.display)

  if (getComputedStyle(menu).display != "none") {
    menu.style.display = "none"
  } else {
    menu.style.display == "flex"
  }
}
