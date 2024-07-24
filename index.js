class especificacoesHeroi{
        constructor(NomeDoHeroi, IdadeDoHeroi, TipoDoHeroi){
        this.NomeDoHeroi = NomeDoHeroi
        this.IdadeDoHeroi = IdadeDoHeroi
        this.TipoDoHeroi = TipoDoHeroi
    }
function(){
    console.log("O herói", this.NomeDoHeroi, "com apenas", this.IdadeDoHeroi, "do tipo", this.TipoDoHeroi )
    
}
escrever(){
    console.log("O herói", this.NomeDoHeroi, "é o mais novo e o mais forte de todos" )
}
};

let heroi = new especificacoesHeroi("Jon das guerras", "22 anos", "guerreiro");

        
heroi.function();
heroi.escrever();

let idadeMaisNova = 22
let maisPoderosoDoTipo = "guerreiro"
let resultado = (idadeMaisNova === 22) && (maisPoderosoDoTipo === "guerreiro")
console.log(resultado)

for (let idade = 0; idade <= 22; idade++){
    console.log(idade)
};

let tipoHeroi = "guerreiro"
let ataque = "espada"

switch (tipoHeroi,ataque){
    case "mago":
    case "magia":
    console.log("o", tipoHeroi, "atacou usando", ataque)
    break
    case "guerreiro":
    case "espada":
    console.log("o", tipoHeroi, "atacou usando", ataque)
    break
}


    
