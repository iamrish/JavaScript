const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");
const userID = "u123";

storeButton.addEventListener("click", () => {
    // This is adding a cookie and not overwriting the cooking. Underneath this is a  setter function that 
    // sets the value to the key.
   document.cookie = `uid=${userID}; max-age=5`;
});

retrieveButton.addEventListener("click", () => {
  console.log(document.cookie);
});
