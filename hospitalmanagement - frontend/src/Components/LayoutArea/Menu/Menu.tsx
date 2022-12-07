import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">	
  <ul>
  <li><a href="/doctors">Doctors</a></li>
  <li> <a href="/nurses">Nurses</a></li>
  <li> <a href="/employees">Employees</a></li>
  <li> <a href="/patients">Patients</a></li>
  <li id="li"> <a href="/">About</a></li>
</ul>
        </div>
    );
}

export default Menu;
