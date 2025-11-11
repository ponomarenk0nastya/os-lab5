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