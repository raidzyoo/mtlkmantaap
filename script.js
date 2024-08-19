function calculate() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    let result = '';
    for (let i = 0; i < num2; i++) {
        result += num1 + ' ';
    }
    document.getElementById('result').innerText = `Result: ${result.trim()}`;
}