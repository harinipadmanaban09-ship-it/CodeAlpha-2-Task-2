const screen = document.getElementById("screen");

function append(value) {
  screen.value += value;
}

function clearAll() {
  screen.value = "";
}

function deleteLast() {
  screen.value = screen.value.slice(0, -1);
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
  }
}

/* Keyboard Support */
document.addEventListener("keydown", (e) => {
  if ("0123456789+-*/().".includes(e.key)) {
    append(e.key);
  }
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearAll();
});

