package hospitalManagement.hospitalManagement.controller;


import hospitalManagement.hospitalManagement.Facade.HospitalFacade;
import hospitalManagement.hospitalManagement.beans.Doctor;
import hospitalManagement.hospitalManagement.beans.Employee;
import hospitalManagement.hospitalManagement.beans.Nurse;
import hospitalManagement.hospitalManagement.beans.Patient;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class HospitalController {

    private HospitalFacade hospitalFacade;

    public HospitalController(HospitalFacade hospitalFacade) {
        this.hospitalFacade = hospitalFacade;
    }

    ///////////Doctor
    @PostMapping(path = "/createDoctor")
    public Doctor createDoctor(@RequestBody Doctor doctor){
        return hospitalFacade.createDoctor(doctor);
    }
    @GetMapping(path = "/getDoctors")
    public List<Doctor> getDoctors(){
        return hospitalFacade.getDoctors();
    }
    @DeleteMapping(path = "/deleteDoctor/{id}")
    public void deleteDoctor(@PathVariable String id){
        hospitalFacade.deleteDoctor(id);
    }
    @PutMapping(path = "/updateDoctor")
    public Doctor updateDoctor(@RequestBody Doctor doctor){
        return hospitalFacade.updateDoctor(doctor);
    }


    ///////////////Nurse
    @PostMapping(path = "/createNurse")
    public Nurse createNurse(@RequestBody Nurse nurse){
        return hospitalFacade.createNurse(nurse);
    }
    @GetMapping(path = "/getNurses")
    public List<Nurse> getNurses(){
        return hospitalFacade.getNurses();
    }
    @DeleteMapping(path = "/deleteNurse/{id}")
    public void deleteNurse(@PathVariable String id){
        hospitalFacade.deleteNurse(id);
    }
    @PutMapping(path = "/updateNurse")
    public Nurse updateNurse(@RequestBody Nurse nurse){
        return hospitalFacade.updateNurse(nurse);
    }


    ////////////////Employee
    @PostMapping(path = "/createEmployee")
    public Employee createEmployee(@RequestBody Employee employee){
        return hospitalFacade.createEmployee(employee);
    }
    @GetMapping(path = "/getEmployees")
    public List<Employee> getEmployees(){
        return hospitalFacade.getEmployees();
    }
    @DeleteMapping(path = "/deleteEmployee/{id}")
    public void deleteEmployee(@PathVariable String id){
        hospitalFacade.deleteEmployee(id);
    }
    @PutMapping(path = "/updateEmployee")
    public Employee updateEmployee(@RequestBody Employee employee){
        return hospitalFacade.updateEmployee(employee);
    }


    ////////////Patient
    @PostMapping(path = "/createPatient")
    public Patient createPatient(@RequestBody Patient patient ){
        return hospitalFacade.createPatient(patient);
    }
    @GetMapping(path = "/getPatients")
    public List<Patient> getPatients(){
        return hospitalFacade.getPatients();
    }
    @DeleteMapping(path = "/deletePatient/{id}")
    public void deletePatient(@PathVariable String id){
        hospitalFacade.deletePatient(id);
    }
    @PutMapping(path = "/updatePatient")
    public Patient updatePatient(@RequestBody Patient patient){
        return hospitalFacade.updatePatient(patient);
    }
}
