function convertTemperature() {
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
      alert("Digite um valor válido para Celsius");
      return;
    }
    
    var fahrenheit = celsius * 9/5 + 32;
    var kelvin = celsius + 273.15;
    
    document.getElementById("result").innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2) + "°F<br>"
      + "Kelvin: " + kelvin.toFixed(2) + "K";
    
    changeColorByTemperature(celsius);
  }
  
  function changeColorByTemperature(temperature) {
    var body = document.body;
    
    if (temperature >= 30) {
      body.style.backgroundColor = "red";
    } else if (temperature >= 20) {
      body.style.backgroundColor = "yellow";
    } else {
      body.style.backgroundColor = "blue";
    }
}



  