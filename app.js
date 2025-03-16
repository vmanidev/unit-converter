import constants from "./constants.js";

class App {

    loadUnitListEle() {
        this.getUnitListData()
            .then(units => {
                units.forEach(unit => {
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
            .catch(error => {
                const errorEle = document.createElement('pre');
                errorEle.classList.add('error');
                errorEle.textContent = error;
                constants.ELEMENTS.unitList.appendChild(errorEle);
            });

    }

    loadUnitConverterEle(type) { }

    async getUnitListData() {
        const response = await fetch(constants.URLS.unitList);
        const units = await response.json();
        return units;
    }

    showHideUnitConverterList(show) {
        constants.ELEMENTS.unitList.style.display = show ? 'grid' : 'none';
        constants.ELEMENTS.unitConverter.style.display = show ? 'none' : 'block';
        constants.ELEMENTS.homeBtn.style.display = show ? 'none' : 'block';
    }
}

export const app = new App();