import constants from "./constants.js";

class App {

    loadUnitListEle() {
        const unitListEle = document.getElementById('unit-converter-list');
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
                    unitListEle.appendChild(unitEle);
                })
            })
            .catch(error => console.log(error));

    }

    async getUnitListData() {
        const response = await fetch(constants.URLS.unitList);
        const units = await response.json();
        return units;
    }
}

export const app = new App();