const buttonCheck = document.getElementById("check-btn");
const inputEntry = document.getElementById("text-input");
const outputResult = document.getElementById("result");

const handleCheck = () => {
  if (inputEntry.value) {
    checkPalindrome();
  } else {
    alert("Please input a value");
  }
};

const checkPalindrome = () => {
  const str = inputEntry.value;
  let newStr = str.replace(/[^A-Z0-9]+/gi, "").toLowerCase();
  let result = newStr.split("").reverse().join("");
  if (inputEntry.value.length == 1) {
    outputResult.innerText = `${inputEntry.value} is a palindrome`;
  } else if (newStr === result) {
    outputResult.innerText = `${inputEntry.value} is a palindrome`;
  } else {
    outputResult.innerText = `${inputEntry.value} is not a palindrome`;
  }
};

buttonCheck.addEventListener("click", handleCheck);