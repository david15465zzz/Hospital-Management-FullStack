package hospitalManagement.hospitalManagement.repositories;


import hospitalManagement.hospitalManagement.beans.Nurse;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface NurseRepository  extends MongoRepository<Nurse, String> {
}
