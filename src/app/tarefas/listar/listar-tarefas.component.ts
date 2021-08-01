import { Component, OnInit } from '@angular/core';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-listar-tarefas',
  templateUrl: './listar-tarefas.component.html',
  styleUrls: ['./listar-tarefas.component.css']
})
export class ListarTarefasComponent implements OnInit {
  tarefas: Tarefa[];

  constructor(
    private tarefaService: TarefaService
  ) { }

  ngOnInit(): void {
    this.tarefas = this.listarTodos();
  }

  listarTodos(): Tarefa[]{
    return this.tarefaService.listarTodos();
  }

  /**E adicionado um 'event' que e um elemento do Angular para evitar que a
   * pagina seja atualizada quando o botao de remover for clicado
   * O metodo vai exibir um alert perguntando se deve ou nao ser realizada a exclusao,
   * que retorna true ou false e permite ou nao entrar dentro do if   *
   */
  remover($event: any, tarefa: Tarefa): void{
    $event.preventDefault();
    if (confirm(`Deseja remover a tarefa "${tarefa.nome}"?`)){
      this.tarefaService.remover(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }

  /**Esse metodo vai verificar se o checkbox de 'tarefa concluida' foi alterado. */
  alterarStatus(tarefa: Tarefa): void{
    if(confirm(`Deseja alterar o status da tarefa "${tarefa.nome}"?`)){
      this.tarefaService.alterarStatus(tarefa.id);
      this.tarefas = this.listarTodos();
    }
  }
}
