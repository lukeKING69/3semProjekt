//import DBFunctions from '../../Storage/DBFunctions.js';
//const DBFunctions = require('../../Storage/DBFunctions.js');

let table = document.getElementById("tableBody");
//måned
let months = ['january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',]
//let monthData = [[], [],[], [],[], [],[], [],[], [],[], [],]
const localDate = new Date();
let currentMonth = months[localDate.getMonth()];
let selectedMonth = currentMonth;

//afhentningsfunktion
//- array med alle journeys for hver måned ?
//- indsættelse af faktiske journeys
//- tilvalg skal hentes ind

//TR og TD

for (let i = 1; i <= 31; i++) {
    //Click current month
    const rb = document.getElementById('choice-' + currentMonth + '');
    rb.checked = true;

    //Laver objekter
    let trElement = document.createElement('tr');
    let tdElementDato = document.createElement('td');
    let tdElementRejse = document.createElement('td');
    let tdElementKunde = document.createElement('td');
    let tdElementTilvalg = document.createElement('td');


    //Tilfører værdier til elementer
    tdElementDato.id = i;
    tdElementDato.textContent = i + '. ' + selectedMonth;
    tdElementRejse.id = i + ': Rejse'
    tdElementRejse.textContent = '-'
    tdElementKunde.id = i + ': Kunde'
    tdElementKunde.textContent = '-'
    tdElementTilvalg.id = i + ': Tilvalg';
    tdElementTilvalg.textContent = '-';

    //appender elementer til tabel
    trElement.appendChild(tdElementDato);
    trElement.appendChild(tdElementRejse);
    trElement.appendChild(tdElementKunde);
    trElement.appendChild(tdElementTilvalg);
    table.appendChild(trElement);
}

//const btn = document.getElementById('btn');
let rbs = document.querySelectorAll('input[name="choice"]');
for (const rb of rbs) {
    rb.onclick = () => {
        updateMonth();
    };
}


function updateMonth() {
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            selectedMonth = selectedValue;
            break;
        }
    }

    for (let i = 1; i <= 31; i++) {
        let tdElementDato = document.getElementById(i);
        tdElementDato.textContent = i + '. ' + selectedMonth;
    }
}


//tilføj events
function addEvent(startDate, endDate, eventName/*skal ændres til selve journey*/, kunde) {
    
    for (let i = startDate; i <= endDate; i++) {
        let tdElementRejse = document.getElementById(i + ': Rejse');
        let tdElementKunde = document.getElementById(i + ': Kunde')

        if (tdElementRejse) {
            // Opret et p-element for eventet og tilføj det til cellen
            let pElementRejse = document.createElement('p');
            pElementRejse.textContent = eventName + ' - ';
            tdElementRejse.appendChild(pElementRejse);
        }

        if (tdElementKunde) {
            let pElementKunde = document.createElement('p');
            pElementKunde.textContent = kunde; //journey.customer
            tdElementKunde.appendChild(pElementKunde);
        }
    }
}

addEvent(4, 4, "Mikkels fødselsdag", 'Mikkel + ' + 0);

addEvent(4, 6, "Mathias' fødselsdag", 'Mathias + ' + 1000);