const addMovieButton = document.getElementById("add-movie-btn");
const title = document.getElementById("title");
const extraName = document.getElementById("extra-name");
const extraValue = document.getElementById("extra-value");
const searchButton = document.getElementById("search-btn");
const searchInput = document.getElementById("filter-title");
const movies = [];


const renderMovies = (movieObject) => {
  let ul = document.getElementById("movie-list");
  if (movies.length === 0) {
    ul.classList.remove("visible");
    return;
  }
  ul.classList.add("visible");
  li = document.createElement("li");
  li.textContent = movieObject.info.title;
  ul.append(li);
};
const renderFilteredMovies = (movieObject) => {
  let ul = document.getElementById("movie-list");
  ul.innerHTML = '';
  ul.classList.add("visible");
  li = document.createElement("li");
  li.textContent = movieObject.info.title;
  ul.append(li);
};

const clearInputs = () => {
  title.value = "";
  extraName.value = "";
  extraValue.value = "";
};

const addMovieHandler = () => {
  if (
    title.value.trim() === "" ||
    extraName.value.trim() === "" ||
    extraValue.value.trim() === ""
  ) {
    alert("Invalid Input");
    return;
  }
  const movieObject = {
    id: Math.random(),
    info: {
      title: title.value,
      [extraName]: extraValue,
    },
  };
  movies.push(movieObject);
  renderMovies(movieObject);
  clearInputs();
  console.log(movies);
};

const filterMovieHandler = () => {
  if (movies.length === 0) {
    alert("Please Enter some movies");
    return;
  }
  const filter = searchInput.value;
  let filteredMovies = movies.filter((curr) =>
    curr.info.title.includes(filter)
  );
  if (filteredMovies.length >0)
    filteredMovies.forEach(curr=>renderFilteredMovies(curr))
}


addMovieButton.addEventListener("click", addMovieHandler);
searchButton.addEventListener("click", filterMovieHandler);
