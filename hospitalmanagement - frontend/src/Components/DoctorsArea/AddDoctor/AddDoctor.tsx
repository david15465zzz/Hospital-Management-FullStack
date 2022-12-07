import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import DoctorModel from "../../../Models/DoctorModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./AddDoctor.css";

function AddDoctor(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<DoctorModel>();
    const navigate = useNavigate();

    function send(doctor: DoctorModel){
        hospitalService.addDocter(doctor)
            .then(()=>{
                notificationService.success("doctor added!");
                navigate("/doctors");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }

    return (
        <div className="AddDoctor box">
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

                
                <TextField id="domain" label="domain" variant="outlined" type="text"  {...register("domain",{
                      required: {value: true, message: "domain required!"},
                })} /><br/>
                <span className="error">{formState.errors?.domain?.message}</span><br/>

                <Button variant="contained" type="submit" >Add</Button>
            </form>
        </div>
    );
}

export default AddDoctor;
