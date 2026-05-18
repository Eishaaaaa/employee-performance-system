import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";
import Recommendation from "./components/Recommendation";

function App() {
  return (
    <div>
      <h1>Employee Performance System</h1>

      <EmployeeForm />

      <EmployeeList />

      <Recommendation />
    </div>
  );
}

export default App;