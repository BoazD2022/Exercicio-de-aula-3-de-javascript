function myFunction() {
    var nome = prompt("Digite seu nome:");
    var sobrenome = prompt("Dijite seu sobrenome");
    var idade = prompt("Digite sua idade");
    var telefone = prompt("Digite seu numero celular");
    var nomeDoPai = prompt("Digite nome do paí");
    var nomeDaMae = prompt("Digite nome da mãe");
    var nomeDoConjuge = prompt("Digite o nome do conjûge");
    var profissao = prompt("Digite sua profissão");

    console.log("nome Digitado: " + nome);
    console.log("sobreNome Digitado: " + sobrenome);
    console.log("nome Digitado: " + idade);
    console.log("sobreNome Digitado: " + telefone);
    console.log("nome Digitado: " + nomeDoPai);
    console.log("sobreNome Digitado: " + nomeDaMae);
    console.log("nome Digitado: " + nomeDoConjuge);
    console.log("sobreNome Digitado: " + profissao);
    console.table([nome, sobrenome, idade, telefone, nomeDoPai, nomeDaMae, nomeDoConjuge, profissao]);
}