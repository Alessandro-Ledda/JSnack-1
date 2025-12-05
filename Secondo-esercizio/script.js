//JSnack 3
 //Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 //Il programma stampa la somma di tutti i numeri inseriti. 
 //Esegui questo programma in due versioni, con il for e con il while (facoltativo)

 //OUTPUT
 //chiedo all'utente 5 numeri in serie

 let sommaFor = 0;
  //ELABORAZIONE
 //per ogni numero somma il successivo
 //stampa somma in console

 for(let i = 0 ; i < 5; i++){
    const nuovoNumeroFor = parseInt(prompt("inserisci un numero"));
    sommaFor += nuovoNumeroFor; // sommaFor = sommaFor + nuovoNumero
 }

 console.log("la somma dei numeri è" + sommaFor);


//CICLO WHILE------------------------------

let counter = 0 ; 
let sommaWhile = 0;
while(counter < 5){
   const nuovoNumeroWhile =parseInt(prompt("Inserisci un numero"));
   sommaWhile += nuovoNumeroWhile;
   counter ++;
   console.log("La somma è" + " " + sommaWhile);
}
