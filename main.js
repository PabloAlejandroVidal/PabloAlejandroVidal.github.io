const alfabeto = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const inputOriginal = document.getElementById('input-original');
const cifrador = document.getElementById('cifrador');
const resultado = document.getElementById('resultado');
const rango = document.getElementById('rango');

const shiftMessage = () => {
    const wordArray = [...inputOriginal.value.toUpperCase()];
    if(wordArray != 0){
        printChar(wordArray);
    }
}

const printChar = (wordArray) => {
    len = wordArray.length;
    spanChar = resultado.appendChild(document.createElement("a"));
    for(i=0;i<len;i++){
        charSinCodificar = wordArray[i];
        alfabeto.includes(charSinCodificar) ?
        spanChar.innerHTML += alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] :
        spanChar.innerHTML += charSinCodificar;
    }
}


const submit = e => {
    e.preventDefault();
    resultado.innerHTML = '';
    shiftMessage();
}

cifrador.onsubmit = submit;

inputOriginal.addEventListener("keyup", () => {
    resultado.innerHTML = '';
    shiftMessage();
});
rango.addEventListener("mousemove", () => {
    resultado.innerHTML = '';
    shiftMessage();
});