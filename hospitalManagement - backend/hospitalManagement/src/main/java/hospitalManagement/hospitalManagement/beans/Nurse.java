package hospitalManagement.hospitalManagement.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document
public class Nurse extends Human {
    @Id
    private String id;

    private String hospitalWard;

    public Nurse(String firstName, String lastName, int age, String id, String hospitalWard) {
        super(firstName, lastName, age);
        this.id = id;
        this.hospitalWard = hospitalWard;
    }

    public String getId() {
        return id;
    }


    public String getHospitalWard() {
        return hospitalWard;
    }

    public void setHospitalWard(String hospitalWard) {
        this.hospitalWard = hospitalWard;
    }
}


