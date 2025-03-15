const URLS = {
    unitList: './model/unit_list.json'
}

const UNITS = {
    length: 'length',
    weight: 'weight',
    temperature: 'temperature',
    time: 'time',
    speed: 'speed',
    area: 'area',
    volume: 'volume',
    energy: 'energy',
    power: 'power'
}

const constants = {
    UNITS: Object.freeze(UNITS),
    URLS: Object.freeze(URLS)
}

export default Object.freeze(constants);