// Step 1 - selecting all the elements
var initialPrice = document.querySelector('#initial-price');
var stockQuantity = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

// Step 3 - Add Event Listener
submitBtn.addEventListener('click', submitHandler);

function submitHandler() {
    var ip = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}


// Step 2 - Function profit & loss
function calculateProfitAndLoss(initial, quantity, current) {
    if (initial > current) {
        // loss logic here
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;

        console.log(`Hey the loss is ${loss} and the percentage is ${lossPercentage}%`);
    } else if (current > initial) {
        // Profit Logic here
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit / initial) * 100;

        console.log(`Hey the profit is ${profit} and the percentage is ${profitPercentage}`);
    } else {
        // the rest of logic 
        console.log(`No pain no gain and no gain no pain`);
    }
}

