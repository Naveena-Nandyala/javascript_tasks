function changeImage() {
  let img = document.getElementById("image");
  img.src = "motivate.jpg";
  img.alt = "Motivational Quote";
}

let btn = document.getElementById("button");
btn.addEventListener("click", function () {
  let paragraph = document.getElementById("content");
  paragraph.textContent =
    "JavaScript is a versatile, dynamically typed programming language used for interactive web applications, supporting both client-side and server-side development, and integrating seamlessly with HTML, CSS, and a rich standard library.";
});

function toggleClass() {
  let textElement = document.getElementById("text");
  textElement.classList.toggle("highlight");
}
document.getElementById("toggleButton").addEventListener("click", toggleClass);

function toggleVisibility() {
  let element = document.getElementById("ele");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("toggle").addEventListener("click", toggleVisibility);
