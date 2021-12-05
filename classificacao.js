

function solucao(respostas) {
    /*const solucao = [ "PREFIRO NAO DECLARAR", "PRETA", "PARDA", "AMARELA", "AMARELA"]
    console.log(respostas[ 1, 2])*/


   /* for (const respostas of respostas) {
        if (respostas === respostas[1, 2]) {
            respostas++;
        }
    }
    console.log(respostas)*/

}


function processData(input) {
    const respostas = JSON.parse(input);
    solucao(respostas);
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
