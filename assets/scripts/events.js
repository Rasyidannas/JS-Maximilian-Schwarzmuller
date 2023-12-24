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

button.addEventListener("click", function (event) {
  event.stopPropagation(); //this will stop other addEventListener in parent element
  console.log("CLICKED BUTTON");
  console.log(event);
  console.log(this);
});

const listItems = document.querySelectorAll("li");
const list = document.querySelector("ul");

// listItems.forEach((listItem) => {
//   listItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

//this is better performance than above (event delegation) beause not looping like above
list.addEventListener("click", function (event) {
  // console.log(event.currentTarget); //this is for to focus in list/parent and never to child
  // event.target.classList.toggle("highlight");
  event.target.closest("li").classList.toggle("highlight"); //closest() it will access certain child according arguments

  //triggering DOM elements
  // form.submit();
  button.click();
  console.log(this);
});
