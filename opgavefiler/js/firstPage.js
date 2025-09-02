/* Opgave 1*/

// din kode her

let firstName = "Aksel"; 
let aarIvirksomhed = 3;
 

 const massege = document.getElementById('message');
 massege.innerHTML = `<h2>${firstName}</h2> du har været i virksomheden i ${aarIvirksomhed}`
 console.log (massege);

/* Opgave 2*/


// din kode her

const produkter = [
    { 
        navn: "Vadnmelon",
        beskrivelse: "en stor Vandmelon",
        pris: 100 },
    { 
        navn: "æble",
        beskrivelse: "et grønt æble",
        pris: 33 },
    { 
        navn: "Ananas", 
        beskrivelse: "en saftig Ananas",
        pris: 200 }
]

 document.getElementById("produktListe").innerHTML = array.forEach(produktListe => {
    produkter.map
});(produkt => 
    <div class="produkt">
        <h2>${produkt.navn}</h2>
        <p>${produkt.beskrivelse}</p>
        <p>Pris: ${produkt.pris} kr.</p>
    </div>);
    


/* Opgave 3 - skriv videre på koden her: */

// array med person data
const myPersons = [];


// find form elementer
const myForm = document.getElementById('formular');
const submitButton = document.getElementById('indsend-knap');
const personList = document.getElementById('person-liste');


