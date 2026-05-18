import { useEffect, useState } from "react";
import API from "../services/api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await API.get("/employees");
      setEmployees(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="employee-list">
      <h2>Employee List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Department</th>
            <th>Performance</th>
            <th>Experience</th>
          </tr>
        </thead>

        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.performanceScore}</td>
              <td>{emp.experience} Years</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;