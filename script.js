"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

//functions to vlose and open modal
const closeModel = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModel = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

//open modal
for (let index = 0; index < btnsOpenModal.length; index++)
  btnsOpenModal[index].addEventListener("click", openModel);

//close modal
btnCloseModal.addEventListener("click", closeModel);
overlay.addEventListener("click", closeModel);

// Close modal if escape key in the keyboard is pressed
document.addEventListener("keydown", function (e) {
  //to show the pressed key
  console.log(e.key);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModel();
  }
});
