const URLS = {
    unitList: './model/unit_list.json',
    metricUnits: './model/metric_units.json'
}

const UNITS = ['length', 'weight', 'temperature', 'time', 'speed', 'area', 'volume', 'energy', 'power'];

const ELEMENTS = {
    app: document.getElementById('app'),
    unitList: document.getElementById('unit-converter-list'),
    unitConverter: document.getElementById('unit-converter-main-container'),
    homeBtn: document.getElementById('home-btn')
}

const constants = {
    UNITS: Object.freeze(UNITS),
    URLS: Object.freeze(URLS),
    ELEMENTS: Object.freeze(ELEMENTS)
}

export default Object.freeze(constants);