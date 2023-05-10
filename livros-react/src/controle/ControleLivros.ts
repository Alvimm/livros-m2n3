import Livro from "../modelo/Livro";

let livros: Array<Livro> =[
  {
    codigo: 1,
    codEditora: 1,
    titulo: "O Senhor dos Anéis",
    resumo: "A saga de um hobbit que deve levar um anel para destruição antes que caia nas mãos do mal",
    autores: ["J.R.R. Tolkien"]
  },
  {
    codigo: 2,
    codEditora: 2,
    titulo: "O Pequeno Príncipe",
    resumo: "Um pequeno príncipe de outro planeta visita a Terra e aprende sobre a vida",
    autores: ["Antoine de Saint-Exupéry"]
  },
  {
    codigo: 3,
    codEditora: 3,
    titulo: "1984",
    resumo: "Um homem se rebela contra um governo opressor que controla todos os aspectos da vida",
    autores: ["George Orwell"]
  },
  {
    codigo: 4,
    codEditora: 4,
    titulo: "A Guerra dos Tronos",
    resumo: "As famílias nobres de um reino lutam pelo poder em uma terra de fantasia",
    autores: ["George R. R. Martin"]
  }
]

export default class ControleLivro{
  obterLivros():Array<Livro>{
    return livros
  }

  incluir(livro:Livro):void{
    const maiorCodigo = livros[livros.length - 1].codigo
    livro.codigo = maiorCodigo + 1
    livros.push(livro)
  }

  excluir(codigo:number):void{
    const index = livros.findIndex((livro)=> livro.codigo === codigo)
    if(index >= 0) livros.splice(index, 1)
  }

}