const button = document.querySelector("button");

const buttonClickHandler = () => {
  alert("Button was clicked!");
};

const anotherButtonClickHandler = () => {
  console.log("THis was clicked!");
};

// button.onclick = buttonClickHandler;

button.addEventListener("click", buttonClickHandler);

//this will remove above addEventListener. Only work with function expression for second argument and don't bind function
setTimeout(() => {
  button.removeEventListener("click", buttonClickHandler);
}, 2000);
