/* eslint-disable quotes */
const button = document.querySelector("button");
const text = document.querySelector("p");

button.addEventListener("click", () => {
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text.textContent)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  }
  else{
    alert("Feature not supported, copy the text manually!");
  }
});
