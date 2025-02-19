function inverterSequencia(sequencia) {
    return sequencia.slice().reverse();
}


let sequenciaOriginal = [1, 2, 3, 4, 5];
let sequenciaInvertida = inverterSequencia(sequenciaOriginal);
console.log("Sequência original:", sequenciaOriginal);
console.log("Sequência invertida:", sequenciaInvertida);
