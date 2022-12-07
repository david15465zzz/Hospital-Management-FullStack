package hospitalManagement.hospitalManagement.repositories;

import hospitalManagement.hospitalManagement.beans.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository  extends MongoRepository<Patient, String> {
}
