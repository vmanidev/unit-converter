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
        'm³': { 'mL³': 1000000000, 'L³': 1000, 'm³': 1 },
        //energy units
        J: { J: 1, kJ: 0.001, cal: 0.239, kcal: 0.000239, Wh: 0.0002778, kWh: 0.0000002778 },
        kJ: { J: 1000, kJ: 1, cal: 239, kcal: 0.239, Wh: 0.2778, kWh: 0.0002778 },
        cal: { J: 4.184, kJ: 0.004184, cal: 1, kcal: 0.001, Wh: 0, kWh: 0 },
        kcal: { J: 4184, kJ: 4.184, cal: 1000, kcal: 1, Wh: 0, kWh: 0 },
        Wh: { J: 3600, kJ: 3.6, cal: 0, kcal: 9, Wh: 1, kWh: 0.001 },
        kWh: { J: 3600000, kJ: 3600, cal: 0, kcal: 0, Wh: 1000, kWh: 1 },
        //power units
        W: { W: 1, kW: 0.001, MW: 0.000001, GW: 0.000000001 },
        kW: { W: 1000, kW: 1, MW: 0.001, GW: 0.000001 },
        MW: { W: 1000000, kW: 1000, MW: 1, GW: 0.001 },
        GW: { W: 1000000000, kW: 1000000, MW: 1000, GW: 1 }
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
        return value * (this.#conversionTable[originalUnit][convertUnit] || 1);
    }
}

export const util = new Util();