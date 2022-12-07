import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./EditEmployee.css";

function EditEmployee(): JSX.Element {
    const {register, handleSubmit, formState, setValue} = useForm<EmployeeModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.prodid!;



    useEffect(()=>{
        hospitalService.getOneEmployee(id)
            .then((employee)=>{
                setValue("id", employee.id);
                setValue("firstName", employee.firstName);
                setValue("lastName", employee.lastName);
                setValue("age", employee.age);
                setValue("job", employee.job);
            })
            .catch(err=>notificationService.error(err))
    }, [])


    function send(employee: EmployeeModel){
        hospitalService.editEmployee(employee)
            .then(()=>{
                notificationService.success("employee updated!");
                navigate("/employees");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="EditEmployee box">
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

                <Button variant="contained" type="submit" >Edit</Button>
            </form>
			
        </div>
    );
}

export default EditEmployee;
