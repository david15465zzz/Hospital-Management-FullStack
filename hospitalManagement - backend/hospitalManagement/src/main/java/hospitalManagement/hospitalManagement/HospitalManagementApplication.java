package hospitalManagement.hospitalManagement;

import hospitalManagement.hospitalManagement.job.DeletePatientJob;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class HospitalManagementApplication {

	public static void main(String[] args) {
		ConfigurableApplicationContext ctx = SpringApplication.run(HospitalManagementApplication.class, args);
		DeletePatientJob deletePatientJob= ctx.getBean(DeletePatientJob.class);
		deletePatientJob.run();
	}

}
