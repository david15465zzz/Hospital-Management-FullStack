import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorModel from "../../../Models/DoctorModel";
import { DoctorsStore } from "../../../Redux/DoctorsState";
import hospitalService from "../../../Services/HospitalService";
import DoctorsCard from "../DoctorsCard/DoctorsCard";
import "./Doctors.css";

function Doctors(): JSX.Element {
    const navigate = useNavigate();
    const [doctors,setDoctors] = useState<DoctorModel[]>([]);

    useEffect( () => { 
        hospitalService.getDoctors()
        .then( prods => setDoctors(prods)  )
        .catch( err => {alert(err.message); console.log(err);}
         );
    }, []);

    function goToAdd(){
        navigate("/addDoctor");
    }
    

    return (
        <div className="Doctors">
            <div><button id="button" onClick={goToAdd}>Add Doctor</button></div>
            {doctors.map(d=><DoctorsCard doctor={d} key={d.id} />)}
        </div>
    );
}


export default Doctors;
