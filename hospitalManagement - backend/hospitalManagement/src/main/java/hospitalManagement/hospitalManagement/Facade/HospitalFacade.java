package hospitalManagement.hospitalManagement.Facade;

import hospitalManagement.hospitalManagement.beans.Doctor;
import hospitalManagement.hospitalManagement.beans.Employee;
import hospitalManagement.hospitalManagement.beans.Nurse;
import hospitalManagement.hospitalManagement.beans.Patient;
import hospitalManagement.hospitalManagement.repositories.DockterRepository;
import hospitalManagement.hospitalManagement.repositories.EmployeeRepository;
import hospitalManagement.hospitalManagement.repositories.NurseRepository;
import hospitalManagement.hospitalManagement.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class HospitalFacade {

    private DockterRepository dockterRepository;

    private EmployeeRepository employeeRepository;

    private PatientRepository patientRepository;

    private NurseRepository nurseRepository;

    public HospitalFacade(DockterRepository dockterRepository, EmployeeRepository employeeRepository, PatientRepository patientRepository, NurseRepository nurseRepository) {
        this.dockterRepository = dockterRepository;
        this.employeeRepository = employeeRepository;
        this.patientRepository = patientRepository;
        this.nurseRepository = nurseRepository;
    }
///////////Dockter
    public Doctor createDoctor(Doctor doctor){
      return dockterRepository.save(doctor);
    }

    public List<Doctor> getDoctors(){
        return dockterRepository.findAll();
    }

    public void deleteDoctor(String id){
        dockterRepository.deleteById(id);
    }
    public Doctor updateDoctor(Doctor doctor){
        return dockterRepository.save(doctor);
    }
///////////////Nurse
    public Nurse createNurse(Nurse nurse){
        return nurseRepository.save(nurse);
    }

    public List<Nurse> getNurses(){
        return nurseRepository.findAll();
    }

    public void deleteNurse(String id){
        nurseRepository.deleteById(id);
    }
    public Nurse updateNurse(Nurse nurse){
        return nurseRepository.save(nurse);
    }
////////////////Employee
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public List<Employee> getEmployees(){
        return employeeRepository.findAll();
    }

    public void deleteEmployee(String id){
        employeeRepository.deleteById(id);
    }
    public Employee updateEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
////////////Patient
    public Patient createPatient(Patient patient){
        patient.setStillBeingTreated(true);
        return patientRepository.save( patient);
    }

    public List<Patient> getPatients(){
        return patientRepository.findAll();
    }

    public void deletePatient(String id){
        patientRepository.deleteById(id);
    }
    public Patient updatePatient(Patient patient){
        return patientRepository.save( patient);
    }
}
