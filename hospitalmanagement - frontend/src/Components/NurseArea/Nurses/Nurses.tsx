import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DoctorModel from "../../../Models/DoctorModel";
import NurseModel from "../../../Models/NurseModel";
import hospitalService from "../../../Services/HospitalService";
import NurseCard from "../NurseCard/NurseCard";
import "./Nurses.css";

function Nurses(): JSX.Element {
    const navigate = useNavigate();
    const [nurses,setNurses] = useState<NurseModel[]>([]);

    useEffect( () => { 
        hospitalService.getNurses()
        .then( prods => setNurses(prods)  )
        .catch( err => {alert(err.message); console.log(err);}
         );
    }, []);

    function goToAdd(){
        navigate("/addNurse");
    }
    

    return (
        <div className="Nurses">
            <div><button id="button" onClick={goToAdd}>Add Nurse</button></div>
            {nurses.map(n=><NurseCard nurse={n} key={n.id} />)}
        </div>
    );
}

export default Nurses;
