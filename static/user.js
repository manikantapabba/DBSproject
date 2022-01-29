const select = document.querySelector(".select");
const price = document.querySelector(".price");

console.log(price.disabled);
console.log(select.value);
select.onchange = function () {
  if (this.value === "Market") {
    price.disabled = true;
  } else {
    price.disabled = false;
  }
};
