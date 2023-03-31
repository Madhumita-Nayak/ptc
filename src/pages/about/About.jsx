import React from 'react';
import { image1 } from "../../assets/images";
import "./About.css";

const About = () => {
  return (
    <div className="page about-main">
      <h1>Introduction</h1>
      <p>
        Odisha Power Transmission Corporation Limited (OPTCL), one of the
        leading Transmission Utilities in the country was incorporated in
        March 2004 under the Companies Act, 1956 as a company, wholly
        owned by the Government of Odisha to undertake the business of
        transmission and wheeling of electricity in the State. The registered
        office of the Company is situated at state capital Bhubaneswar. Its
        office units, Grid Sub-Stations and Projects are spread all over the
        State.
      </p>

      <p> OPTCL has a Training & Development Wing under HRD Department,
        to augment the learning and development requirements of its
        employees. It has a full-fledged, well equipped Training Institute
        named Power Training Centre (PTC) at Chandaka Industrial Estate,
        Bhubaneswar. PTC is ISO 9001:2015 certified and CEA accredited
        (category-I) Training Centre, which is standing testimony of the quality
        training that OPTCL imparts.</p>
      <img src={image1} alt="" />
      <p>Located at the heart of the City but away from the hum-drums of City
        life, it is the “Temple of learning” having perfect learning ambience.
        PTC is spread over more than 5 acres of land . It is equipped with
        state of the art infrastructure and facilities. It consists of 23 hostel
        rooms (50 bedded), four training halls and a library, which is
        conducive for effective learning. It is also having adequate
        recreational facilities to keep the trainees occupied before / after
        learning hours.</p>
      <h1>Objectives</h1>
      <ul>
        <li> Minimize the skill gaps and enhance technical expertise by imparting need based training.</li>
        <li>Enhance competencies to take up higher responsibilities.</li>
        <li> Improve performance of the employees in their respective roles.</li>
        <li>Facilitate learning to build a "Learning Organization".</li>
      </ul>
    </div>

  );
}

export default About
