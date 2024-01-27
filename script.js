let answer = document.getElementById("answer");

let addNumbers = () => {
  let num1 = parseFloat(document.getElementById("add-input-1").value);
  let num2 = parseFloat(document.getElementById("add-input-2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter a valid number");
    return;
  }

  let sum = num1 + num2;
  console.log(sum);

  answer.innerText = sum;
};

let multiplyNumbers = () => {
  let num1 = parseFloat(document.getElementById("mul-input-1").value);
  let num2 = parseFloat(document.getElementById("mul-input-2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers");
    return;
  }

  let product = num1 * num2;
  console.log(product);

  answer.innerText = product;
};
