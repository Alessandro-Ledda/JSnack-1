//Snack 5 CONSEGNA
 //Crea un array vuoto. 
 //Chiedi per 6 volte all’utente di inserire un numero, 
 //se è dispari inseriscilo nell’array

 //--------------------SVOLGIMENTO-----------------------

 //Creo l' arrey vuoto per contenere gli elementi dispari
 const lista = [];

 //Output
 //Chiedi a user 6 numeri (prompt all'interno di un ciclo for)
 
 for(i = 0; i < 6; i++){
    
    const numero = parseInt(prompt("Dammi un numero"));
    if(numero % 2 !== 0){
      lista.push(numero);
    }
    console.log(lista);     
    
 }
  
 //verificare i numeri
 //Se i numeri sono dispari aggiungi all'array altrimenti no
 //print array









 //altro sneck CONSEGNA
 //L’utente inserisce due parole in successione, con due prompt. 
 //Il software stampa prima la parola più corta, poi la parola più lunga.

 //--------------------SVOLGIMENTO------------------------------------

 //OUTPUT
 //CHIEDERE ALL'UTENTE DUE PAROLE ALLEGANDOLE A DUE VARIABILI

 const primaParola = prompt("Dammi la prima parola");
 const secondaParola = prompt("Dammi la seconda parola");

 //ELABORZIONE
 //SE LA PRIMA PAROLA E' PIU LUNGA STAMPA LA PRIMA ALTRIMENTI STAMPA LA SECONDA
 if(primaParola.length > secondaParola.length){
    console.log("La parola piu lunga è" + " " + primaParola);
 }else if (primaParola.length < secondaParola.length){
    console.log("La parola più lunga è" + " " + secondaParola);
 }else{ //SE LE PAROLE SONO UGUALI STAMPA UN MESSAGGIO DICENDO CHE SONO UGUALI
    console.log("le due parole sono uguali");
 }
 