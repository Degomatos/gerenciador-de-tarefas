import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa, TarefaService } from '../shared';

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css']
})
export class EditarTarefaComponent implements OnInit {
  @ViewChild('formTarefa') formTarefa: NgForm;
  tarefa: Tarefa;

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**O 'route' do tipo ActivatedRoute tem por principio pegar a informacoes passadas pela url
   * para serem tratadas neste componente, neste caso o id e passado como parametro e utilizado
   * para a modificacao da tarefa selecionada.
   * o '+' antes do 'this' e um operador do TypeScript que faz a conversao
   * do valor recebido para um valor do tipo Number
  */
  ngOnInit(): void {
    const id = +this.route.snapshot.params['id'];
    this.tarefa = this.tarefaService.buscarPorId(id);
  }
/**Esse metodo verifica se o formulario e valido e chama o servico atualizar tarefa
 * de tarefaService
 */
  atualizar(): void{
    if(this.formTarefa.form.valid){
      this.tarefaService.atualizar(this.tarefa);
      this.router.navigate(['/tarefas']);
    }
  }
}
