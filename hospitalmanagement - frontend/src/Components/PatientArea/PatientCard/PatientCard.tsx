import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PatientModel from "../../../Models/PatientModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./PatientCard.css";

interface  PatientsProps{
    patient : PatientModel
}
function PatientCard(props:PatientsProps): JSX.Element {
    const navigate = useNavigate();

    function goToEdit(){
        navigate("/editPatient/" + props.patient.id);
    }

    function deletePatient(){
        if(window.confirm("Are you sure?")){
            hospitalService.deletePatient(props.patient.id)
                .then( () => {
                    notificationService.success("deleted!");
                    navigate("/patients");

                })
                .catch( err=>notificationService.error(err) )
        }
    }

   console.log(props.patient.stillBeingTreated)
    return (
        <div className="PatientCard box">
			<div>
            <h3>First name:<span>{props.patient.firstName}</span>&emsp;&emsp;
             Last name:<span>{props.patient.firstName}</span>&emsp;&emsp;
              Age:<span>{props.patient.age}</span>&emsp;&emsp;
              disease:<span>{props.patient.disease}</span>&emsp;&emsp;
              arrival:<span>{props.patient.arrival as any}</span>&emsp;&emsp;
              {props.patient.stillBeingTreated ==true &&
                <>stillBeingTreated:<span>yes</span></>}
                {props.patient.stillBeingTreated == false &&
                <>stillBeingTreated:<span>no</span></>}
              </h3>
              
             

           
            <Button variant="outlined" onClick={deletePatient}>Delete</Button> &emsp;
                <Button variant="contained" onClick={goToEdit}>Edit</Button>
            </div>
        </div>
    );

}

export default PatientCard;
