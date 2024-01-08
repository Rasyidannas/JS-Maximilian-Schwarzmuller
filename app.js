const button = document.querySelector("button");
const output = document.querySelector("p");

const getPosition = (opts) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  //this is promise chaining
  getPosition()
    .then((posData) => {
      //this posData is success in getPosition
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      //this will execute if above cancel
      console.log(err);
      return "on we go...";
    })
    .then((data) => {
      // this data is "Done!" and then in this will execute after then above
      console.log(data, positionData);
    });

  setTimer(1000).then((data) => console.log("Timer done!"));

  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

let result = 0;

for (let i = 0; i < 100000000; i++) {
  result += i;
}

console.log(result);
