import { Action } from '@ngrx/store';


export const SET_FILTRO = '[Filter] set filter';

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';
export class SetFiltroAction implements Action {
    readonly type = SET_FILTRO;
    constructor ( public filtro : FiltrosValidos ){

    }
}
export type acciones = SetFiltroAction;
