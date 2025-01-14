function wallDog(callback) {
  setTimeout(() => {
    console.log("You walk the dog");
    callback();
  }, 1500);
}

function cleanKitchen(callback) {
  setTimeout(() => {
    console.log("You clean the kitchen");
    callback();
  }, 2500);
}
function takeOutTrash(callback) {
  setTimeout(() => {
    console.log("You take out trash");
    callback();
  }, 500);
}
