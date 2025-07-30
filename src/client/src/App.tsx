import { useEffect, useState } from "react";
import "./App.css";

type EmployeeType = {
  id: number;
  name: string;
  directReports: EmployeeType[];
};

function App() {
  const [data, setData] = useState<EmployeeType[]>([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.EMPLOYEES));
  }, []);

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
