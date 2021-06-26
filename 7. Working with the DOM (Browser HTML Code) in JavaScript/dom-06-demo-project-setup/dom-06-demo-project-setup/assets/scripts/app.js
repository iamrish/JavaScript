const hover = document.getElementById("add-modal");
const addMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const hoverCancelButton = document.querySelector(".btn.btn--passive");
const hoverAddButton = hoverCancelButton.nextElementSibling;
const userInput = document.querySelectorAll("input");
const mainTag = document.querySelector("main");
const deleteHover = document.getElementById("delete-modal");
let deleteHoverAddButton = deleteHover.querySelector(".btn.btn--danger");
const deleteHoverCancelButton = deleteHover.querySelector(".btn.btn--passive");
let movies = [];

// toggle adds the class if it is not present and deletes the class if it is present. To ADD BUTTON waale se hi sab hoga

const toggleHover = () => {
  backdrop.classList.add("visible");
  hover.classList.add("visible");
};

const toggleDeleteHover = () => {
  backdrop.classList.add("visible");
  deleteHover.classList.add("visible");
};

const deleteNodeHandler = (id) => {
  backdrop.classList.remove("visible");
  deleteHover.classList.remove("visible");
  console.log("id deleted:", id);
  let i = 0;
  for (; i < movies.length; i++) {
    if (movies[i].id === id) break;
  }
  // delete form JS
  movies.splice(i, 1);
  // delete form HTML
  mainTag.querySelectorAll("li")[i].remove();
  if (movies.length === 0) mainTag.firstElementChild.style.display = "block";
};

const deleteHoverCancelButtonHandler = () =>{
  backdrop.classList.remove("visible");
  deleteHover.classList.remove("visible");
}

const deleteHoverHandler = (id) => {
  toggleDeleteHover();
  deleteHoverAddButton.replaceWith(deleteHoverAddButton.cloneNode(true));
  deleteHoverAddButton = deleteHover.querySelector(".btn.btn--danger");
  deleteHoverAddButton.addEventListener(
    "click",
    deleteNodeHandler.bind(null, id)
  );
  deleteHoverCancelButton.removeEventListener("click", deleteHoverCancelButtonHandler);
  deleteHoverCancelButton.addEventListener("click", deleteHoverCancelButtonHandler);
};

const displayMyMovies = (id, title, url, rating) => {
  if (movies.length > 0) {
    mainTag.firstElementChild.style.display = "none";
    const ul = mainTag.querySelector("ul");
    const li = document.createElement("li");
    li.className = "movie-element";
    li.innerHTML = `
  <div class=movie-element__image>
  <img src = ${url} alt="image alt">
  </div>
  <divclas==movie-element__info>
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
    li.addEventListener("click", deleteHoverHandler.bind(null, id));
    ul.append(li);
  } else {
    mainTag.firstElementChild.style.display = "block";
  }
};

const checkInput = () => {
  if (
    userInput[0].value === "" ||
    userInput[1].value === "" ||
    userInput[2].value === "" ||
    userInput[2].value < 1 ||
    userInput[2].value > 5
  )
    return false;
  else return true;
};

const clearInput = () => {
  //use for loop bro
  userInput[0].value = "";
  userInput[1].value = "";
  userInput[2].value = "";
};

const storeInput = () => {
  let movieObject = {};
  movieObject.id = Math.random();
  movieObject.title = userInput[0].value;
  movieObject.url = userInput[1].value;
  movieObject.rating = userInput[2].value;
  movies.push(movieObject);
  console.log(movies);
  displayMyMovies(
    movieObject.id,
    movieObject.title,
    movieObject.url,
    movieObject.rating
  );
};

hoverAddButton.addEventListener("click", () => {
  if (!checkInput()) alert("Invalid Input(s)");
  else {
    storeInput();
    clearInput();
    hover.classList.remove("visible");
    backdrop.classList.remove("visible");
  }
});

hoverCancelButton.addEventListener("click", () => {
  hover.classList.remove("visible");
  backdrop.classList.remove("visible");
  clearInput();
});

backdrop.addEventListener("click", () => {
  hover.classList.remove("visible");
  backdrop.classList.remove("visible");
  deleteHover.classList.remove("visible");
});

addMovieButton.addEventListener("click", () => {
  toggleHover();
});
