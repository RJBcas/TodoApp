import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Store } from "@ngrx/store";
import { AppState } from '../../app.reducer';
import { Todo } from '../model/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { ToggleTodoAction, EditarTodoAction, DeletTodoAction } from '../todo.actions';
@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styles: []
})
export class TodosItemsComponent implements OnInit {

 @Input () todo :Todo;
@ViewChild('txtInputFisico') txtInputFisico: ElementRef;

 chkField:FormControl;
 txtInput:FormControl;
 editando : boolean;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.chkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
    
    this.chkField.valueChanges.subscribe( () =>{
      const accion = new ToggleTodoAction( this.todo.id )
      this.store.dispatch(accion)
    })

   

  }
  destruirTodo(){
    console.log('hola desde borrar')
    const accion = new DeletTodoAction(this.todo.id);
    this.store.dispatch(accion);
  }
  editar(){
    this.editando= true;
    setTimeout(() => {
    this.txtInputFisico.nativeElement.select()
            
    }, 1);
  }
terminarEdicion(){
  this.editando = false;
  if( this.txtInput.invalid){
    return;
  } 
  if (this.txtInput.value === this.todo.texto){
    return;
  }
  const accion = new EditarTodoAction(this.todo.id, this.txtInput.value)
  this.store.dispatch(accion)
}
}
