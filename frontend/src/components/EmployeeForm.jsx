import { useState } from "react";
import API from "../services/api";

const EmployeeForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    skills: "",
    performanceScore: "",
    experience: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/employees", {
        ...formData,
        skills: formData.skills.split(","),
      });

      alert("Employee Added Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <input
          type="text"
          name="skills"
          placeholder="Skills"
          onChange={handleChange}
        />

        <input
          type="number"
          name="performanceScore"
          placeholder="Performance Score"
          onChange={handleChange}
        />

        <input
          type="number"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
        />

        <button type="submit">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;