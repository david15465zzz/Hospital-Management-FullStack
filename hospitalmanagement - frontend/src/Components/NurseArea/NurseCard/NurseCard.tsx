import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import NurseModel from "../../../Models/NurseModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./NurseCard.css";
    interface  NursesProps{
        nurse : NurseModel
    }
    function NurseCard(props:NursesProps): JSX.Element {
        const navigate = useNavigate();
    
        function goToEdit(){
            navigate("/editNurse/" + props.nurse.id);
        }
    
        function deleteNurse(){
            if(window.confirm("Are you sure?")){
                hospitalService.deleteNurse(props.nurse.id)
                    .then( () => {
                        notificationService.success("deleted!");
                        navigate("/nurses");
    
                    })
                    .catch( err=>notificationService.error(err) )
            }
        }
    return (
        <div className="NurseCard box">
			<div>
            <h3>First name:<span>{props.nurse.firstName}</span>&emsp;&emsp;
             Last name:<span>{props.nurse.firstName}</span>&emsp;&emsp;
              Age:<span>{props.nurse.age}</span>&emsp;&emsp;
              HospitalWard:<span>{props.nurse.hospitalWard}</span>
             </h3>
            <Button variant="outlined" onClick={deleteNurse}>Delete</Button> &emsp;
                <Button variant="contained" onClick={goToEdit}>Edit</Button>
            </div>
        </div>
    );
}

export default NurseCard;
