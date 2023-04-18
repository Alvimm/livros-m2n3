import Livro from "../modelo/Livro";

let livros: Array<Livro> = [
  {codigo:1, codEditora:1, titulo:'Livro 1', resumo:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.', autores:['José Augusto', 'Lucia Ramires'] },
  {codigo:2, codEditora:2, titulo:'Livro 2', resumo:'Suspendisse potenti. Maecenas non velit auctor, eleifend urna sed, dignissim felis. Quisque aliquet viverra ipsum eu bibendum.', autores:['Paulo Coelho', 'Pat Johnson'] },
  {codigo:3, codEditora:3, titulo:'Livro 3', resumo:'Proin venenatis turpis vel ipsum bibendum, quis aliquam lectus accumsan. Sed id leo in nisi ornare iaculis ut in nulla.', autores:['Maria Dagostini', 'Liandra Smith'] },
  {codigo:4, codEditora:4, titulo:'Livro 4', resumo:'teste de resumo.', autores:['João Dagostini', 'Paul Smith'] },
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