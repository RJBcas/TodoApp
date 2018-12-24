import { Todo } from "./todo/model/todo.model";
import { ActionReducerMap } from "@ngrx/store";

import * as fromTodo from './todo/todo.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFiltroAction from "./filter/filter.action";

export interface AppState{
    todos: Todo[];
    filtro: fromFiltroAction.FiltrosValidos ;
}

export const appReducer : ActionReducerMap<AppState> = {
todos: fromTodo.todoReducer,
filtro : fromFilter.filtroReducer 
};