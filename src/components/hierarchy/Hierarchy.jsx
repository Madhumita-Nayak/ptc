import React, { Fragment } from "react";
import  randomcolor  from "randomcolor";
import data from "./data.json";
import { IoCallSharp, IoMailSharp } from "react-icons/io5";
import { userImg } from "../../assets/images";
import "./Hierarchy.css";


const Card = ({ data }) => {
  const levelColor = randomcolor();

  return (
    <ul className="hierarchy">
      {data.map(item => (
        <Fragment key={item.name}>
          <li>
            <div className="card">
              <div className="image">
                <img
                  // src={"https://randomuser.me/api/portraits/men/"+randomIntFromInterval(1,100)+".jpg"}
                  src={item.imgPath ? item.imgPath : userImg}
                  alt="Profile"
                  style={{ borderColor: levelColor }}
                />
              </div>
              <div className="card-body">
                <h4>{item.name}</h4>
                <p>{item.designation}</p>
              </div>
              <div className="card-footer"
               style={{ background: levelColor }}
              >

                <IoCallSharp/>
                <IoMailSharp/>
              
                {/* <img
                  src={call}
                  alt="Call"
                />
                <img
                  src={video}
                  alt="Video"
                /> */}
              </div>
              <div></div>
            </div>
            {item.children?.length && <Card data={item.children} />}
          </li>
        </Fragment>
      ))}
    </ul>
  );
};

const Hierarchy = () => {
  return (
    <div className="org-tree">
      <Card data={data} />
    </div>
  );
};

export default Hierarchy;