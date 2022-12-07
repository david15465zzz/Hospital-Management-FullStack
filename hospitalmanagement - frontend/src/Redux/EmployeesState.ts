import { createStore } from "redux";
import EmployeeModel from "../Models/EmployeeModel";
export class  EmployeesState {
    public employees: EmployeeModel[] = []; // new Array();
}

// 2. Action Types: list of actions to perform on the state
export enum  EmployeesActionType {
    FetchEmployee, AddEmployee, EditEmployee, DeleteEmployee
}

// 3. Action: interface with ActionType and payload
export interface EmployeeAction {
    type:  EmployeesActionType,
    payload: any
}

// 4. Action creators: functions to create Actions
export function  EmployeeFetchAction(employee: EmployeeModel[]){
    return {type:  EmployeesActionType.FetchEmployee, payload: employee};
}
export function  EmployeeAddAction(employee: EmployeeModel){
    return {type:  EmployeesActionType.AddEmployee, payload: employee};
}
export function  EmployeeEditAction(employee: EmployeeModel){
    return {type:  EmployeesActionType.EditEmployee, payload: employee};
}
export function  EmployeeDeleteAction(id: string){
    return {type:  EmployeesActionType.DeleteEmployee, payload: id};
}


export function  EmployeesReducer(currentState = new  EmployeesState(), action: EmployeeAction):  EmployeesState {
   
    const newState = { ...currentState }; 

    switch (action.type) {

        case  EmployeesActionType.FetchEmployee:
            newState.employees = action.payload; 
            break;

        case  EmployeesActionType.AddEmployee: 
            newState.employees.push(action.payload);
            break;

        case  EmployeesActionType.EditEmployee: 
            const indexToEdit = newState.employees.findIndex(p=>p.id == action.payload.id);
            if(indexToEdit >= 0)
                newState.employees[indexToEdit] = action.payload;
            break;

        case  EmployeesActionType.DeleteEmployee: 
            const indexToDelete = newState.employees.findIndex(p=>p.id == action.payload);
            if(indexToDelete >= 0)
                newState.employees.splice(indexToDelete, 1);
            break;

    }

    return newState;
}


export const EmployeeStore = createStore( EmployeesReducer);