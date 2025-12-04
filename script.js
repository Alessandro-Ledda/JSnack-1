/*CONSEGNA
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

//OUTPUT 
//CHIEDO ALL'UTENTE IL PRIMO NUMERO
//CONTROLLO I DUE NUMERI SCELTI ASSOCIANDOLI A DUE VARIABILI
const primoNum = parseInt(prompt("Dammi il primo numero"));
const secondoNum = parseInt(prompt("dammi il secondo numero"));
//CHIEDO ALL'UTENTE IL SECONDO NUMERO

//ELABORAZIONE
// //SE IL PRIMO NUMERO E' PIU' GRANDE STAMPO  IL PRIMO NUMERO ALTRIMENTI STAMPO IL SECONDO

if (primoNum > secondoNum){
    console.log("il numero maggiore è" + " " + primoNum);
}else{
    console.log("Il numero più grande è" + " " + secondoNum);
}


