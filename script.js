document.getElementById('quadraticForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    const resultBox = document.getElementById('result');
    resultBox.innerHTML = '';
    
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultBox.innerHTML = 'Ошибка: введите числа!';
        resultBox.classList.add('show');
        return;
    }
    
    if (a === 0) {
        resultBox.innerHTML = 'Это не квадратное уравнение (a = 0)!';
        resultBox.classList.add('show');
        return;
    }
    
    const discriminant = b * b - 4 * a * c;
    let resultText;
    
    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        resultText = `Корни уравнения:<br><strong>x₁ = ${x1.toFixed(4)}</strong>, <strong>x₂ = ${x2.toFixed(4)}</strong>`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        resultText = `Один корень:<br><strong>x = ${x.toFixed(4)}</strong>`;
    } else {
        resultText = 'Действительных корней нет 😕';
    }
    
    resultBox.innerHTML = resultText;
    resultBox.classList.add('show');
});