import { Component, OnInit } from '@angular/core';
import * as fromFiltro from '../../filter/filter.action'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import * as fromTodo from "../todo.actions";
import { DeletCompleteTodoAction } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  pendientes:number;

  filtrosValido : fromFiltro.FiltrosValidos[] = ['todos', 'completados' , 'pendientes']
  filtroActual : fromFiltro.FiltrosValidos;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state =>{
      this.contarPendientes(state.todos)
      this.filtroActual = state.filtro;
    })
  }

  cambiarFiltro(NuevoFiltro:fromFiltro.FiltrosValidos){
const action = new fromFiltro.SetFiltroAction(NuevoFiltro);
this.store.dispatch(action);
  }
  contarPendientes( todos: Todo[]){
this.pendientes = todos.filter( todo => !todo.completado).length;
  }
  eliminarCompletados(){
    const action = new fromTodo.DeletCompleteTodoAction();
    this.store.dispatch(action)

     
  }
}
