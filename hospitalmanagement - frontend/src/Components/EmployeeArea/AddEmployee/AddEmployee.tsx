import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./AddEmployee.css";

function AddEmployee(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<EmployeeModel>();
    const navigate = useNavigate();

    function send(employee: EmployeeModel){
        hospitalService.addEmployee(employee)
            .then(()=>{
                notificationService.success("employee added!");
                navigate("/employees");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="AddEmployee box">
			<form onSubmit={handleSubmit(send)}>
                

                <TextField id="firstName" label="firstName" variant="outlined" type="text"  {...register("firstName", {
                    required: {value: true, message: "fisrt name required!"},
                })} /><br/>
                <span className="error">{formState.errors?.firstName?.message}</span>
                <br></br>

                <TextField id="lastName" label="lastName" variant="outlined" type="text"  {...register("lastName", {
                    required: {value: true, message: "last name required!"},
                })} /><br/>
                <span className="error">{formState.errors?.lastName?.message}</span>
                <br></br>

                
                <TextField id="age" label="age" variant="outlined" type="number"  {...register("age",{
                       min: {value:0, message:"age cannot be  negative!"},
                      required: {value: true, message: "age required!"},
                })} /><br/>
                <span className="error">{formState.errors?.age?.message}</span>
                <br></br>

                
                <TextField id="job" label="job" variant="outlined" type="text"  {...register("job",{
                      required: {value: true, message: "job required!"},
                })} /><br/>
                <span className="error">{formState.errors?.job?.message}</span><br/>

                <Button variant="contained" type="submit" >Add</Button>
            </form>
        </div>
    );
}

export default AddEmployee;
