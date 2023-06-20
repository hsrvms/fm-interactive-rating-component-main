const numbers = document.querySelectorAll(".rating-list li");
const cardFront = document.getElementById("cardFront");
const cardBack = document.getElementById("cardBack");
const submitButton = document.getElementById("submit");
const selectedRateBox = document.getElementById("rateBox");

let selectedRating;

numbers.forEach((item) => {
  item.addEventListener("click", () => {
    numbers.forEach((item) => item.classList.remove("selected"));

    item.classList.add("selected");

    selectedRating = item.dataset.rating;
    console.log("Selected Rating:", selectedRating);
    console.log(item);
  });
});

submitButton.addEventListener("click", () => {
  if (!selectedRating) return;
  else {
    cardFront.classList.add("hide");
    cardBack.classList.remove("hide");
    editRateBox(selectedRating);
  }
});

function editRateBox(rating) {
  let text = document.createElement("p");

  text.innerText = `You selected ${rating} out of 5`;
  selectedRateBox.appendChild(text);
}
