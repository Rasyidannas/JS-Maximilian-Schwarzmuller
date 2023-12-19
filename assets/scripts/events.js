const buttons = document.querySelectorAll("button");

const buttonClickHandler = (event) => {
  event.target.disabled = true;
  console.log(event);
};

const anotherButtonClickHandler = () => {
  console.log("THis was clicked!");
};

// button.onclick = buttonClickHandler;

// button.addEventListener("click", buttonClickHandler);

//this will remove above addEventListener. Only work with function expression for second argument and don't bind function
// setTimeout(() => {
//   button.removeEventListener("click", buttonClickHandler);
// }, 2000);

buttons.forEach((btn) => {
  btn.addEventListener("click", buttonClickHandler);
});
