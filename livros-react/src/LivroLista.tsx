import { useState, useEffect } from 'react';
import ControleEditora from './controle/ControleEditora';
import ControleLivro from './controle/ControleLivros';

interface Livro {
  codigo: number;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

const controleLivro:any = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props:LinhaLivroProps) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr className='table-light'>
      <td>
        {livro.titulo} 
        <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
        </td>
      <td >{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor:string, index:number) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista =() => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState<boolean>(false);

  useEffect(()=>{
    setLivros(controleLivro.obterLivros());
    setCarregado(true)
  },[carregado])

  const excluir = (codigo:number) => {
    controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className='container'>
      <h1 className='my-3'>Catálogo de Livros</h1>
      <table className='table table-success table-striped'>
        <thead>
          <tr className=' table-dark'>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro
              key={livro.codigo}
              livro={livro}
              excluir={excluir}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista
