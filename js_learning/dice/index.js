// Roll three dice

const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");

const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

// a die has 1 to 6 
const MIN = 1;
const MAX = 6;

const randomGen = (MIN, MAX) => Math.floor(Math.random() * MAX) + MIN;

// roll three dice at a time 
rollBtn.onclick = () => {
    dice1.textContent = randomGen(MIN, MAX);
    dice2.textContent = randomGen(MIN, MAX);
    dice3.textContent = randomGen(MIN, MAX);
}

resetBtn.onclick = () => {
    dice1.textContent = '_';
    dice2.textContent = '_';
    dice3.textContent = '_';
}