package hospitalManagement.hospitalManagement.repositories;

import hospitalManagement.hospitalManagement.beans.Doctor;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface DockterRepository extends MongoRepository<Doctor, String> {
}
