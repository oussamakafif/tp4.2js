"use strict"; // Slide 2: mode strict

let lignes = 0; // Slides 24-26: compteur des lignes
let persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
]; // Slide 20: tableau d'objets

function doInsertRowTable(num, nom, prenom, points) { // Slide 14: manipulation du DOM
    const tableBody = document.querySelector("table tbody");
    const row = document.createElement("tr");
    row.setAttribute("num", num);

    const values = [num, nom, prenom, points];
    const classes = ["col_number", "col_text", "col_text", "col_number"];

    values.forEach((value, index) => {
        const cell = document.createElement("td");
        cell.className = classes[index];
        cell.textContent = value;
        row.appendChild(cell);
    });

    const checkboxCell = document.createElement("td");
    checkboxCell.className = "col_chkbox";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);
    row.appendChild(checkboxCell);
    tableBody.appendChild(row);
}

function init() { // Slides 22-26: initialisation et parcours du tableau
    const initialPersons = persons.slice();
    persons = [];
    lignes = 0;
    document.querySelector("table tbody").replaceChildren();

    for (const person of initialPersons) {
        doInsert(person.nom, person.prenom, person.points);
    }
}

function doInsert(nom, prenom, points) { // Slides 24-26: insertion et numérotation
    const person = { nom, prenom, points: Number(points) };
    lignes++;
    persons.push(person);
    doInsertRowTable(lignes, person.nom, person.prenom, person.points);
}

function consoleTableau() { // Slides 29-30: affichage du tableau dans la console
    console.log(persons);
}
