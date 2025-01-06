function evenORadd(num1, operand, num2) {
  if (operand === "+") {
    return console.log(num1 + num2);
  } else if (operand == "-") {
    return console.log(num1 - num2);
  } else if (operand == "*") {
    return console.log(num1 * num2);
  } else if (operand == "/") return console.log(num1 / num2);
}

evenORadd(3, "+", 6); // 결과값 9
evenORadd(11, "-", 6); // 결과값 5
evenORadd(6, "*", 3); // 결과값 18
evenORadd(15, "/", 3); // 결과값 5
