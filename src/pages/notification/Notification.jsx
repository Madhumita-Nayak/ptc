import React from 'react';
import "./Notification.css";


const notificationItems = [{date:"date1", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, exercitationem!"},
{date:"date2", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, exercitationem!"},
{date:"date3", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, exercitationem!"},
{date:"date4", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, exercitationem!"}];

const Notification = ({ }) => {
  return (
    <div className='page notification-container'>
     <h1>Latest <span>News</span></h1>
     <div className='notifications'>
      {
        notificationItems.map((notification, index) => <div key={index} className="notification">
          <h4>{`DATE: ${notification.date}`}</h4>
          <p>{notification.description}</p>
        </div>)
      }
     </div>
    </div>
  )
}

export default Notification
