import { app } from "./app.js";
import constants from "./constants.js";

const init = () => {
    app.loadUnitListEle();

    constants.ELEMENTS.app.addEventListener('click', e => handleClickEvent(e.target));

    const handleClickEvent = target => {
        if (target === constants.ELEMENTS.homeBtn || target.parentElement.id === constants.ELEMENTS.homeBtn.id) {
            app.showHideUnitConverterList(true);
        } else if (constants.UNITS.some(id => id === target.id || id === target.parentElement.id)) {
            app.showHideUnitConverterList(false);
            app.loadUnitConverterEle(target);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => init());