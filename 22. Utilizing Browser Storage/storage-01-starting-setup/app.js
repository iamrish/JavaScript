const storeButton = document.getElementById("store-btn");
const retrieveButton = document.getElementById("retrieve-btn");
const userID = "u123";

// Name storage dummt, version 1
const dbReq = indexedDB.open("StorageDummy", 1);

let db;

dbReq.onsuccess = function (event) {
  db = event.target.result;
};

dbReq.onupgradeneeded = function (event) {
  // The db
  db = event.target.result;

  // Something lke tables in databases.
  const objStore = db.createObjectStore("products", { keyPath: "id" });
  objStore.transaction.oncomplete = function (event) {
    //   The first part returns a connection. The scond part selects a single object store as
    // multiple names can be passed to the first part.
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1", // this is madatory
      title: "Some Product",
      price: 500,
      category: "Luxury",
    });
  };
};

dbReq.onerror = function (event) {
  console.log("ERROR!");
};

storeButton.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");
  productStore.add({
    id: "p2", // this is madatory
    title: "Some Other Product",
    price: 1500,
    category: "Super Luxury",
  });
});

retrieveButton.addEventListener("click", () => {
  const productStore = db
    .transaction("products", "readwrite")
    .objectStore("products");

  const request = productStore.get("p2");

  request.onsuccess = function () {
    console.log(request.result);
  };
});
