var curso = { alunos:[
    {
        nome: "Bianca Moraes",
        idade: 38,
        sexo:"F"
    },
    {
        nome:"Breno Bragança",
        idade: 20,
        sexo:"M"
    },
    {
        nome:"Bruno Barros",
        idade: 35,
        sexo: "M"
    },
    {
        nome: "Carlos Elian",
        idade: 18,
        sexo: "M",
    },
    {
        nome: "Daniel Araújo",
        idade: 36,
        sexo: "M",
    },
    {
        nome: "Dione Vianna",
        idade: 34,
        sexo: "M",
    },
    {
        nome: "Elvia Masiero",
        idade: 23,
        sexo: "F",
    },
    {
        nome: "Estefany Cristina",
        idade: 25,
        sexo: "F",
    },
    {
        nome: "Evódio Aquino",
        idade: 58,
        sexo: "M"
    },
    {
        nome: "Gabriel Carreiro",
        idade: 23,
        sexo: "M",
    },
    {
        nome: "Gabriela Oliveira",
        idade: 28,
        sexo: "F",
    },
    {
        nome: "Guilherme Henrique",
        idade: 19,
        sexo: "M",
    },
    {
        nome: "Jean-Luc Ernest",
        idade: 20,
        sexo: "M",
    },
    {
        nome: "Laís Moreira",
        idade: 31,
        sexo: "F",
    },
    {
        nome: "Luana Santos",
        idade: 23,
        sexo: "F",
    },
    {
        nome: "Luciele Rodrigues",
        idade: 33,
        sexo: "F",
    },
    {
        nome: "Lucca Martinelli",
        idade: 19,
        sexo: "M",
    },
    {
        nome: "Nathália Carvalho",
        idade: 18,
        sexo: "F",
    },
    {
        nome: "Paulo Eduardo",
        idade: 19,
        sexo: "M",
    },
    {
        nome: "Priscila Barcala",
        idade: 27,
        sexo: "Feminino",
    },
    {
        nome: "Rodrigo Lifsitch",
        idade: 33,
        sexo: "M",
    },
    {
        nome: "Sérgio Moreira",
        idade: 21,
        sexo: "M",
    },
    {
        nome: "Tiago Zozimo",
        idade: 25,
        sexo: "M",
    },
    {
        nome: "Tony de Morais",
        idade: 34,
        sexo: "M",
    },
    {
        nome: "Victor Freitas",
        idade: 26,
        sexo: "M",
    },
    {
        nome: "Victor Grillo",
        idade: 28,
        sexo: "M",
    }
],
programador: [
"Nivelamento", 
"Banco de Dados", 
"BackEnd Java", 
"FrontEnd Essencials"
]
};


//função para mostrar as diciplinas 
function mostraDisciplinas (disciplinas){
    for(let value of disciplinas){
        var tela = document.createElement("p");
        tela.innerHTML = value;
        document.querySelector('body div').appendChild(tela);
    }
}
function mostraSexo(sex){
    for(let value of sex){
        sex = value.sexo;
        var nome = value.nome
        if(sex == "M"){
            var tela = document.createElement("p");
            tela.innerHTML = (nome + ' ' + sex + 'é do sexo maculino' );
            document.querySelector('body div').appendChild(tela);
            
        }else{
            var tela2 = document.createElement("p");
            tela2.innerHTML = (nome + ' ' + sex + 'é do sexo feminino' );
            document.querySelector('body div').appendChild(tela2);
            
        }
    }

}
//funçaõ que mostra o aluno e sua idade
function mostraAluno (user){
    for(let value of user){
        let nome = value.nome;
        let idade = value.idade;
        var tela = document.createElement("p");
        tela.innerHTML = (`${nome} tem ${idade} anos`);
        document.querySelector('body div').appendChild(tela);
    }
}
//funções relacionadas a idade
function mediaIdade(){
    let total = curso.alunos.reduce((total, valor) => total + valor.idade, 0); //Usa .reduce para reduzir todas as idades
    let media = total/curso.alunos.length;
    var tela = document.createElement("p");
    tela.innerHTML = ("A média de idade das pessoas da turma é: " + media);
    document.querySelector('body div').appendChild(tela);
}

function menorIdade (idade){
    let age = [];
    let name = [];
    for(let value of idade){
        age.push(value.idade);
    }
    let min = Math.min(...age);

    for( let valor of idade){
        if(valor.idade == min){
            name.push(valor.nome)
        }
    }
    let tela = document.createElement("p");
    tela.innerHTML = (`A menor idade é ${min} e a pessoa ou pessoas que tem essa idade é: ${name}.`);
    document.querySelector('body div').appendChild(tela);
}
function maiorIdade(idade){
    let iM = 0;
    let iMa = 0;
    let listm = [];
    let listM = [];
    for(let value of idade){
        let nome = value.nome;
        idade = value.idade;
        if(idade < 18){
            iM++
            listm.push(nome);
        }else{
            iMa++
            listM.push(nome);
        }
    }
    var tela = document.createElement("p");
    tela.innerHTML = (`AS pessoas ${listM} são maiores de idade contando assim ${iMa} pessoas maiores de idade<br>  Já as pessoas ${listm} são menores idade contanto assim ${iM} menores de idade`);
    document.querySelector('body div').appendChild(tela);
}

//Usagem dos botões 

document.querySelector('body button#alunos').onclick = function(){
    mostraAluno(curso.alunos);
};
document.querySelector('body button#disciplinas').onclick = function(){
    mostraDisciplinas(curso.programador);
};
document.querySelector('body button#conferir').onclick = function (){
    mostraSexo(curso.alunos);
};
document.querySelector('body button#media').onclick = mediaIdade;

document.querySelector('body button#maiorI').onclick = function (){
    maiorIdade(curso.alunos);
};
document.querySelector('body button#menorIdade').onclick = function (){
    menorIdade(curso.alunos);
};

document.querySelector('body button#limpar').onclick = function(){
    window.location.reload();
};