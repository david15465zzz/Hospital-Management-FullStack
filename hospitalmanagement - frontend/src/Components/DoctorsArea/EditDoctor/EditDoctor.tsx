import { Button, TextField } from "@mui/material";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import DoctorModel from "../../../Models/DoctorModel";
import hospitalService from "../../../Services/HospitalService";
import notificationService from "../../../Services/NotificationService";
import "./EditDoctor.css";

function EditDoctor(): JSX.Element {
    const {register, handleSubmit, formState, setValue} = useForm<DoctorModel>();
    const navigate = useNavigate();
    const params = useParams();
    const id = params.prodid!;



    useEffect(()=>{
        hospitalService.getOneDocter(id)
            .then((doctor)=>{
                setValue("id", doctor.id);
                setValue("firstName", doctor.firstName);
                setValue("lastName", doctor.lastName);
                setValue("age", doctor.age);
                setValue("domain", doctor.domain);
            })
            .catch(err=>notificationService.error(err))
    }, [])


    function send(doctor: DoctorModel){
        hospitalService.editDocter(doctor)
            .then(()=>{
                notificationService.success("doctor updated!");
                navigate("/doctors");
            })
            .catch(err=>{
                notificationService.error(err);
            })
    }
    return (
        <div className="EditDoctor box">
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

                <Button variant="contained" type="submit" >Edit</Button>
            </form>
			
        </div>
    );
}

export default EditDoctor;
