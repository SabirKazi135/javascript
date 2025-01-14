function fun1(callback) {
  setTimeout(() => {
    console.log("task0");
    callback();
  }, 3000);
}

function fun2() {
  console.log("task1");
  console.log("task2");
  console.log("task3");
}

fun1(fun2);
