//Exercicio 01
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

//Exercicio 02
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo  ao Typescript.`;
}
console.log(mensagemPersonalizada("Vini"));

//Exercicio 03
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

