const counterElement = document.getElementById("counter");
let count = 0;

// Note to self: "textContent" vs "innerHTML".
// The former prevents Cross-site scripting (XSS) attacks from running external script injection.
function increment() {
  ++count;
  counterElement.textContent = count;
}

function decrement() {
  --count;
  counterElement.textContent = count;
}

function reset() {
  count = 0;
  counterElement.textContent = count;
}