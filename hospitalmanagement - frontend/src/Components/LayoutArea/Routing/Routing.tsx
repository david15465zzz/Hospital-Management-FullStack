import { Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import AddDoctor from "../../DoctorsArea/AddDoctor/AddDoctor";
import Doctors from "../../DoctorsArea/Doctors/Doctors";
import EditDoctor from "../../DoctorsArea/EditDoctor/EditDoctor";
import AddEmployee from "../../EmployeeArea/AddEmployee/AddEmployee";
import EditEmployee from "../../EmployeeArea/EditEmployee/EditEmployee";
import Employees from "../../EmployeeArea/Employees/Employees";
import AddNurse from "../../NurseArea/AddNurse/AddNurse";
import EditNurse from "../../NurseArea/EditNurse/EditNurse";
import Nurses from "../../NurseArea/Nurses/Nurses";
import AddPatient from "../../PatientArea/AddPatient/AddPatient";
import EditPatient from "../../PatientArea/EditPatient/EditPatient";
import Patients from "../../PatientArea/Patients/Patients";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
      <div className="Routing">
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/editDoctor/:prodid" element={<EditDoctor />} />
        <Route path="addDoctor" element={<AddDoctor />} />
        <Route path="/nurses" element={<Nurses />} />
        <Route path="/editNurse/:prodid" element={<EditNurse />} />
        <Route path="addNurse" element={<AddNurse />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/editEmployee/:prodid" element={<EditEmployee />} />
        <Route path="addEmployee" element={<AddEmployee />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/editPatient/:prodid" element={<EditPatient />} />
        <Route path="addPatient" element={<AddPatient />} />
        <Route path="*" element={<PageNotFound />} />

        </Routes>

       </div>
    );
}

export default Routing;
