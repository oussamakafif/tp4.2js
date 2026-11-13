"use strict"; // Slide 2: mode strict

// Fonction d'insertion d'une nouvelle ligne
function doInsertRowTable(num, nom, prenom, points) { 
    const table = document.querySelector("table tbody") || document.querySelector("table"); // Slide 14: Récupérer l'élément
    const row = document.createElement("tr"); // Slide 14: Créer un élément tr
    row.setAttribute("num", num);
    
    const col1 = document.createElement("td"); col1.innerText = num; col1.setAttribute("class", "col_number");
    const col2 = document.createElement("td"); col2.innerText = nom; col2.setAttribute("class", "col_text");
    const col3 = document.createElement("td"); col3.innerText = prenom; col3.setAttribute("class", "col_text");
    const col4 = document.createElement("td"); col4.innerText = points; col4.setAttribute("class", "col_number");
    
    const col5 = document.createElement("td");
    const chk = document.createElement("input"); 
    chk.setAttribute("type", "checkbox"); // Slide 14
    col5.appendChild(chk); 
    col5.setAttribute("class", "col_chkbox");
    
    row.appendChild(col1); row.appendChild(col2); row.appendChild(col3); row.appendChild(col4); row.appendChild(col5);
    table.appendChild(row); // Slide 14: Ajouter au DOM
}