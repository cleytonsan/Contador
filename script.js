const value = document.getElementById('value');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const resetButton = document.getElementById('reset');
var count = 0;

const updateValue = () => {
    value.innerHTML = count;
}

plusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 1;
        updateValue();
    }, 100)
});

minusButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 1;
        updateValue();
    }, 100)
});

resetButton.addEventListener('click', () => {
    count = 0;
    updateValue();
});
document.addEventListener('mouseup', () => clearInterval(intervalId))