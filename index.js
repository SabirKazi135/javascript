try {
  const dividend = window.prompt("Enter a diviend: ");
  const divisor = window.prompt("Enter a divisor: ");

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("you have rechaed end");
