import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import hospitalService from "../../../Services/HospitalService";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./Employees.css";

function Employees(): JSX.Element {
    const navigate = useNavigate();
    const [employees,setEmployees] = useState<EmployeeModel[]>([]);

    useEffect( () => { 
        hospitalService.getEmployees()
        .then( prods => setEmployees(prods)  )
        .catch( err => {alert(err.message); console.log(err);}
         );
    }, []);

    function goToAdd(){
        navigate("/addEmployee");
    }
    

    return (
        <div className="Employees">
            <div><button id="button" onClick={goToAdd}>Add Employee</button></div>
            {employees.map(e=><EmployeeCard employee={e} key={e.id} />)}
        </div>
    );
}

export default Employees;
