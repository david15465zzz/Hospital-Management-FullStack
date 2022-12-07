import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./EmployeeCard.css";

interface  EmployeesProps{
    employee : EmployeeModel
}
function EmployeeCard(props:EmployeesProps): JSX.Element {
    const navigate = useNavigate();

    function goToEdit(){
        navigate("/editEmployee/" + props.employee.id);
    }

    function deleteEmployee(){
        if(window.confirm("Are you sure?")){
            hospitalService.deleteEmployee(props.employee.id)
                .then( () => {
                    notificationService.success("deleted!");
                    navigate("/employees");

                })
                .catch( err=>notificationService.error(err) )
        }
    }

   
    return (
        <div className="EmployeeCard box">
			<div>
            <h3>First name:<span>{props.employee.firstName}</span>&emsp;&emsp;
             Last name:<span>{props.employee.firstName}</span>&emsp;&emsp;
              Age:<span>{props.employee.age}</span>&emsp;&emsp;
               Job:<span>{props.employee.job}</span>
             </h3>
            <Button variant="outlined" onClick={deleteEmployee}>Delete</Button> &emsp;
                <Button variant="contained" onClick={goToEdit}>Edit</Button>
            </div>
        </div>
    );

}

export default EmployeeCard;
