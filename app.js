data.forEach((item) => {
  let container = document.createElement("div");
  container.className = "card";

  container.innerHTML = `
  <div class="id">${item.id}</div>
  <img src="${item.img_url}">
  <div class="name">${item.name}</div>`;

  document.querySelector("#products").appendChild(container);
});

const $kart = document.querySelector("#shopping_kart");
const $$cards = document.querySelectorAll(".card");
for (let card of $$cards) {
  let cardClone = card.cloneNode(true);
  cardClone.style.width = "8vw";
  cardClone.style.height = "8vw";

  card.addEventListener("click", function () {
    $kart.appendChild(cardClone);
    card.style.display = "none";
    cardClone.style.display = "";
  });

  cardClone.addEventListener("click", function () {
    cardClone.style.display = "none";
    card.style.display = "";
  });
}
