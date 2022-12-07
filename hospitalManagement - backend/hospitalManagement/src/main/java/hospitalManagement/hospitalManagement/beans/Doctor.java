package hospitalManagement.hospitalManagement.beans;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document
public class Doctor extends Human {
    @Id
    private  String id;

    private String domain;

    public Doctor(String firstName, String lastName, int age, String id, String domain) {
        super(firstName, lastName, age);
        this.id = id;
        this.domain = domain;
    }

    public String getId() {
        return id;
    }


    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }
}
