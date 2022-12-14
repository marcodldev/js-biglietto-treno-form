// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// VARIABILI 

function importoDati() {
    let nomeutente = document.getElementById("nomeinput").value;

    let kmutente = document.getElementById("kminput").value;

    let etautente = document.getElementById("etainput").value;

    let prezzo = kmutente * 0.21;

    let sconto20 = prezzo * 0.2;

    let sconto40 = prezzo * 0.4;
    
    let numerorandom = generaNumeroRandom(2, 1000);

    let numerorandom1 = generaNumeroRandom1(0, 11);

    let nomepasseggero = document.getElementById("nomepasseggero");

    nomepasseggero.innerHTML = `${nomeutente}`;

    document.getElementById("nrandom2").innerHTML = `${numerorandom}`;

    document.getElementById("nrandom1").innerHTML = `${numerorandom1}`;

    let prezzofinale = document.getElementById("prezzofinale");

        if( etautente > 18 && etautente < 65) {
        prezzofinale.innerHTML = `${prezzo}€ `;
    } else if (etautente < 18) {
        prezzofinale.innerHTML = `${prezzo -sconto20}€ `;
    } else {
        prezzofinale.innerHTML = `${prezzo -sconto40}€ `;
        
    }


}



// numeri random
  
    function generaNumeroRandom1(){
    return Math.floor(Math.random() * 11) + 0;

  }

  function generaNumeroRandom(min, max){
    return Math.floor(Math.random() * max) + min;

  }


