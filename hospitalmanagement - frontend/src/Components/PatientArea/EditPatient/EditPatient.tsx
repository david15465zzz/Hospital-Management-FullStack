import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import PatientModel from "../../../Models/PatientModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./EditPatient.css";

function EditPatient(): JSX.Element {
    const {register, handleSubmit, formState, setValue} = useForm<PatientModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.prodid!;



    useEffect(()=>{
        hospitalService.getOnePatient(id)
            .then((patient)=>{
                setValue("id", patient.id);
                setValue("firstName", patient.firstName);
                setValue("lastName", patient.lastName);
                setValue("age", patient.age);
                setValue("arrival", patient.arrival);
                setValue("disease", patient.disease);
                setValue("stillBeingTreated", patient.stillBeingTreated);
            })
            .catch(err=>notificationService.error(err))
    }, [])

    function send(patient: PatientModel){
        hospitalService.editPatient(patient)
            .then(()=>{
                notificationService.success("patient updated!");
                navigate("/patients");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="EditPatient box">
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


                <label>stillBeingTreated?</label><br /><br />
                <select {...register("stillBeingTreated")}>
                    <option value="true">Yes</option>
                    <option value="false">NO</option>
                </select><br /><br />

                <label>arrival</label><br /><br />
                <input type="datetime-local" id="arrival" {...register("arrival", {
                })} /><br />
                <span className="error">{formState.errors?.arrival?.message}</span><br />

                <Button variant="contained" type="submit" >Edit</Button>
            </form>
        </div>
    );
}

export default EditPatient;
