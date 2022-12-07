import DoctorModel from "../Models/DoctorModel";
import { createStore } from "redux";

export class DoctorsState {
    public doctors: DoctorModel[] = []; // new Array();
}

// 2. Action Types: list of actions to perform on the state
export enum DoctorsActionType {
    FetchDoctor, AddDoctor, EditDoctor, DeleteDoctor
}

// 3. Action: interface with ActionType and payload
export interface DoctorsAction {
    type: DoctorsActionType,
    payload: any
}

// 4. Action creators: functions to create Actions
export function DoctorFetchAction(doctor: DoctorModel[]){
    return {type: DoctorsActionType.FetchDoctor, payload: doctor};
}
export function DoctorAddAction(doctor: DoctorModel){
    return {type: DoctorsActionType.AddDoctor, payload: doctor};
}
export function DoctorEditAction(doctor: DoctorModel){
    return {type: DoctorsActionType.EditDoctor, payload: doctor};
}
export function DoctorDeleteAction(id: string){
    return {type: DoctorsActionType.DeleteDoctor, payload: id};
}


export function DoctorsReducer(currentState = new DoctorsState(), action: DoctorsAction): DoctorsState {
   
    const newState = { ...currentState }; 

    switch (action.type) {

        case DoctorsActionType.FetchDoctor:
            newState.doctors = action.payload; 
            break;

        case DoctorsActionType.AddDoctor: 
            newState.doctors.push(action.payload);
            break;

        case DoctorsActionType.EditDoctor: 
            const indexToEdit = newState.doctors.findIndex(p=>p.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.doctors[indexToEdit] = action.payload;
            break;

        case DoctorsActionType.DeleteDoctor: 
            const indexToDelete = newState.doctors.findIndex(p=>p.id == action.payload);
            if(indexToDelete >= 0)
                newState.doctors.splice(indexToDelete, 1);
            break;

    }

    return newState;
}


export const DoctorsStore = createStore(DoctorsReducer);


