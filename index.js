import { app } from "./js/app.js";
import constants from "./js/constants.js";
import { util } from "./js/util.js";

const init = () => {
    app.elements.loadUnitListEle();

    //event listeners
    constants.ELEMENTS.app.addEventListener('click', e => handleClickEvent(e.target));
    constants.ELEMENTS.unitConverter.addEventListener('keyup', util.debounce(handleKeyupEvent, 500));
    constants.ELEMENTS.unitConverter.addEventListener('change', e => handleChangeEvent(e.target));

    const handleClickEvent = target => {
        if (target === constants.ELEMENTS.homeBtn || target.parentElement.id === constants.ELEMENTS.homeBtn.id) {
            app.elements.showHideUnitConverterList(true);
        } else if (constants.UNITS.some(id => id === target.id || id === target.parentElement.id)) {
            app.elements.showHideUnitConverterList(false);
            app.elements.loadUnitConverterEle(target);
        }
    }

    function handleKeyupEvent(e) {
        const elements = app.elements.getUnitConverterPageElements();
        if (e.target === elements.originalInput) {
            elements.convertInput.value = util.unitConversionCalc(elements.originalInput.value, elements.originalDropdown.value, elements.convertDropdown.value);
        } else if (e.target === elements.convertInput) {
            elements.originalInput.value = util.unitConversionCalc(elements.convertInput.value, elements.convertDropdown.value, elements.originalDropdown.value);
        }
    }

    const handleChangeEvent = target => {
        const elements = app.elements.getUnitConverterPageElements();
        if (target === elements.originalDropdown) {
            elements.originalInput.value = util.unitConversionCalc(elements.convertInput.value, elements.convertDropdown.value, elements.originalDropdown.value);
        } else if (target === elements.convertDropdown) {
            elements.convertInput.value = util.unitConversionCalc(elements.originalInput.value, elements.originalDropdown.value, elements.convertDropdown.value);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => init());