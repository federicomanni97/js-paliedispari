/* 
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (ovviamente usando una funzione :faccia_nerd:).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (ovviamente  usando una funzione :faccia_nerd:)
Dichiariamo chi ha vinto.
*/

const btn = document.querySelector('button');
const resultEl = document.querySelector(".alert");

btn.addEventListener('click', function(){
    const inputEl = document.getElementById('data').value;
        for(let i = 0; i < inputEl.length; i++){
            if(inputEl[i] !== inputEl[inputEl.length - 1 - i]){
                return false;
            }
        }
        console.log('La tua parola è palindroma');
        return true;
})

//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const btnPari = document.getElementById('pari');
const btnDispari = document.getElementById('dispari');
const message2 = document.getElementById('winLoseText');
let msg;

btnPari.addEventListener('click', function(){
    const numeroUtente = parseInt(document.getElementById('data2').value);
    const numeroCpu = getRndInteger(1,5);
    const risultato = numeroUtente  + numeroCpu;
    (risultato % 2 === 0) ? msg = 'Vittoria!!!' : msg = 'Sconfitta...';
    console.log(numeroUtente);
    console.log(numeroCpu);
    console.log(risultato);
    console.log(msg);
    message2.innerText = msg;
})
btnDispari.addEventListener('click', function(){
    const numeroUtente = parseInt(document.getElementById('data2').value);
    const numeroCpu = getRndInteger(1,5);
    const risultato = numeroUtente  + numeroCpu;
    (risultato % 2 === 0) ? msg = 'Sconfitta...' : msg = 'Vittoria!!!';
    console.log(numeroUtente);
    console.log(numeroCpu);
    console.log(risultato);
    console.log(msg);
    message2.innerText = msg;
})


//CORREZIONE ESERCIZIO PALINDROMA

let frase = "'ciao ragazzi, come state?'";
console.log(frase.split(""));

const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    const parola = document.getElementById('data').value;
    console.log(parola;)
    let palindroma = reverseWord(parola);
    console.log(palindroma);
})

let parola = 'otto';
let palindroma = reverseWord(parola);
reverseWord(parola);
function reverseWord(word){
    let reversedWord = '';
    for (let i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];

        //SIGNIFICATO += reverseWord = reverseWord + word[i];

        //console.log(reversedWord)
    }
    return reversedWord === word;

}