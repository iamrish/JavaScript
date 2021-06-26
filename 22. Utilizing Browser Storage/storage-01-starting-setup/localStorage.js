const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");
const userID = "u123";

storeButton.addEventListener("click", () => {
    // sessionStorage use karne ke liye bas localStorage ki jagah sessionStorage hi likhna hai.
  localStorage.setItem("userID", userID);
});

retrieveButton.addEventListener("click", () => {
  const extracted = localStorage.getItem("userID");
  if (extracted) {
    console.log(`Got the id - ${extracted}`);
  } else console.log("No such key");
});
