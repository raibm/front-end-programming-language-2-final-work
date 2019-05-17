
export class Pessoa {
    id: number;
    nome: String;
    sobrenome: String;

    constructor(nome?: String, sobrenome?: String){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

}