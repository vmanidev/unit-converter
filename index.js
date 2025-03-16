import { app } from "./js/app.js";
import constants from "./js/constants.js";
import { util } from "./js/util.js";

const init = () => {
    app.elements.loadUnitListEle();

    constants.ELEMENTS.app.addEventListener('click', e => handleClickEvent(e.target));
    constants.ELEMENTS.unitConverter.addEventListener('keyup', util.debounce(handleKeyupEvent, 500));

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

    function handleKeyupEvent(e) {
        if (e.target === app.elements.getUnitConverterPageElements().originalInput) {
            console.log(e);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => init());