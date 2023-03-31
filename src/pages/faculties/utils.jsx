import React from 'react';
import { IoCallOutline, IoMailOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import { userImg } from "../../assets/images";
import "./Faculties.css";


export const FacultyCard = ({faculty}) => {
    return  (<div className='faculty-card'>
    <img src={faculty.prfoileImg ? faculty.prfoileImg : userImg} alt="" />
    <div>
    <h3>{faculty["Name"]}</h3>
     <h4>{faculty["Designation"]}</h4>
     <div className='item'><IoMailOutline/><p>{faculty.email}</p></div>
     <div className='item'><IoCallOutline/><p>{faculty.contactNumber}</p></div>
     <a href={`/${faculty["Faculty Type"]}-faculties/${faculty["Sl.no"]}`}><button>View Profile</button></a>
    </div>
   </div>);
}


export const FacultyProfile = ({}) => {

    const params = useParams();
    // console.log(params.id)
    return (
        <div>
           profile
        </div>
    )
}

