import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ControleEditora from './controle/ControleEditora';
import ControleLivro from './controle/ControleLivros';

const LivroDados = () => {
  const controleLivro = new ControleLivro();
  const controleEditora = new ControleEditora();
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const tratarCombo = (evento:any) => setCodEditora(Number(evento.target.value));

  const incluir = (e:any) => {
    e.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    controleLivro.incluir(livro);
    navigate('/');
  };

  return (
    <>
    <style>{`form label{font-size: 2rem;}`}</style>
    <main className="container">
      <h1 className="my-3 display-2 text-center fw-semibold">Cadastro do Livro</h1>
      <form onSubmit={incluir}>
        <div>
          <label htmlFor="titulo" className="form-label fw-medium">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            className="form-control text-primary-emphasis bg-primary-subtle border border-primary-subtle"
            onChange={e => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="resumo" className="form-label mt-3 fw-medium">
            Resumo
          </label>
          <textarea
            className="form-control text-primary-emphasis bg-primary-subtle border border-primary-subtle"
            id="resumo"
            value={resumo}
            onChange={e => setResumo(e.target.value)}
            required
            ></textarea>
        </div>
        <div>
          <label htmlFor="codEditora" className="form-label mt-3 fw-medium">
            Editora
          </label>
          <select className="form-select text-primary-emphasis bg-primary-subtle border border-primary-subtle" value={codEditora} id="codEditora" onChange={tratarCombo}>
            {opcoes.map(opcao =>(
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="autores" className="form-label mt-3 fw-medium">
            Autores (1 por linha)
          </label>
          <textarea
            className="form-control text-primary-emphasis bg-primary-subtle border border-primary-subtle"
            id="autores"
            value={autores}
            onChange={e => setAutores(e.target.value)}
            required
            ></textarea>
        </div>

        <button type="submit" className="btn btn-outline-primary px-3 mt-3 fw-medium">
          Salvar Dados
        </button>
      </form>
    </main>
    </>
  );
};

export default LivroDados;
