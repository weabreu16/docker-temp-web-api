const express = require('express');
const { Temperature, TemperatureScale } = require('kata-temperatures');

const router = express.Router();

const stringToScale = (value) => {
    if (value === "c") 
        return TemperatureScale.Celsius;
    if (value === "f")
        return TemperatureScale.Fahrenheit;
    if (value === "k")
        return TemperatureScale.Kelvin;
    
    throw Error(`Invalid scale ${value}`);
}

router.get('/temps/api', (req, res) => {

    const q = req.query.q;

    if (!q) return res.status( 400 ).send("Invalid query format");

    const queryValues = q.split(" ");

    if (queryValues.length != 4)
        return res.status( 400 ).send("Invalid query format");

    const num = +(queryValues[0]);

    if (isNaN( num ) || queryValues[2] !== "to")
        return res.status( 400 ).send("Invalid query format");

    let result = 0;

    try {
        const scale = stringToScale(queryValues[1]);
        const toScale = stringToScale(queryValues[3]);
        const temp = new Temperature(num, scale);

        if (toScale === TemperatureScale.Celsius)
            result = temp.ToCelsius().value;
        else if (toScale === TemperatureScale.Fahrenheit)
            result = temp.ToFahrenheit().value;
        else 
            result = temp.ToKelvin().value;
    } catch (error) {
        return res.status( 400 ).send( error.message );
    }

    res.status( 200 ).send({ result });
});

module.exports = router;