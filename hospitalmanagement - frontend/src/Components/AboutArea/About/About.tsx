import "./About.css";

function About(): JSX.Element {
    return (
        <div className="About">
		  <h2>  David.Sheymovich HospitalManagement site <br/><br/>
          The website was built to give a hospital information about <br/><br/> the number of employees, doctors, nurses who work within it and patients who get treated<br/><br/>
          You can edit them, add, delete, and of course see them all. <br/><br/>There is a thread that runs and deletes patients who are no longer in treatment </h2>
           
                {<img src="\Assets\Images\hospital.jpg" />}
        </div>
    );
}

export default About;
