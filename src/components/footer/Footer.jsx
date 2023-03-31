import React from 'react';
import { BiWorld, BiPhone, BiEnvelope } from "react-icons/bi";

import "./Footer.css";

const Footer = ({org_info, quickLinks, exploreList}) => {
  return (
   <div className='footer'>
     <div className="footer-contents">
        <div className='footer-content-1'>
            <div className="footer-content">
            <img src={org_info.logo} alt="" />
            <p>{org_info.name}</p>
            <p>{org_info.address}</p>
            <div className="icon-info"><BiPhone/><span>{org_info.phone}</span></div>
            <div className="icon-info"><BiEnvelope/><span>{org_info.email}</span></div>
            <div className="icon-info"><BiWorld/><span>{org_info.website}</span></div>
            </div>

        </div>
        <div className='footer-content-2'>
            <p>Quick Links</p>
            {
            quickLinks.map((quickLink, index) => <p key={index}>
                <a href={quickLink.link}>{quickLink.title}</a>
            </p>)
        }
        </div>
        <div className='footer-content-3'>
        <p>Explore</p>
        {
            exploreList.map((explore, index) => <p key={index}>
                <a href={explore.link}>{explore.title}</a>
            </p>)
        }
        </div>
        <div className='footer-content-4'></div>
     </div>
    <div className="copyright-container">
        <p>©2023 {org_info.name}. All rights reserved.</p>
        <p>Developed & maintained by {org_info.name}.</p>
    </div>
   </div>
  )
}

export default Footer
