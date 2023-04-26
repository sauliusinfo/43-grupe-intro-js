'use strict';

const appDOM = document.querySelector('.app');
const listDOM = document.querySelector('.list');

const minusDOM = appDOM.querySelector('.btn:first-child');
const plusDOM = appDOM.querySelector('.btn:nth-child(3)');
const resetDOM = appDOM.querySelector('.reset');
const screenDOM = appDOM.querySelector('.screen');

const eventHistory = [];
let sum = 0;

function padydinti() {
    ++sum;
    printEventHistory(1);
}

function sumazinti() {
    --sum;
    printEventHistory(-1);
}

function reset() {
    sum = 0;
    printEventHistory(0);
}

function printEventHistory(eventID) {
    eventHistory.push(eventID);
    let HTML = '';
    let tempSum = 0;

    for (const event of eventHistory) {
        switch (event) {
            case 1:
                tempSum++;
                HTML = `<p>Padydinta: +1 (${tempSum})</p>` + HTML;
                break;
            case -1:
                tempSum--;
                HTML = `<p>Sumazinta: -1 (${tempSum})</p>` + HTML;
                break;
            case 0:
                tempSum = 0;
                HTML = `<p>Nunulinta: 0 (${tempSum})</p>` + HTML;
                break;
        }
    }

    screenDOM.innerText = sum;
    listDOM.innerHTML = HTML;
}

plusDOM.addEventListener('click', padydinti);
minusDOM.addEventListener('click', sumazinti);
resetDOM.addEventListener('click', reset);