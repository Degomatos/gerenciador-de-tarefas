import { Routes } from "@angular/router";
import { CadastrarTarefaComponent } from "./cadastrar";

import { ListarTarefasComponent } from "./listar";

export const TarefaRoutes: Routes = [
  { path: 'tarefas', redirectTo: 'tarefas/listar' },
  { path: 'tarefas/listar', component: ListarTarefasComponent },
  { path: 'tarefas/cadastrar', component: CadastrarTarefaComponent}
]
