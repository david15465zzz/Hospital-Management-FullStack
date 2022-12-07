import { DoctorAddAction, DoctorDeleteAction, DoctorEditAction, DoctorFetchAction, DoctorsStore } from "../Redux/DoctorsState";
import axios from "axios";
import DoctorModel from "../Models/DoctorModel";
import appConfig from "../Utils/Config";
import { EmployeeAddAction, EmployeeDeleteAction, EmployeeEditAction, EmployeeFetchAction, EmployeeStore } from "../Redux/EmployeesState";
import EmployeeModel from "../Models/EmployeeModel";
import { NurseAddAction, NurseDeleteAction, NurseEditAction, NurseFetchAction, NurseStore } from "../Redux/NursesState";
import NurseModel from "../Models/NurseModel";
import PatientModel from "../Models/PatientModel";
import { PatientAddAction, PatientDeleteAction, PatientEditAction, PatientFetchAction, PatientStore } from "../Redux/PatientsState";
class HospitalService {

/////Doctors

public async getDoctors() {
    if (DoctorsStore.getState().doctors.length === 0) {

        const response = await axios.get<DoctorModel[]>(appConfig.backendUrl + "getDoctors");
        DoctorsStore.dispatch(DoctorFetchAction(response.data));
        return response.data;
    } else {
        return DoctorsStore.getState().doctors;
    }
}

public async getOneDocter(id: string) {
    const doctor = DoctorsStore.getState().doctors.find(p => p.id === id);
    if (typeof doctor === "undefined")
        throw new Error("No doctor found");
    return doctor;
}


public async deleteDocter(id: string) {
    await axios.delete(appConfig.backendUrl + "deleteDoctor/" + id);
    DoctorsStore.dispatch(DoctorDeleteAction(id));

}

public async addDocter(doctor: DoctorModel) {
    const response = await axios.post(appConfig.backendUrl + "createDoctor", doctor);
    const newDoctor = response.data;
    DoctorsStore.dispatch(DoctorAddAction(newDoctor));
}


public async editDocter(doctor: DoctorModel) {
        const response = await axios.put(appConfig.backendUrl + "updateDoctor", doctor);
        const newDoctor = response.data;
        DoctorsStore.dispatch(DoctorEditAction(newDoctor));
}

////////Employees

public async getEmployees() {
    if (EmployeeStore.getState().employees.length === 0) {

        const response = await axios.get<EmployeeModel[]>(appConfig.backendUrl + "getEmployees");
        EmployeeStore.dispatch(EmployeeFetchAction(response.data));
        return response.data;
    } else {
        return EmployeeStore.getState().employees;
    }
}

public async getOneEmployee(id: string) {
    const employee = EmployeeStore.getState().employees.find(p => p.id === id);
    if (typeof employee === "undefined")
        throw new Error("No employee found");
    return employee;
}


public async deleteEmployee(id: string) {
    await axios.delete(appConfig.backendUrl + "deleteEmployee/" + id);
    EmployeeStore.dispatch(EmployeeDeleteAction(id));

}

public async addEmployee(employee: EmployeeModel) {
    const response = await axios.post(appConfig.backendUrl + "createEmployee", employee);
    const newEmployee = response.data;
    EmployeeStore.dispatch(EmployeeAddAction(newEmployee));
}


public async editEmployee(employee: EmployeeModel) {
        const response = await axios.put(appConfig.backendUrl + "updateEmployee", employee);
        const newEmployee = response.data;
        EmployeeStore.dispatch(EmployeeEditAction(newEmployee));
}

////////Nurses

public async getNurses() {
    if (NurseStore.getState().nurses.length === 0) {

        const response = await axios.get<NurseModel[]>(appConfig.backendUrl + "getNurses");
        NurseStore.dispatch(NurseFetchAction(response.data));
        return response.data;
    } else {
        return NurseStore.getState().nurses;
    }
}

public async getOneNurse(id: string) {
    const nurse = NurseStore.getState().nurses.find(p => p.id === id);
    if (typeof nurse === "undefined")
        throw new Error("No nurse found");
    return nurse;
}


public async deleteNurse(id: string) {
    await axios.delete(appConfig.backendUrl + "deleteNurse/" + id);
    NurseStore.dispatch(NurseDeleteAction(id));

}

public async addNurse(nurse: NurseModel) {
    const response = await axios.post(appConfig.backendUrl + "createNurse", nurse);
    const newNurse = response.data;
    NurseStore.dispatch(NurseAddAction(newNurse));
}


public async editNurse(nurse: NurseModel) {
        const response = await axios.put(appConfig.backendUrl + "updateNurse", nurse);
        const newNurse = response.data;
        NurseStore.dispatch(NurseEditAction(newNurse));
}

////////Patients

public async getPatients() {
    if (PatientStore.getState().patients.length === 0) {

        const response = await axios.get<PatientModel[]>(appConfig.backendUrl + "getPatients");
        PatientStore.dispatch(PatientFetchAction(response.data));
        return response.data;
    } else {
        return PatientStore.getState().patients;
    }
}

public async getOnePatient(id: string) {
    const patient = PatientStore.getState().patients.find(p => p.id === id);
    if (typeof patient === "undefined")
        throw new Error("No patient found");
    return patient;
}


public async deletePatient(id: string) {
    await axios.delete(appConfig.backendUrl + "deletePatient/" + id);
    PatientStore.dispatch(PatientDeleteAction(id));

}

public async addPatient(patient: PatientModel) {
    const response = await axios.post(appConfig.backendUrl + "createPatient", patient);
    const newPatient = response.data;
    PatientStore.dispatch(PatientAddAction(newPatient));
}


public async editPatient(patient: PatientModel) {
        const response = await axios.put(appConfig.backendUrl + "updatePatient", patient);
        const newPatient = response.data;
        PatientStore.dispatch(PatientEditAction(newPatient));
}


}
const hospitalService = new HospitalService();

export default hospitalService;