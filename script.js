function isValidBinary(num) {
    return /^[01]+$/.test(num);
}

function addBinary() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    // Validation
    if (!isValidBinary(a) || !isValidBinary(b)) {
        document.getElementById("result").innerText = "❌ Please enter valid binary numbers (only 0 and 1)";
        return;
    }

    let sum = (parseInt(a, 2) + parseInt(b, 2)).toString(2);

    document.getElementById("result").innerText = "✅ Result: " + sum;
}