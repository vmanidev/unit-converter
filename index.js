import { app } from "./app.js";
import constants from "./constants.js";

const init = () => {
    app.elements.loadUnitListEle();

    constants.ELEMENTS.app.addEventListener('click', e => handleClickEvent(e.target));

    const handleClickEvent = target => {
        if (target === constants.ELEMENTS.homeBtn || target.parentElement.id === constants.ELEMENTS.homeBtn.id) {
            app.elements.showHideUnitConverterList(true);
        } else if (constants.UNITS.some(id => id === target.id || id === target.parentElement.id)) {
            app.elements.showHideUnitConverterList(false);
            app.elements.loadUnitConverterEle(target);
        }

        if (target.id === 'convert-icon') {
            target.classList.toggle('spin');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => init());