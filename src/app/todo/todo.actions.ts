import { Action } from "@ngrx/store";
import { ToggleAction } from "@ngrx/store-devtools/src/actions";
import { StringMap } from "@angular/compiler/src/compiler_facade_interface";


export const AGREGAR_TODO = '[TODO] Agregar todo ';
export const TOGGLE_TODO = '[TODO] Toggle todo ';
export const EDITAR_TODO = '[TODO] editar todo ';
export const DELET_TODO = '[TODO] eliminar todo ';
export const DELET_ALL_TODO = '[TODO] eliminar all todo ';
export const ALL_TODO = '[TODO] All todo ';




export class AgregarTodoAction implements Action {
    readonly type = AGREGAR_TODO;
    constructor (public texto: string){

    }
}
export class ToggleTodoAction implements Action {
    readonly type = TOGGLE_TODO;
    constructor (  public id: number){

    }
}
export class AllTodoAction implements Action {
    readonly type = ALL_TODO;
    constructor (  public completado: boolean ){

    }
}
export class EditarTodoAction implements Action {
    readonly type = EDITAR_TODO;
    constructor (  public id: number,public txt : string){

    }
}

export class DeletTodoAction implements Action {
    readonly type = DELET_TODO;
    constructor (  public id: number){

    }
}
export class DeletCompleteTodoAction implements Action {
    readonly type = DELET_ALL_TODO;
}
export  type Acciones = AgregarTodoAction |
                            ToggleTodoAction |
                            EditarTodoAction |
                            DeletTodoAction |
                            DeletCompleteTodoAction |
                            AllTodoAction;