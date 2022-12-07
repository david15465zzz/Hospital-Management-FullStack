
import { createStore } from "redux";
import NurseModel from "../Models/NurseModel";
export class  NursesState {
    public nurses: NurseModel[] = []; // new Array();
}

// 2. Action Types: list of actions to perform on the state
export enum  NursesActionType {
    FetchNurse, AddNurse, EditNurse, DeleteNurse
}

// 3. Action: interface with ActionType and payload
export interface NurseAction {
    type:  NursesActionType,
    payload: any
}

// 4. Action creators: functions to create Actions
export function  NurseFetchAction(nurse: NurseModel[]){
    return {type:  NursesActionType.FetchNurse, payload: nurse};
}
export function  NurseAddAction(nurse: NurseModel){
    return {type:  NursesActionType.AddNurse, payload: nurse};
}
export function  NurseEditAction(nurse: NurseModel){
    return {type:  NursesActionType.EditNurse, payload: nurse};
}
export function  NurseDeleteAction(id: string){
    return {type:  NursesActionType.DeleteNurse, payload: id};
}


export function  NursesReducer(currentState = new  NursesState(), action: NurseAction):  NursesState {
   
    const newState = { ...currentState }; 

    switch (action.type) {

        case  NursesActionType.FetchNurse:
            newState.nurses = action.payload; 
            break;

        case  NursesActionType.AddNurse: 
            newState.nurses.push(action.payload);
            break;

        case  NursesActionType.EditNurse: 
            const indexToEdit = newState.nurses.findIndex(p=>p.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.nurses[indexToEdit] = action.payload;
            break;

        case  NursesActionType.DeleteNurse: 
            const indexToDelete = newState.nurses.findIndex(p=>p.id == action.payload);
            if(indexToDelete >= 0)
                newState.nurses.splice(indexToDelete, 1);
            break;

    }

    return newState;
}


export const NurseStore = createStore( NursesReducer);