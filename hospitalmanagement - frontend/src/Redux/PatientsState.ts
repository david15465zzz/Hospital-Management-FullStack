import { createStore } from "redux";
import PatientModel from "../Models/PatientModel";

export class  PatientsState {
    public patients: PatientModel[] = []; // new Array();
}

// 2. Action Types: list of actions to perform on the state
export enum   PatientsActionType {
    FetchPatient, AddPatient, EditPatient, DeletePatient
}

// 3. Action: interface with ActionType and payload
export interface  PatientAction {
    type:   PatientsActionType,
    payload: any
}

// 4. Action creators: functions to create Actions
export function  PatientFetchAction(patient: PatientModel[]){
    return {type:   PatientsActionType.FetchPatient, payload: patient};
}
export function  PatientAddAction(patient: PatientModel){
    return {type:   PatientsActionType.AddPatient, payload: patient};
}
export function  PatientEditAction(patient: PatientModel){
    return {type:   PatientsActionType.EditPatient, payload: patient};
}
export function  PatientDeleteAction(id: string){
    return {type:   PatientsActionType.DeletePatient, payload: id};
}


export function  PatientsReducer(currentState = new  PatientsState(), action:  PatientAction):  PatientsState {
   
    const newState = { ...currentState }; 

    switch (action.type) {

        case   PatientsActionType.FetchPatient:
            newState.patients = action.payload; 
            break;

        case   PatientsActionType.AddPatient: 
            newState.patients.push(action.payload);
            break;

        case   PatientsActionType.EditPatient: 
            const indexToEdit = newState.patients.findIndex(p=>p.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.patients[indexToEdit] = action.payload;
            break;

        case   PatientsActionType.DeletePatient: 
            const indexToDelete = newState.patients.findIndex(p=>p.id == action.payload);
            if(indexToDelete >= 0)
                newState.patients.splice(indexToDelete, 1);
            break;

    }

    return newState;
}


export const PatientStore = createStore( PatientsReducer);