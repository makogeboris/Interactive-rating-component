"use strict";

const form = document.querySelector("form");
const ratingCard = document.querySelector(".rating-card");
const thanksCard = document.querySelector(".thanks-card");
const submitButton = document.querySelector(".btn");
const rate = document.getElementById("rate");
const errorMessage = document.querySelector(".error-message");

function showCard(e) {
  e.preventDefault();
  let selectedRating = form.radio.value;
  if (!selectedRating) {
    errorMessage.style.display = "block";
    return;
  }
  rate.textContent = selectedRating;
  ratingCard.style.display = "none";
  thanksCard.classList.remove("hidden");
}

form.addEventListener("submit", showCard);
