// Додавання
function add(a, b) {
    return a + b;
}

// Віднімання
function subtract(a, b) {
    return a - b;
}

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

// Піднесення до степеня
function power(a, b) {
    return Math.pow(a, b);
}

// Квадратний корінь
function sqrt(a) {
    if (a < 0) {
        throw new Error("Корінь з від'ємного числа!");
    }
    return Math.sqrt(a);
}
