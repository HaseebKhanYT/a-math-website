let answer = document.getElementById("answer");

let calculate = (choice) => {
  let num1 = parseFloat(document.getElementById("input-1").value);
  let num2 = parseFloat(document.getElementById("input-2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a valid number");
    return;
  }

  let sum = num1 + num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  let difference = num1 - num2;

  if (choice == 0) {
    answer.innerText = sum;
  } else if (choice == 1) {
    answer.innerText = product;
  } else if (choice == 2) {
    answer.innerText = quotient;
  } else if (choice == 3) {
    answer.innerText = difference;
  }
};
