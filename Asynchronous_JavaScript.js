

const dependent = true;

function simple(callback) {
  console.log("Step 1: Start");

  if (dependent) callback();
}

function delay(callback) {
  setTimeout(function () {
    console.log("Step 2: Loading...");
    callback();
  }, 2000);
}

function delayTime() {
  setTimeout(function () {
    console.log("Step 3: Done!");
  }, 1000);
}

simple(function () {
  delay(delayTime);
});
