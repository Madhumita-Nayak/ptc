import React from 'react';
import { Gallery } from '../../components';
import { building, hostel1, hostel2, library, ptc_decor1, ptc_decor2, hostelRoom1, hostelRoom2, lawn1, lawn2 } from "../../assets/images/infrastructure";
import "./Infrastructure.css";


const infrastructureImages = [building, hostel1, hostel2, library, ptc_decor1, ptc_decor2, hostelRoom1, hostelRoom2, lawn1, lawn2];

const Infrastructure = () => {
    return (
        <div className='page infra'>
            <h1>Infrastructure of PTC</h1>
            <p>The OPTCL Power Training Centre, Chandaka showcases:</p>
            <ul>
                <li>Two 50 seat class rooms with advanced video conferencing facilities</li>
                <li>One 200 seat Conference Hall</li>
                <li>A modern electronic and hardbound library</li>
                <li>Wi-Fi enabled complex</li>
                <li>A 10-seater computer lab</li>
                <li>Two Modern Hostels with strength of 50 (32 for male and 18 bedded special girls’ hostel)</li>
                <li>In House Canteen of capacity of 100</li>
                <li>Recreational facilities like Badminton Court, Table Tennis etc.</li>
                <li>Well-equipped Insulating Oil Testing Laboratory</li>
                <li>Demonstration/Instrument Laboratory</li>
            </ul>
            <Gallery imgUrls={infrastructureImages} />
        </div>
    )
}

export default Infrastructure
