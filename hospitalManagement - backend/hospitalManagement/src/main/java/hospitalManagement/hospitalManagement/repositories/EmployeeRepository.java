package hospitalManagement.hospitalManagement.repositories;


import hospitalManagement.hospitalManagement.beans.Employee;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface EmployeeRepository  extends MongoRepository<Employee, String> {
}
