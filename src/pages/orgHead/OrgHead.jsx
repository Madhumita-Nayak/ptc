import React from 'react';
import { cmd } from "../../assets/images"
import "./OrgHead.css";

const OrgHead = () => {
    return (
        <div className='page'>
            <h1>Shri Sanjay Kumar Mishra, IRTS</h1>
            <div className='org-head-content'>

                <p>
                    <img src={cmd} alt="" />
                    <span>
                    Resolving technical issues and providing solutions to the challenges in power sector
                    requires adoption of newer technologies and management expertise. In order to keep pace
                    with the emerging new frontier of technological environment, it is necessary to update our
                    skills and expertise and function as a leader in our sphere of work.
                    </span>
                    <span> It is a matter of great satisfaction that Power Training Center, Chandaka (PTC), has
                    evolved as a pioneering training institute in the power sector over the years, and
                    continuously engages itself in developing innovative and upgraded training modules.</span>
                <span>It is hearting to note that in its effort to remain at the top in the training field, PTC is
                    bringing out its training calendar for the year 2023-24 fully dovetailed to the needs and
                    aspirations of employees of OPTCL.</span>
                </p>
                <p>Wishing PTC, Chandaka, all the success in its future endeavour!!</p>
            </div>
        </div>
    )
}

export default OrgHead
