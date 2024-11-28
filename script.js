var toTop = 0;
const ul1 = document.getElementById("ul-1");

const totalHeight = ul1.children.length * 100;

setInterval(() => {
  toTop = toTop - 100;
  ul1.style.top = toTop + "px";
  if (toTop <= -totalHeight) {
    toTop = 0;
  }
}, 1000);

var toTop2 = 0;
const ul2 = document.getElementById("ul-2");

const totalHeight2 = ul2.children.length * 70;

setInterval(() => {
  toTop2 = toTop2 - 100;
  ul2.style.top = toTop2 + "px";
  if (toTop2 <= -totalHeight2) {
    toTop2 = 0;
  }
}, 1000);

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const input3 = document.getElementById("input3");
const input4 = document.getElementById("input4");

function handleType(event) {
  const value = event.target.value; // Get the current value of the input
  input1.value = value;
  input2.value = value;
  input3.value = value;
  input4.value = value;
}

// Add event listeners to all inputs
input1.addEventListener("input", handleType);
input2.addEventListener("input", handleType);
input3.addEventListener("input", handleType);
input4.addEventListener("input", handleType);

const footer = document.getElementById("footer");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    footer.classList.remove("opacity-0");
  } else {
    footer.classList.add("opacity-0");
  }
});
