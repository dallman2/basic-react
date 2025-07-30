import { useEffect, useState } from "react";
import "./App.css";

type EmployeeType = {
  id: number;
  name: string;
  directReports: EmployeeType[];
};

/**
 * the `/api` endpoint returns a JSON list of employees in a hierarchical structure under the `EMPLOYEES` key,
 * specifically, a list of `EmployeeType` objects, where each employee has an `id`, `name`, and a list of `directReports`.
 */

const App = () => {
  const [data, setData] = useState<EmployeeType[]>([]);

  useEffect(() => {
    console.log("Employee Data:", data);
  }, [data]);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Employee Hierarchy</h2>
      </div>
    </>
  );
}

export default App;
