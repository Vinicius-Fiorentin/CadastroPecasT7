let pesoPeca = 200
let numeroPecas = 10
let listaPecas = ["Disco de Freio", "Motor", "Pastilha de Freio", "Pneu", "Volante", "Chassi"]
let nomePeca = "Disco de Freio"

// Verificação peso da peça
if(pesoPeca > 100) {
    // Podemos cadastrar
    console.log("Peso adequado, podemos cadastrar")

} else {
    // Não podemos cadastrar
    console.log("Peso menor que 100g, não podemos cadastrar")
}

// Verificação tamanho da lista de peças
if (listaPecas.length >= 10) {
    // Capacidade máxima atingida
    console.log("Capacidade máxima atingida")
} else {
    // Ainda há espaço para cadastro
    console.log("Ainda há espaço para cadastro")
}

// Verificação do nome da peça
if (nomePeca.length < 3) {
    // Nome inválido
    console.log("Nome inválido, o nome precisa ter 3 caracteres ou mais")    
} else {
    // Nome de peça adequado
    console.log("Nome adequado")
}

// Javascript
// Python
// Go