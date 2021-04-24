function randomRgb() {
  const randomNumber = () => Math.floor(Math.random() * 256);
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();

  return `(${red}, ${green}, ${blue})`;
}

function setRgbCode() {
  const rgbColor = document.querySelector('#rgb-color');
  const rgbCode = randomRgb();
  rgbColor.innerText = rgbCode;
}

function setCircleBall() {
  const liBall = document.createElement('li');
  liBall.classList.add('ball');
}

window.onload = () => {
  setRgbCode();
};
