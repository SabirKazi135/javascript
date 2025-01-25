try {
  const dividend = Number(window.prompt("Enter a diviend: "));
  const divisor = window.prompt("Enter a divisor: ");
  if (divisor == 0) {
    throw new Error("you cant divide my zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("value must be an number");
  }
  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("you have rechaed end");
