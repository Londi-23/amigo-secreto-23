//Variables
/* 
comerntarios parrafo 
*/
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximoIntents = 3;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    //const numero = prompt("Introduce un número:");
    let numeroUsuario = parseInt(prompt(`Me inidcas un numero por favor entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto){
        //comilla invertida para incluir variables
        alert(`Acertaste, el numero es: ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? 'vez' :'veces'} `);
        //alert('Acertaste, el numero es: '+ numeroUsuario);
    } else{
        if(numeroUsuario > numeroSecreto){
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementa cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++; 
        palabraVeces = 'veces';
        if (intentos > maximoIntents){
            alert(`Superaste los ${maximoIntents} intentos`);
            break
        }
    }
}  
