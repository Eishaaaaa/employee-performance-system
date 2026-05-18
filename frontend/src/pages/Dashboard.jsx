import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import Recommendation from "../components/Recommendation";
import SearchFilter from "../components/SearchFilter";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2>AI HR System</h2>

        <ul>
          <li>Dashboard</li>
          <li>Employees</li>
          <li>Analytics</li>
          <li>Recommendations</li>
        </ul>
      </aside>

      <main className="main-content">
        <div className="topbar">
          <h1>Employee Performance Dashboard</h1>
          <button className="logout-btn">Logout</button>
        </div>

        <div className="cards">
          <div className="card">
            <h3>Total Employees</h3>
            <p>150</p>
          </div>

          <div className="card">
            <h3>Top Performers</h3>
            <p>25</p>
          </div>

          <div className="card">
            <h3>Departments</h3>
            <p>8</p>
          </div>
        </div>

        <SearchFilter />

        <div className="section-grid">
          <EmployeeForm />
          <Recommendation />
        </div>

        <EmployeeList />
      </main>
    </div>
  );
};

export default Dashboard;