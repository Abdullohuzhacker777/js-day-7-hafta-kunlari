const pText = document.querySelector(".itim_p");
const elInput = document.querySelector("#input");
const elForm = document.querySelector(".forimtext");
const elboxs = document.querySelector(".book");
const elAcDalet = document.querySelector(".cart_button");
let pItims = document.querySelector(".itim_ps");
let arr = [];
elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const thes = elInput.value;
  if (thes.length !== 0) {
    arr.push(thes);
  }
  elboxs.textContent = "";

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    const elTtxtH3 = document.createElement("h3");
    elTtxtH3.textContent += element;
    elboxs.appendChild(elTtxtH3);
  }
  pItims.textContent = arr.length;
  elInput.value = "";
});
elAcDalet.addEventListener("click", clearAll);
function clearAll() {
  elboxs.innerHTML = "";
  arr = [];
  pItims.textContent = arr.length;
}
