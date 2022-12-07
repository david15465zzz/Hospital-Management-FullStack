import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import NurseModel from "../../../Models/NurseModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./AddNurse.css";

function AddNurse(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<NurseModel>();
    const navigate = useNavigate();

    function send(nurse: NurseModel){
        hospitalService.addNurse(nurse)
            .then(()=>{
                notificationService.success("nurse added!");
                navigate("/nurses");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="AddNurse box">
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

                
                <TextField id="hospitalWard" label="hospitalWard" variant="outlined" type="text"  {...register("hospitalWard",{
                      required: {value: true, message: "hospitalWard required!"},
                })} /><br/>
                <span className="error">{formState.errors?.hospitalWard?.message}</span><br/>

                <Button variant="contained" type="submit" >Add</Button>
            </form>
        </div>
    );
}

export default AddNurse;
