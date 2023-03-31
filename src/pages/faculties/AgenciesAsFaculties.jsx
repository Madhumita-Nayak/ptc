import React, { useEffect, useState } from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import * as xlsx from "xlsx";
import { userImg } from "../../assets/images";
import "./Faculties.css";



export const FacultyCard = ({agency}) => (<div className='faculty-card'>
 <img src={agency.prfoileImg ? agency.prfoileImg : userImg} alt="" />
 <div>
 <h3>{agency["Name"]}</h3>
  <h4>{agency["Designation"]}</h4>
  <div className='item'><IoMailOutline/><p>{agency.email}</p></div>
  <div className='item'><IoCallOutline/><p>{agency.contactNumber}</p></div>
  <a href={`/agencies/${agency["Sl.no"]}`}><button>View Profile</button></a>
 </div>
</div>);


const AgenciesAsFaculties = () => {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    fetch("faculties.xlsx")
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
      <h1>External Agencies</h1>
      <div className="faculties-main-content">
      {
        facultyData && facultyData.map((agency, index) => agency["Faculty Type"] === "agency" && <FacultyCard key={index} agency={agency}/>)
      }
      </div>
    </div>
  )
}

export default AgenciesAsFaculties
