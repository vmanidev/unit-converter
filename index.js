import constants from "./constants.js";

const init = () => {

    document.getElementById('app').addEventListener('click', e => openUnitConverter(e.target));

    const openUnitConverter = target => {
        if (target.id === constants.UNITS.length || target.parentElement.id === constants.UNITS.length) {
            document.getElementById('unit-converter-main-container').style.display = 'block';
            document.getElementById('unit-converter-list').style.display = 'none';
            document.getElementById('home-btn').style.display = 'block';
        } else if (target.id === 'home-btn' || target.parentElement.id === 'home-btn') {
            document.getElementById('unit-converter-list').style.display = 'grid';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => init());