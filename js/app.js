import constants from "./constants.js";

class App {

    elements = {
        loadUnitListEle() {
            app.getUnitListData()
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

        },

        loadUnitConverterEle(target) {
            const unitType = target.id ? target.id : target.parentElement.id;
            app.getMetricUnits()
                .then(metricUnits => {
                    this.createUnitConverterEle(metricUnits[unitType]);
                })
                .catch(error => this.showErrorBanner(error, constants.ELEMENTS.unitConverter));
        },

        createUnitConverterEle(metricUnits) {
            constants.ELEMENTS.unitConverter.innerHTML = '';

            const originalInput = this.createInputField('original-input');
            const convertInput = this.createInputField('convert-input');

            const i = document.createElement('i');
            i.classList.add('fa-solid', 'fa-right-left');
            i.id = 'convert-icon';

            const originalDropdown = this.createDropdown(metricUnits, 'original-dropdown');
            const convertDropdown = this.createDropdown(metricUnits, 'convert-dropdown');

            constants.ELEMENTS.unitConverter.append(originalInput, originalDropdown, convertInput, convertDropdown);
        },

        createInputField(id) {
            const input = document.createElement('input');
            input.placeholder = 'Enter value to convert';
            input.type = 'number';
            input.id = id;
            return input;
        },

        createDropdown(metricUnits, id) {
            const dropdown = document.createElement('select');
            dropdown.id = id;
            metricUnits.forEach(metricUnit => {
                const option = document.createElement('option');
                option.textContent = metricUnit.unit;
                option.value = metricUnit.symbol;
                dropdown.appendChild(option);
            });
            return dropdown;
        },

        showHideUnitConverterList(show) {
            constants.ELEMENTS.unitList.style.display = show ? 'grid' : 'none';
            constants.ELEMENTS.unitConverter.style.display = show ? 'none' : 'grid';
            constants.ELEMENTS.homeBtn.style.display = show ? 'none' : 'block';
        },

        showErrorBanner(errorInfo, target) {
            target.innerHTML = '';
            const errorEle = document.createElement('pre');
            errorEle.classList.add('error');
            errorEle.textContent = errorInfo;
            target.appendChild(errorEle);
        },

        getUnitConverterPageElements() {
            const convertDropdown = document.getElementById('convert-dropdown');
            const originalDropdown = document.getElementById('original-down');
            const originalInput = document.getElementById('original-input');
            const convertInput = document.getElementById('convert-input');
            return {
                convertDropdown, originalDropdown, originalInput, convertInput
            }
        }
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
}

export const app = new App();