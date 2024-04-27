function rollDice() {
    const numOfDice = parseInt(document.getElementById("numOfDice").value, 10);
    const diceResult = document.getElementById("diceResults");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];

    if (isNaN(numOfDice) || numOfDice <= 0 || numOfDice > 20) {
        alert("Please enter a valid number of dice (1-20).");
        return;
    }

    diceResult.textContent = '';
    diceImages.innerHTML = '';

    for(let i = 0; i < numOfDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);
    }

    diceResult.textContent = `dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}



