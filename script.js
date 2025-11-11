// Множення
function multiply(a, b) {
    return a * b;
}

// Ділення
function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділення на нуль!");
    }
    return a / b;
}