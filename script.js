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
  localStorage.setItem('answer', rgbCode);
}

function isCorrect(event) {
  const e = event.target;
  const answer = `rgb${localStorage.getItem('answer')}`;
  const answerText = document.querySelector('#answer');

  if (answer === e.style.backgroundColor) {
    answerText.innerText = 'Acertou!';
    setTimeout(() => alert('Parabéns!'), 500);
  } else {
    answerText.innerText = 'Errou! Tente novamente!';
  }
}

function createCircleBall(rgb) {
  const liBall = document.createElement('li');
  liBall.style.backgroundColor = `rgb${rgb}`;
  liBall.classList.add('ball');
  liBall.addEventListener('click', isCorrect);

  return liBall;
}

function setCircleBall() {
  const ballList = document.querySelector('#ball-list');
  const answer = localStorage.getItem('answer');
  const answerIndex = Math.floor(Math.random() * 6);
  const ballArray = new Array(6).fill(answer).map((ball, index) => {
    if (index === answerIndex) return ball;
    return randomRgb();
  });

  console.log(ballArray);
  ballArray.forEach((rgb) => {
    ballList.appendChild(createCircleBall(rgb));
  });
}

window.onload = () => {
  setRgbCode();
  setCircleBall();
};
