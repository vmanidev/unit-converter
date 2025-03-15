const init = () => {

    document.getElementById('app').addEventListener('click', e => openUnitConverter(e.target));

    const openUnitConverter = target => {
        if (target.id === UNIT_CONVERTERS.length || target.parentElement.id === UNIT_CONVERTERS.length) {
            document.getElementById('unit-converter-main-container').style.display = 'block';
            document.getElementById('unit-converter-list').style.display = 'none';
            document.getElementById('home-btn').style.display = 'block';
        } else if (target.id === 'home-btn' || target.parentElement.id === 'home-btn') {
            document.getElementById('unit-converter-list').style.display = 'grid';
        }
    }
}

const UNIT_CONVERTERS = {
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

document.addEventListener('DOMContentLoaded', () => init());