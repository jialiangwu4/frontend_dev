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
    let dice1Val = randomGen(MIN, MAX);
    let dice2Val = randomGen(MIN, MAX);
    let dice3Val = randomGen(MIN, MAX);

    dice1.innerHTML = `<img src="./img/${dice1Val}.png" alt="${dice1Val}" class="diceImg">`;
    dice2.innerHTML = `<img src="./img/${dice2Val}.png" alt="${dice2Val}" class="diceImg">`;
    dice3.innerHTML = `<img src="./img/${dice3Val}.png" alt="${dice3Val}" class="diceImg">`;
}

resetBtn.onclick = () => {
    dice1.textContent = '_';
    dice2.textContent = '_';
    dice3.textContent = '_';
}