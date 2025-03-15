import { app } from "./app.js";

const init = () => {
    app.loadUnitListEle();
}

document.addEventListener('DOMContentLoaded', () => init());