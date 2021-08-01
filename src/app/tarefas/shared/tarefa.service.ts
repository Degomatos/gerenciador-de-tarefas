/*Servico responsavel por criar, excluir e modificar as tarefas criadas pelo usuario da aplicacao */

import { Injectable } from '@angular/core';

import { Tarefa } from './';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {

  constructor() { }

  /**Esse metodo listara todas as tarefas que estejam armazenada no localStorage */
  listarTodos(): Tarefa[]{
    const tarefas = localStorage['tarefas'];
    return tarefas ? JSON.parse(tarefas) : [];
  }

  /**Esse metodo e responsavel por cadastrar uma nova tarefa */
  cadastrar(tarefa: Tarefa): void{
    const tarefas = this.listarTodos();
    tarefa.id = new Date().getTime();
    tarefas.push(tarefa);
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**Esse metodo busca uma tarefa por ID para quando for
   * solicitado a modificacao de uma tarefa ja criada */
  buscarPorId(id: number): Tarefa {
    const tarefas: Tarefa[] = this.listarTodos();
    return tarefas.find(tarefa => tarefa.id === id);
  }

  /**Esse metodo tem por funcao atualizar uma tarefa que ja foi criada */
  atualizar(tarefa: Tarefa): void {
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(tarefa.id === obj.id) {
        objs[index] = tarefa;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

  /**Esse metodo recebe um id para remover uma tarefa utilizando o filter
   * O filter vai retornar todas as tarefas cujo id e diferente do ID que foi passado
   * como parametro e quando o ID for igual ele nao retorna o objeto, removendo assim
   * do array de tarefas
  */
  remover(id: number): void{
    let tarefas: Tarefa[] = this.listarTodos();
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
  }

  /**Esse metodo e usado para alterar o status da tarefas para concluido ou para remover
   * o status de concluido quando ja estiver marcado
   * O forEach vai percorrer o vetor de tarefas ate encontar o id da tarefa passado como parametro
   * e vai modificar o status de concluido
   */

  alterarStatus(id: number): void{
    const tarefas: Tarefa[] = this.listarTodos();
    tarefas.forEach((obj, index, objs) => {
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['tarefas'] = JSON.stringify(tarefas);
  }

}
