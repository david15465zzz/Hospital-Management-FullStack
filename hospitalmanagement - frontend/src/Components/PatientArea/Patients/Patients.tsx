import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PatientModel from "../../../Models/PatientModel";
import hospitalService from "../../../Services/HospitalService";
import PatientCard from "../PatientCard/PatientCard";
import "./Patients.css";

function Patients(): JSX.Element {
    const navigate = useNavigate();
    const [patients,setPatients] = useState<PatientModel[]>([]);

    useEffect( () => { 
        console.log(hospitalService.getPatients())
        hospitalService.getPatients()
        .then( prods => setPatients(prods)  )
        .catch( err => {alert(err.message); console.log(err);}
         );
    }, []);

    function goToAdd(){
        navigate("/addPatient");
    }
    

    return (
        <div className="Patients">
            <div><button id="button" onClick={goToAdd}>Add Patient</button></div>
            {patients.map(p=><PatientCard patient={p} key={p.id} />)}
        </div>
    );
}

export default Patients;
