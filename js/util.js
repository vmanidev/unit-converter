class Util {

    //conversion factor table
    #conversionTable = {
        //length units
        mm: { mm: 1, cm: 0.1, m: 0.001, km: 0.000001 },
        cm: { mm: 10, cm: 1, m: 0.01, km: 0.00001 },
        m: { mm: 1000, cm: 100, m: 1, km: 0.001 },
        km: { mm: 1000000, cm: 100000, m: 1000, km: 1 }
    }

    debounce(func, delay) {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        }
    }

    unitConversionCalc(value, originalUnit, convertUnit) {
        return value * (this.#conversionTable[originalUnit][convertUnit] || 1);
    }
}

export const util = new Util();