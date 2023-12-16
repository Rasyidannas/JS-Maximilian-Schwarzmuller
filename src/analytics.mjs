const intervalId = setInterval(() => {
  console.log("Sending anlytic data...");
}, 2000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});
