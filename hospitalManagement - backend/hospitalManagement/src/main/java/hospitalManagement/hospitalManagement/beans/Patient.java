package hospitalManagement.hospitalManagement.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.Date;
@Document
public class Patient extends Human {
    @Id
    private String id;
    private Date arrival;
    private String disease;
    private boolean stillBeingTreated;

    public Patient(String firstName, String lastName, int age, String id, Date arrival, String disease, boolean stillBeingTreated) {
        super(firstName, lastName, age);
        this.id = id;
        this.arrival = arrival;
        this.disease = disease;
        this.stillBeingTreated = stillBeingTreated;
    }

    public String getId() {
        return id;
    }


    public Date getArrival() {
        return arrival;
    }

    public void setArrival(Date arrival) {
        this.arrival = arrival;
    }

    public String getDisease() {
        return disease;
    }

    public void setDisease(String disease) {
        this.disease = disease;
    }

    public boolean isStillBeingTreated() {
        return stillBeingTreated;
    }

    public void setStillBeingTreated(boolean stillBeingTreated) {
        this.stillBeingTreated = stillBeingTreated;
    }
}


