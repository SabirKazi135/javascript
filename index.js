function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("You walk the dog");
    }, 1500);
  });
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

walkDog(() => {
  cleanKitchen(() => {
    takeOutTrash(() => console.log("You finish all the chores"));
  });
});
