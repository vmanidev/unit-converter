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
                console.log(metricUnits[unitType])
            })
            .catch(error => this.showErrorBanner(error, constants.ELEMENTS.unitConverter));
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
        constants.ELEMENTS.unitConverter.style.display = show ? 'none' : 'block';
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