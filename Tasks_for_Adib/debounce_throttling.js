function debounce(fn, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), wait);
  };
}

function throttle(fn, wait) {
  let last = 0;
  return function (...args) {
    const now = Date.now();
    if (now - last >= wait) {
      last = now;
      fn.apply(this, args);
    }
  };
}

const logInput = debounce((msg) => {
  console.log("Debounced input:", msg);
}, 500);

console.log("Simulating typing...");
logInput("h");
logInput("he");
logInput("hel");
setTimeout(() => logInput("hello"), 600);

const logScroll = throttle(() => {
  console.log("Throttled scroll:", new Date().toLocaleTimeString());
}, 1000);

console.log("Simulating scroll events...");
let count = 0;
const interval = setInterval(() => {
  logScroll();
  count++;
  if (count > 10) clearInterval(interval);
}, 200);