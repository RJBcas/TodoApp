import { Component, OnInit } from '@angular/core';
import { AllTodoAction } from './todo.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducer';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {

  completado:boolean = false;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  all(){
    this.completado = !this.completado
    const accion = new AllTodoAction(this.completado)
    this.store.dispatch(accion)
  }

}
