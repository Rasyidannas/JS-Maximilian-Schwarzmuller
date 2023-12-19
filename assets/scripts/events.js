const button = document.querySelector("button");

const buttonClickHandler = () => {
  alert("Button was clicked!");
};

button.onclick = buttonClickHandler;
