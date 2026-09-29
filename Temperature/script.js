
const temperature = document.getElementById("temperature");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const button = document.getElementById("convertBtn");
const result = document.getElementById("result");

button.addEventListener("click", function () {

    let temp = Number(temperature.value);

    if (temperature.value === "") {
        result.textContent = "Enter a value";
        return;
    }

    let converted;

    // Celsius to Fahrenheit
    if (fromUnit.value === "celsius" && toUnit.value === "fahrenheit") {
        converted = (temp * 9 / 5) + 32;
    }

    // Fahrenheit to Celsius
    else if (fromUnit.value === "fahrenheit" && toUnit.value === "celsius") {
        converted = (temp - 32) * 5 / 9;
    }

    // Celsius to Kelvin
    else if (fromUnit.value === "celsius" && toUnit.value === "kelvin") {
        converted = temp + 273.15;
    }

    // Same unit
    else if (fromUnit.value === toUnit.value) {
        converted = temp;
    }

    // Fahrenheit to Kelvin
    else if (fromUnit.value === "fahrenheit" && toUnit.value === "kelvin") {
        converted = (temp - 32) * 5 / 9 + 273.15;
    }

    // Kelvin to Celsius
    else if (fromUnit.value === "kelvin" && toUnit.value === "celsius") {
        converted = temp - 273.15;
    }

    // Kelvin to Fahrenheit
    else if (fromUnit.value === "kelvin" && toUnit.value === "fahrenheit") {
        converted = (temp - 273.15) * 9 / 5 + 32;
    }

    result.textContent = converted.toFixed(2);
});

