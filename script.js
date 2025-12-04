/*CONSEGNA
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

//OUTPUT 
// //CONTROLLO I DUE NUMERI SCELTI ASSOCIANDOLI A DUE VARIABILI

//CHIEDO ALL'UTENTE IL PRIMO NUMERO

const primoNum = parseInt(prompt("Dammi il primo numero"));

//CHIEDO ALL'UTENTE IL SECONDO NUMERO

const secondoNum = parseInt(prompt("Dammi il secondo numero"));


//ELABORAZIONE
// //SE IL PRIMO NUMERO E' PIU' GRANDE STAMPO  IL PRIMO NUMERO ALTRIMENTI STAMPO IL SECONDO

if (primoNum > secondoNum){
    console.log("il numero maggiore è" + " " + primoNum);
}else if(primoNum < secondoNum){
    console.log("Il numero maggiore è" + " " + secondoNum);

// I DUE NUMERI SONO UGUALI
}else{
    console.log("I due numeri sono uguali");
}


