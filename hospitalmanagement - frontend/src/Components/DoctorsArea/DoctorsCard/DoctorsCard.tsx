import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DoctorModel from "../../../Models/DoctorModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./DoctorsCard.css";

interface  DoctorsProps{
    doctor : DoctorModel
}
function DoctorsCard(props:DoctorsProps): JSX.Element {
    const navigate = useNavigate();

    function goToEdit(){
        navigate("/editDoctor/" + props.doctor.id);
    }

    function deleteDoctor(){
        if(window.confirm("Are you sure?")){
            hospitalService.deleteDocter(props.doctor.id)
                .then( () => {
                    notificationService.success("deleted!");
                    navigate("/doctors");

                })
                .catch( err=>notificationService.error(err) )
        }
    }

   
    return (
        <div className="DoctorsCard box">
			<div>
            <h3>First name:<span>{props.doctor.firstName}</span>&emsp;&emsp;
             Last name:<span>{props.doctor.firstName}</span>&emsp;&emsp;
              Age:<span>{props.doctor.age}</span>&emsp;&emsp;
               Domain:<span>{props.doctor.domain}</span>
             </h3>
            <Button variant="outlined" onClick={deleteDoctor}>Delete</Button> &emsp;
                <Button variant="contained" onClick={goToEdit}>Edit</Button>
            </div>
        </div>
    );

}



export default DoctorsCard;
