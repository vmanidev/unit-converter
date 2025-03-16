import constants from "./constants.js";

class App {

    loadUnitListEle() {
        this.getUnitListData()
            .then(unitList => {
                unitList.forEach(unit => {
                    const unitEle = document.createElement('div');
                    const i = document.createElement('i');
                    const span = document.createElement('span');

                    unitEle.id = unit.id;
                    i.classList.add(...unit.icon.split(' '));
                    unitEle.classList.add('unit-thumb');
                    span.textContent = unit.name;

                    //appending unit item into unit list container
                    unitEle.append(i, span);
                    constants.ELEMENTS.unitList.appendChild(unitEle);
                })
            })
            .catch(error => this.showErrorBanner(error, constants.ELEMENTS.unitList));

    }

    loadUnitConverterEle(target) {
        const unitType = target.id ? target.id : target.parentElement.id;
        this.getMetricUnits()
            .then(metricUnits => {
                this.createUnitConverterEle(metricUnits[unitType]);
            })
            .catch(error => this.showErrorBanner(error, constants.ELEMENTS.unitConverter));
    }

    createUnitConverterEle(metricUnits) {
        constants.ELEMENTS.unitConverter.innerHTML = '';

        const input1 = this.createInputField();
        const input2 = this.createInputField();

        const i = document.createElement('i');
        i.classList.add('fa-solid', 'fa-right-left');

        const dropdownForInput1 = this.createDropdown(metricUnits);
        const dropdownForInput2 = this.createDropdown(metricUnits);

        constants.ELEMENTS.unitConverter.append(input1, dropdownForInput1, i, input2, dropdownForInput2);
    }

    createInputField() {
        const input = document.createElement('input');
        input.placeholder = 'Enter value to convert';
        return input;
    }

    createDropdown(metricUnits) {
        const dropdown = document.createElement('select');
        metricUnits.forEach(metricUnit => {
            const option = document.createElement('option');
            option.textContent = metricUnit.unit;
            dropdown.appendChild(option);
        });
        return dropdown;
    }

    async getUnitListData() {
        const response = await fetch(constants.URLS.unitList);
        const unitList = await response.json();
        return unitList;
    }

    async getMetricUnits() {
        const response = await fetch(constants.URLS.metricUnits);
        const metricUnits = await response.json();
        return metricUnits;
    }

    showHideUnitConverterList(show) {
        constants.ELEMENTS.unitList.style.display = show ? 'grid' : 'none';
        constants.ELEMENTS.unitConverter.style.display = show ? 'none' : 'grid';
        constants.ELEMENTS.homeBtn.style.display = show ? 'none' : 'block';
    }

    showErrorBanner(errorInfo, target) {
        target.innerHTML = '';
        const errorEle = document.createElement('pre');
        errorEle.classList.add('error');
        errorEle.textContent = errorInfo;
        target.appendChild(errorEle);
    }
}

export const app = new App();