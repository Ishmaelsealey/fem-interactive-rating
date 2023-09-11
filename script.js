// select all elements that will be used in the webpage

const rating = document.querySelector("#rating");
const thankyou = document.querySelector("#thankyou");
const form = document.querySelector("form");
const chosenRating = document.querySelector("#chosenRating");

form.addEventListener("submit", (event) => {
  
  // stop the form from doing the default things when a form is submitted (reloading the page)
  event.preventDefault();

  // if else block to check which button is checked when the form is submitted
  // the state of the chosen rating block (top of thank you section) is changed to reflect the chosen rating
  // otherwise the user is alerted that no rating was chosen
  
  if (form.querySelector("#one").checked) {
    chosenRating.innerHTML = "You selected 1 out of 5";
  } else if (form.querySelector("#two").checked) {
    chosenRating.innerHTML = "You selected 2 out of 5";
  } else if (form.querySelector("#three").checked) {
    chosenRating.innerHTML = "You selected 3 out of 5";
  } else if (form.querySelector("#four").checked) {
    chosenRating.innerHTML = "You selected 4 out of 5";
  } else if (form.querySelector("#five").checked) {
    chosenRating.innerHTML = "You selected 5 out of 5";
  } else {
    alert("You did not chose a rating!");
    return false;
  }

  // set rating animation state to running for it to transition out of the page
  rating.style.animationPlayState = "running";
  
  rating.addEventListener("animationend", () => {
    
    rating.style.display = "none";
    thankyou.style.display = "flex";

    // set thankyou animation state to play for it to transition into the page
    thankyou.style.animationPlayState = "running";
  });
});
