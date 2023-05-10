import Livro from "../modelo/Livro";

let livros: Array<Livro> =[
  {
    codigo: 1,
    "codEditora": 1,
    titulo: "The Clean Architecture: A Craftsman's Guide to Software Structure and Design",
    resumo: "Mostra como projetar sistemas de software robustos e escaláveis, usando uma arquitetura limpa e orientada a objetos",
    autores: ["Robert C. Martin"]
  },
  {
    codigo: 2,
    "codEditora": 2,
    titulo: "Code Complete: A Practical Handbook of Software Construction",
    resumo: "Fornece conselhos práticos e técnicas de programação para desenvolvedores que desejam escrever software de alta qualidade",
    autores: ["Steve McConnell"]
  },
  {
    codigo: 3,
    "codEditora": 3,
    titulo: "Refactoring: Improving the Design of Existing Code",
    resumo: "Ensina técnicas para melhorar a qualidade do código existente, tornando-o mais fácil de entender e manter",
    autores: ["Martin Fowler", "Kent Beck", "John Brant", "William Opdyke", "Don Roberts"]
  },
  {
    codigo: 4,
    "codEditora": 4,
    titulo: "Effective Java",
    resumo: "Fornece dicas e técnicas para escrever código Java eficiente, robusto e de fácil manutenção",
    autores: ["Joshua Bloch"]
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