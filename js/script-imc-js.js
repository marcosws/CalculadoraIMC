/*
    Aplicação: Calculadora de IMC
    Autor: Marcos Willian de Souza
    Data: 06/09/2020
*/ 

let dados = [];

function calcularImc(){

    let cadastro = new Object();
    let nome = document.getElementById('nome').value;
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    let imc = calcImc(peso, altura);
    let situacao = imprimeSituacao(imc);

    cadastro.nome = nome;
    cadastro.peso = peso;
    cadastro.altura = altura;
    cadastro.imc = imc;
    cadastro.situacao = situacao;

    console.log(cadastro);
    console.log(dados);

    dados.push(cadastro);
    preencheTabela(dados);
    cadastro = undefined;

}
function preencheTabela(dados){

    let template = "";
    for(let d in dados){
        template += `
        <tr>
            <td>${dados[d].nome}</td>
            <td>${dados[d].peso}</td>
            <td>${dados[d].altura}</td>
            <td>${dados[d].imc.toFixed(2)}</td>
            <td>${dados[d].situacao}</td>
        </tr>
        `;
        document.getElementById('dados').innerHTML = template;
    }

}
function limparCampos(){
    document.getElementById('nome').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('altura').value = "";
}
function sobreCalculadoraImc(){
    alert("Calculadora de IMC\nAutor: Marcos Willian de Souza\nE-Mail: marcosws@ymail.com\nGitHub: www.github.com/marcosws")
}
function calcImc(peso, altura){
    return peso / (altura * altura);
}
function imprimeSituacao(imc){

    if(imc < 18.5){
        return 'Abaixo do peso';
    }
    else if(imc >= 18.5 && imc <= 24.9){
        return 'Peso normal';
    }
    else if(imc >= 25 && imc <= 29.9){ 
        return 'Sobrepeso';
    }
    else if(imc >= 30 && imc <= 34.9){ 
        return 'Obesidade grau 1';
    }
    else if(imc >= 35 && imc <= 39.9){ 
        return 'Obesidade grau 2';
    }
    else if(imc > 40){ 
        return 'Obesidade grau 3';
    }

}
function sair(){

    if(confirm("Deseja sair da Calculadora?")){
        window.close();
    }

}
function limparTabela(){
    document.getElementById('dados').innerHTML = "";
}