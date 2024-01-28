// console.log(document.cookie);

const storeBtn = document.getElementById("store-btn");
const retrBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const userId = "u123";
  const user = { name: "Rasyid", age: 24 };
  document.cookie = `uid=${userId}; max-age=2`; //max-age is for expiration in seconds
  document.cookie = `user=${JSON.stringify(user)}`;
});

retrBtn.addEventListener("click", () => {
  const cookieData = document.cookie.split(";");
  const data = cookieData.map((i) => i.trim());
  console.log(data[1].split("=")[1]);
});
