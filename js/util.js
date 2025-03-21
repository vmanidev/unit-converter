class Util {

    //conversion factor table
    #conversionTable = {
        //length units
        mm: { mm: 1, cm: 0.1, m: 0.001, km: 0.000001 },
        cm: { mm: 10, cm: 1, m: 0.01, km: 0.00001 },
        m: { mm: 1000, cm: 100, m: 1, km: 0.001 },
        km: { mm: 1000000, cm: 100000, m: 1000, km: 1 },
        //weight units
        mg: { mg: 1, g: 0.001, kg: 0.000001, t: 0.000000001 },
        g: { mg: 1000, g: 1, kg: 0.001, t: 0.000001 },
        kg: { mg: 1000000, g: 1000, kg: 1, t: 0.001 },
        t: { mg: 1000000000, g: 1000000, kg: 1000, t: 1 },
        //time units
        ms: { ms: 1, s: 0.001, min: 0.00001667, h: 0.0000002778 },
        s: { ms: 1000, s: 1, min: 0.01667, h: 0.0002778 },
        min: { ms: 60000, s: 60, min: 1, h: 0.01667 },
        h: { ms: 3600000, s: 3600, min: 60, h: 1 },
        //speed units
        'm/s': { 'km/h': 0.2778 },
        'km/h': { 'm/s': 3.6 },
        //area units
        'm²': { 'km²': 1000000 },
        'km²': { 'm²': 0.000000001 },
        //volume units 
        'mL³': { 'mL³': 1, 'L³': 0.000001, 'm³': 0.000000001 },
        'L³': { 'mL³': 1000000, 'L³': 1, 'm³': 0.001 },
        'm³': { 'mL³': 1000000000, 'L³': 1000, 'm³': 1 }
    }

    debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        }
    }

    unitConversionCalc(value, originalUnit, convertUnit) {
        //condition for temperature unit conversion
        const temperatureUnits = ['°C', '°F'];
        if (temperatureUnits.includes(originalUnit) || temperatureUnits.includes(convertUnit)) {
            if (originalUnit === '°C' && convertUnit === '°F') {
                return (value * 9 / 5) + 32;
            }
            else if (originalUnit === '°F' && convertUnit === '°C') {
                return (value - 32) * 5 / 9;
            } else {
                return value;
            }
        }
        return (value * (this.#conversionTable[originalUnit][convertUnit] || 1)).toFixed(2);
    }
}

export const util = new Util();