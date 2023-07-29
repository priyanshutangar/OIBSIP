const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    console.log(numberTemp);
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celtofah = (cel) => {
        let Fahrenheit = Math.round((cel * 9/5)+32);
        return Fahrenheit;
    }

    const fahtocel = (cel) => {
        let Celsius = Math.round((cel - 32) * 5/9);
        return Celsius;
    }

    let result;

    if(valueTemp == 'cel'){
        result = celtofah(numberTemp);
        document.getElementById('results').innerHTML = `${result}&#176;Farenheit`;
    }
    else{
        result = fahtocel(numberTemp);
        document.getElementById('results').innerHTML = `${result}&#176;Celsius`;
    }
}
