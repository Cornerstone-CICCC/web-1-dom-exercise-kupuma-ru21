// YOUR CODE HERE
document.getElementById("btn1").addEventListener("click", function () {
  document.getElementById("output1").style.color = "red";
});

document.getElementById("btn2").addEventListener("click", function () {
  const span = document.createElement("span");
  span.textContent = "Hello word";
  document.getElementById("output2").appendChild(span);
});

document.getElementById("btn3").addEventListener("click", function () {
  document
    .querySelector("#output3 p.small-text")
    .classList.remove("small-text");
});

document.getElementById("btn4").addEventListener("click", function () {
  const paragraphs = document.querySelectorAll("#output4 p");
  paragraphs.forEach(function (paragraph) {
    paragraph.style.color = "red";
  });
});

document.getElementById("btn5").addEventListener("click", function () {
  const inputValue = document.getElementById("message").value;
  console.log(inputValue);
});
