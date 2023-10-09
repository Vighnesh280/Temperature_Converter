function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const fromUnitSelect = document.getElementById("fromUnit");
    const resultText = document.getElementById("resultText");

    const temperature = parseFloat(temperatureInput.value);
    const fromUnit = fromUnitSelect.value;
    let result = 0;

    if (fromUnit === "celsius") {
        // Celsius to Fahrenheit
        result = (temperature * 9/5) + 32;
    } else if (fromUnit === "kelvin") {
        // Kelvin to Fahrenheit
        result = (temperature - 273.15) * 9/5 + 32;
    } else if (fromUnit === "fahrenheit") {
        // Fahrenheit to Celsius
        result = (temperature - 32) * 5/9;
    }

    resultText.textContent = `Result: ${result.toFixed(2)} °F`;
}
