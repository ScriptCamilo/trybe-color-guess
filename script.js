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

function createCircleBall(rgb) {
  const liBall = document.createElement('li');
  liBall.style.backgroundColor = `rgb${rgb}`;
  liBall.classList.add('ball');

  return liBall;
}

function setCircleBall() {
  const ballList = document.querySelector('#ball-list');
  const ballArray = new Array(6).fill(0).map(() => randomRgb());

  ballArray.forEach((rgb) => {
    ballList.appendChild(createCircleBall(rgb));
  });
}

window.onload = () => {
  setRgbCode();
  setCircleBall();
};
