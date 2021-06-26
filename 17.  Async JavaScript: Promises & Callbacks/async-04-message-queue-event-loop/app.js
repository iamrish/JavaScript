const button = document.querySelector("button");
const output = document.querySelector("p");

const setTimer = (duration) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
  return promise;
};

const getPosition = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPosition()
    .then(
      // success funtion
      (posData) => {
      positionData = posData;
      return setTimer(1000);
    },
    // failiure function
    (err) => {
      console.log(err);
    }
    )
    .then(() => console.log(positionData));

  // setTimeout(() => {
  //   console.log("Timer done!");
  // }, 0);
  console.log("Getting position...");
}

button.addEventListener("click", trackUserHandler);

// let result = 0;

// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result);
