const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const display = document.getElementById('display');
const inputAmount = document.getElementById('amount');
const finalAmountDisplay = document.getElementById('finalAmount');
const valorParcela = document.getElementById('parcela');

let parcela = 1;
const maxParcelas = 12;
const rates = [
    { displayRate: 3.15, applyRate: 3.26 },
    { displayRate: 5.39, applyRate: 5.70 },
    { displayRate: 6.12, applyRate: 6.52 },
    { displayRate: 6.85, applyRate: 7.35 },
    { displayRate: 7.57, applyRate: 8.19 },
    { displayRate: 8.28, applyRate: 9.03 },
    { displayRate: 8.99, applyRate: 9.88 },
    { displayRate: 9.69, applyRate: 10.73 },
    { displayRate: 10.38, applyRate: 11.58 },
    { displayRate: 11.06, applyRate: 12.44 },
    { displayRate: 11.74, applyRate: 13.30 },
    { displayRate: 12.40, applyRate: 14.16 }
];

function updateDisplay() {
    const rate = rates[parcela - 1];
    display.textContent = `${parcela}x (credito ${rate.displayRate}%)`;

    
    updateFinalAmount();
}

function updateFinalAmount() {
    const amount = parseFloat(inputAmount.value) || 0;
    const interestRate = rates[parcela - 1].applyRate / 100;

    // Calculo do valor final com juros simples
    const finalAmount = amount * (1 + interestRate);

    finalAmountDisplay.textContent = `R$ ${finalAmount.toFixed(2)}`;
   
    const v1 = finalAmount / parcela;
    console.log(v1)
    valorParcela.textContent = `R$ ${v1.toFixed(2)}`;
   
}

increaseButton.addEventListener('click', () => {
    if (parcela < maxParcelas) {
        parcela++;
        updateDisplay();
        
    }
});

decreaseButton.addEventListener('click', () => {
    if (parcela > 1) {
        parcela--;
        updateDisplay();
    }
});


inputAmount.addEventListener('input', updateFinalAmount);

// Inicializa a exibição
updateDisplay();
