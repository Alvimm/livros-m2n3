import Editora from "../modelo/Editora";

let editoras: Array<Editora> = [
  {codEditora:1, nome:'Editora 1'},
  {codEditora:2, nome:'Editora 2'},
  {codEditora:3, nome:'Editora 3'}
]



export default class ControleEditora{
  getNomeEditora(codEditora:number):string {
    const editora = editoras.filter(editora => editora.codEditora === codEditora)[0]
    return editora ? editora.nome : ''
  }
  
  getEditoras(): Array<Editora>{
    return editoras
  }
}