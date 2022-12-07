package hospitalManagement.hospitalManagement.job;


import hospitalManagement.hospitalManagement.beans.Patient;
import hospitalManagement.hospitalManagement.repositories.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DeletePatientJob  implements Runnable {

    private boolean isWorking = true;

    private  PatientRepository patientRepository;

    public DeletePatientJob(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }

    public void setWorking(boolean working) {
        isWorking = working;
    }

    @Override
    public void run() {
        while (isWorking) {
            List<Patient> patientList = patientRepository.findAll();
            for (Patient patient : patientList) {
                if (patient.isStillBeingTreated()==false)
                    patientRepository.deleteById(patient.getId());
            }
            try {
                Thread.sleep(86400000);
            } catch (InterruptedException e) {
                System.out.println("Error encountered while attempting to run daily task");


            }


        }
    }

}

