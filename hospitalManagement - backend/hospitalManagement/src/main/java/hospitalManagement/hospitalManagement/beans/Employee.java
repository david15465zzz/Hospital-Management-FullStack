package hospitalManagement.hospitalManagement.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Employee extends Human{
    @Id
    private String id;

    private String job;

    public Employee(String firstName, String lastName, int age, String id, String job) {
        super(firstName, lastName, age);
        this.id = id;
        this.job = job;
    }

    public String getId() {
        return id;
    }



    public String getJob() {
        return job;
    }

    public void setJob(String job) {
        this.job = job;
    }
}
