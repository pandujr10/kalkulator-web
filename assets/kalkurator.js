const displayNumber = document.getElementById("displayNumber");
    let currentInput = "";
    let operator = "";
    let previousInput = "";

    // Fungsi untuk menambahkan angka ke tampilan
    function addToDisplay(value) {
        currentInput += value;
        displayNumber.textContent = currentInput;
    }

    // Fungsi untuk menambah operator ke tampilan
    function addOperator(value) {
        if (currentInput !== "") {
            operator = value;
            previousInput = currentInput;
            currentInput = "";
        }
    }

    // Fungsi untuk menghapus tampilan
    function clearDisplay() {
        currentInput = "";
        operator = "";
        previousInput = "";
        displayNumber.textContent = "0";
    }

    // Fungsi untuk menghitung hasil
    function calculate() {
        if (currentInput !== "" && previousInput !== "") {
            const num1 = parseFloat(previousInput);
            const num2 = parseFloat(currentInput);
            switch (operator) {
                case "+":
                    currentInput = (num1 + num2).toString();
                    break;
                case "-":
                    currentInput = (num1 - num2).toString();
                    break;
                case "*":
                    currentInput = (num1 * num2).toString();
                    break;
                case "/":
                    currentInput = (num1 / num2).toString();
                    break;
            }
            displayNumber.textContent = currentInput;
            operator = "";
            previousInput = "";
        }
    }

    // Menangani tombol-tombol
    const buttons = document.querySelectorAll(".button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (!isNaN(buttonText) || buttonText === ".") {
                addToDisplay(buttonText);
            } else if (buttonText === "+" || buttonText === "-" || buttonText === "*" || buttonText === "/") {
                addOperator(buttonText);
            } else if (buttonText === "=") {
                calculate();
            } else if (buttonText === "CE") {
                clearDisplay();
            }
        });
    });