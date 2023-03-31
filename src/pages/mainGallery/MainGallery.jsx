import React from 'react';
import { TabsGroup, Gallery } from "../../components";
import { building, hostel1, hostel2, library, ptc_decor1, ptc_decor2, hostelRoom1, hostelRoom2, lawn1, lawn2 } from "../../assets/images/infrastructure";
import "./MainGallery.css";



const trainingImages = [building, hostel1, hostel2,];
const InfraImages = [building, hostel1, hostel2, library, ptc_decor1, ptc_decor2, hostelRoom1, hostelRoom2, lawn1, lawn2];
const OthersImages = [building, hostel1, hostel2,  hostelRoom2, lawn1, lawn2];


const imageCategories = ["Training", "Infrastructure", "Others"];
const imageCategoricalContent = [<Gallery imgUrls={trainingImages}/>, <Gallery imgUrls={InfraImages}/>, <Gallery imgUrls={OthersImages}/>];

const MainGallery = () => {
  return (
    <div className='page'>
     <TabsGroup tabsList={imageCategories}
          tabsContent={imageCategoricalContent} />
    </div>
  )
}

export default MainGallery
