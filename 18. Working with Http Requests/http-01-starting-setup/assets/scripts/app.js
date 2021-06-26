const ul = document.querySelector(".posts");
const template = document.querySelector("template");

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //   const xhr = new XMLHttpRequest();
  //   xhr.open(method, url);

  //   xhr.responseType = "json";
  //   xhr.onload = function () {
  //     resolve(xhr.response);
  //   };
  //   xhr.send(JSON.stringify(data));
  // });

  // return promise;

  // fetch() returns a Promise
  return fetch(url, {
    method: method, // "GET" by default
    body: JSON.stringify(data),
  }).then((response) => response.json());
}
async function fetchPosts() {
  const responseData = await sendHttpRequest(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );
  // console.log(responseData);
  // console.log(listOfPosts);
  for (const post of responseData) {
    // console.log(post);
    const li = document.importNode(template.content, true);
    li.querySelector("h2").textContent = post.title.toUpperCase();
    li.querySelector("p").textContent = post.body;
    ul.append(li);
  }
}

const createPost = () => {
  const post = {
    title: "Dummy",
    body: "This a dummy description",
    userId: Math.random(),
  };
  sendHttpRequest("POST", "https://jsonplaceholder.typicode.com/posts", post);
};

fetchPosts();
createPost();
