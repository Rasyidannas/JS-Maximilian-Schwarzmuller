const button = document.querySelector("button");

const buttonClickHandler = (event) => {
  // event.target.disabled = true;
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

// buttons.forEach((btn) => {
//   btn.addEventListener("mouseenter", buttonClickHandler);
// });

// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });

//this is for form
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(event);
});

const div = document.querySelector("div");

div.addEventListener(
  "mouseenter",
  (event) => {
    console.log("CLICKED DIV");
    console.log(event);
  }
  //true //this will run before/first tahn addEventListener in child element (addEventListener in bellow) or capturing
);

button.addEventListener("mouseenter", (event) => {
  event.stopPropagation(); //this will stop other addEventListener in parent element
  console.log("CLICKED BUTTON");
  console.log(event);
});
