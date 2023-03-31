import React, { useEffect, useState } from 'react';
import { FacultyCard } from "./utils";
import * as xlsx from "xlsx";
import "./Faculties.css";

const ExternalFaculties = () => {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    fetch("./faculties.xlsx")
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const wb = xlsx.read(ab, { type: "array" });
        const ws = wb.Sheets[wb.SheetNames[0]];
        const json = xlsx.utils.sheet_to_json(ws);
        setFacultyData(json);
      })
  }, []);
  return (
    <div className="page faculties-main-container">
      <h1>External Faculties</h1>
      <div className="faculties-main-content">
      {
        facultyData && facultyData.map((faculty, index) => faculty["Faculty Type"] === "external" && <FacultyCard key={index} faculty={faculty}/>)
      }
      </div>
    </div>
  )
}

export default ExternalFaculties
