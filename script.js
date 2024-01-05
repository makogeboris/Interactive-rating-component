"use strict";

const thanksCard = document.querySelector(".thanks-card");
const submitButton = document.querySelector(".submit-btn");
const showCardButton = document.querySelector(".show-card-btn");
const rate = document.getElementById("rate");
const ratings = document.querySelectorAll(".ratings");
const errorMessage = document.getElementById("error-message");

const showCard = function () {
  // displays error message
  let selectedRating = document.querySelector(".ratings.active");
  if (!selectedRating) {
    errorMessage.style.display = "block";
    return;
  }
  rate.innerHTML = selectedRating.value;
  // displays thank you card
  thanksCard.classList.remove("hidden");
};

showCardButton.addEventListener("click", showCard);

// ratings selection and state
ratings.forEach(function (rates) {
  rates.addEventListener("click", function () {
    ratings.forEach(function (btn) {
      btn.classList.remove("active");
    });
    rates.classList.add("active");
    errorMessage.style.display = "none";
  });
});
