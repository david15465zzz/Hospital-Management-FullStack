import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PatientModel from "../../../Models/PatientModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./AddPatient.css";

function AddPatient(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<PatientModel>();
    const navigate = useNavigate();

    function send(patient: PatientModel){
        hospitalService.addPatient(patient)
            .then(()=>{
                notificationService.success("patient added!");
                navigate("/patients");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="AddPatient box">
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

                
                <TextField id="disease" label="disease" variant="outlined" type="text"  {...register("disease",{
                      required: {value: true, message: "disease required!"},
                })} /><br/>
                <span className="error">{formState.errors?.disease?.message}</span><br/>

             

                <label>arrival</label><br />
                <input type="datetime-local" id="arrival" {...register("arrival", {
                })} /><br />
                <span className="error">{formState.errors?.arrival?.message}</span><br />

                <Button variant="contained" type="submit" >Add</Button>
            </form>
        </div>
    );
}

export default AddPatient;
