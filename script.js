//Open tabs

function UnitConverters(uConverter) {
    var i;
    var x = document.getElementsByClassName("unitName");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(uConverter).style.display = "block";
  }
  
  /*    Length Converter */
  function lengthConverter(src, valNumLen) {
    valNumLen = parseFloat(valNumLen);
    var ipFeet = document.querySelector("#ipFeet");
    var ipMeters = document.querySelector("#ipMeters");
    var ipInches = document.querySelector("#ipInches");
    var ipKilometers = document.querySelector("#ipKilometers");
  
    if (src == "ipFeet") {
      ipMeters.value = (valNumLen / 3.2808).toFixed(2);
      ipInches.value = (valNumLen * 12).toFixed(2);
      ipKilometers.value = (valNumLen / 3280.8).toFixed(5);
    }
    if (src == "ipMeters") {
      ipFeet.value = (valNumLen * 3.2808).toFixed(2);
      ipInches.value = (valNumLen * 39.370).toFixed(2);
      ipKilometers.value = (valNumLen / 1000).toFixed(5);
    }
    if (src == "ipInches") {
      ipFeet.value = (valNumLen * 0.083333).toFixed(3);
      ipMeters.value = (valNumLen / 39.370).toFixed(3);
      ipKilometers.value = (valNumLen / 39370).toFixed(6);
    }
    if (src == "ipKilometers") {
      ipFeet.value = (valNumLen * 3280.8).toFixed();
      ipMeters.value = (valNumLen * 1000).toFixed();
      ipInches.value = (valNumLen * 39370).toFixed();
    }
  }
  
  function clearLength() {
    document.querySelector("#ipFeet").value = "";
    document.querySelector("#ipMeters").value = "";
    document.querySelector("#ipInches").value = "";
    document.querySelector("#ipKilometers").value = "";
  }
  
  
  /*  Speed Converter */
  
  function speedConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var ipMPH = document.querySelector("#ipMPH");
    var ipKPH = document.querySelector("#ipKPH");
    if (source == "ipMPH") {
      ipKPH.value = (valNum * 1.609344).toFixed(2);
    }
    if (source == "ipKPH") {
      ipMPH.value = (valNum / 1.609344).toFixed(2);
    }
  }
  
  function clearSpeed() {
    document.querySelector("#ipMPH").value = "";
    document.querySelector("#ipKPH").value = "";
  }
  /* Weight Converter*/
  function weightConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var ipPounds = document.querySelector("#ipPounds");
    var ipKilograms = document.querySelector("#ipKilograms");
    var ipOunces = document.querySelector("#ipOunces");
    var ipGrams = document.querySelector("#ipGrams");
    if (source == "ipPounds") {
      ipKilograms.value = (valNum / 2.2046).toFixed(2);
      ipOunces.value = (valNum * 16).toFixed(2);
      ipGrams.value = (valNum / 0.0022046).toFixed();
    }
    if (source == "ipKilograms") {
      ipPounds.value = (valNum * 2.2046).toFixed(2);
      ipOunces.value = (valNum * 35.274).toFixed(2);
      ipGrams.value = (valNum * 1000).toFixed();
      inputStones.value = (valNum * 0.1574).toFixed(3);
    }
    if (source == "ipOunces") {
      ipPounds.value = (valNum * 0.062500).toFixed(4);
      ipKilograms.value = (valNum / 35.274).toFixed(4);
      ipGrams.value = (valNum / 0.035274).toFixed(1);
  
    }
    if (source == "ipGrams") {
      ipPounds.value = (valNum * 0.0022046).toFixed(4);
      ipKilograms.value = (valNum / 1000).toFixed(4);
      ipOunces.value = (valNum * 0.035274).toFixed(3);
    }
  }
  
  function clearWeight() {
    document.querySelector("#ipPounds").value = "";
    document.querySelector("#ipKilograms").value = "";
    document.querySelector("#ipOunces").value = "";
    document.querySelector("#ipGrams").value = "";
  }
  /* Temperature  Converter*/
  
  function temperatureConverter(source, valNum) {
    valNum = parseFloat(valNum);
    var ipFahrenheit = document.querySelector("#ipFahrenheit");
    var ipCelsius = document.querySelector("#ipCelsius");
    var ipKelvin = document.querySelector("#ipKelvin");
    if (source == "ipFahrenheit") {
      ipCelsius.value = ((valNum - 32) / 1.8).toFixed(2);
      ipKelvin.value = (((valNum - 32) / 1.8) + 273.15).toFixed(2);
    }
    if (source == "ipCelsius") {
      ipFahrenheit.value = ((valNum * 1.8) + 32).toFixed(2);
      ipKelvin.value = ((valNum) + 273.15).toFixed(2);
    }
    if (source == "ipKelvin") {
      ipFahrenheit.value = (((valNum - 273.15) * 1.8) + 32).toFixed(2);
      ipCelsius.value = ((valNum) - 273.15).toFixed(2);
    }
  }
  
  function clearTemperature() {
    document.querySelector("#ipFahrenheit").value = "";
    document.querySelector("#ipCelsius").value = "";
    document.querySelector("#ipKelvin").value = "";
  }
  