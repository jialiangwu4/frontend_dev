// counter
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;


decreaseBtn.onclick = () => {
    count--;
    counterLabel.textContent = count;
}

increaseBtn.onclick = () => {
    count++;
    counterLabel.textContent = count;
}

resetBtn.onclick = () => {
    count = 0;
    counterLabel.textContent = count;
}