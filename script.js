let gridsize = 16;
btn = document.querySelector("button");
makethegrid();
btn.addEventListener("click", () => {
  gridsize = prompt("enter grid size: ");
  makethegrid();
});
function makethegrid() {
  let grid = document.querySelector(".grid");
  let w = 100 / gridsize;
  grid.innerHTML = "";
  grid.style.cssText = `display: grid;width:960px;height:960px;grid-template-columns: repeat(${gridsize}, ${w}%);grid-template-rows: repeat(${gridsize}, ${w}%);`;
  let t = gridsize * gridsize;
  while (t--) {
    let newdiv = document.createElement("div");
    newdiv.classList.add("cell");
    grid.appendChild(newdiv);
  }
  let divs = document.getElementsByClassName("cell");
  for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);
    divs[i].addEventListener("mouseenter", () => {
      divs[i].style.backgroundColor = "aquamarine";
    });
  }
}

// document.body.style.cssText = "box-sizing: border-box;";
