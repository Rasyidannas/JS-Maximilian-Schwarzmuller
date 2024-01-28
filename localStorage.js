const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

const userId = "u123";
const user = {
  name: "Rasyid",
  age: 24,
};

storeBtn.addEventListener("click", () => {
  //sessionStorage it will auto remove when browser reload or closed
  sessionStorage.setItem("uid", userId);
  localStorage.setItem("user", JSON.stringify(user));
});

retrBtn.addEventListener("click", () => {
  const extractedId = sessionStorage.getItem("uid");
  const extractedUser = JSON.parse(localStorage.getItem("user"));
  console.log(extractedUser);

  if (extractedId) {
    console.log("Got the id" + extractedId);
  } else {
    console.log("Could not found id ");
  }
});
