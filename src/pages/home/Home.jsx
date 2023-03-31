import { image1, image2, image3, image4, cmd, qualityBg } from "../../assets/images";
import { ImageSlider, TabsGroup } from '../../components';
import { AiOutlineSound } from "react-icons/ai";
import { GiOrganigram } from "react-icons/gi";
import { RiCommunityLine, RiGalleryLine, RiGroupLine, RiUserLocationLine, RiUserReceivedLine, RiUserSharedLine } from "react-icons/ri";
import {MdElectricBolt } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import { RiPsychotherapyLine } from "react-icons/ri";



// MdElectricBolt for electrical
// VscOrganization for agencies

// RiPsychotherapyLine misc

import { useNavigate } from "react-router-dom";
import { trainingCalendarFile } from "../../assets/files"
import "./home.css";



const slides = [
  { url: image1, title: "slider1" },
  { url: image2, title: "slider2" },
  { url: image3, title: "slider3" },
  { url: image4, title: "slider4" },

];

const sliderContainerStyles = {
  width: "99vw",
  height: "70vh",
  margin: "0 auto",
  zIndex: "-1"
}

const cardContainerStyles = {
  width: "19vw",
  // height: "25vh",
  padding: "1rem 1rem 2rem",
  cursor: 'pointer',
}

const Card = ({ title, icon, description, link }) => {
  const navigate = useNavigate();
  return (<div style={cardContainerStyles} onClick={() => navigate(link)}>
    {icon}
    {/* <p>{description}</p> */}
    <h4>{title}</h4>

  </div>);
}

const TrainingActivitiyCard = ({ number, type }) => (
  <div className='trg-activity-card-container'>

    <p className="trg-activity-num">{number}</p>
    <div className='trg-activity-divider'></div>
    <p className="trg-activity-type">{type}</p>

  </div>
)

const FacultyTypeCard = ({ type, icon, path, description }) => {
  const navigate = useNavigate();
  return (<div className='faculty-type-container shadow'>
    <div>{icon}</div>
    <h3>{type}</h3>
    <p>{description}</p>
    {/* <p>{description}</p> */}
    <button onClick={() => navigate(path)}>Explore</button>
  </div>);
}


const highlights = [
  { title: "News", icon: <AiOutlineSound />, link: "/notification", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quia. adipisicing elit. Quos adipisicing elit. Quos" },
  { title: "Infrastructure", icon: <RiCommunityLine />, link: "/infrastructure", description: "Lorem ipsum dolor, sit amet consectetur adipisicing " },
  { title: "Team", icon: <GiOrganigram />, link: "/team", description: "Lorem ipsum dolor, adipisicing elit. Quos, quia. sit amet consectetur sit amet consectetur" },
  { title: "Gallery", icon: <RiGalleryLine />, link: "/gallery", description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, quia." },
];


const qualityDescription = "Power Training Center (PTC) is committed to the continual development of Human Resources by providing quality training satisfying all applicable requirements to meet present and future business challenges in the Power Training and Distribution Sector. To achieve this goal, we employ highly qualified trainers and instructors with extensive experience and expertise in their respective fields, Continuously assess and improve our programs and services to ensure that they meet the highest standards of quality and relevance, Foster a culture of continuous learning and professional development among our faculties and staff.";

const qualityPolicies = [
  "Provide required training to achieve annual targeted person-days of training.",
  "Provide safety training periodically for creating safe working culture in the organization.",
  "Orient fresh recruits to the business operation of the organization’s functional areas through a well-structured Induction Program.",
  "Upgrade the competence of In-house trainers through appropriate training and exposure.",
  "Support external organizations and academic institutes by providing practical based training in Transmission and Distribution system."

];


const trainingActivities = [{ number: 1673287, type: "Total mandays" },
{ number: 10836, type: "Total trained" },
{ number: 34, type: "Programs conducted" },
{ number: 424, type: "Students trained" }
];


// Electrical, HR, Misc, Agencies 

const facultiesDescription = "Our trainers are experts in their fields with years of experience delivering high-quality training programs. They are passionate about helping our trainees achieve their learning objectives and are dedicated to providing personalized support throughout the training process. Our trainers use a variety of teaching methods to engage and motivate learners, and they are committed to staying up-to-date with the latest industry trends and best practices.";
const facultyTypes = [{ type: "Electrical", path: "/inhouse-faculties", icon: <MdElectricBolt />, description: "Faculties responsible for making OPTCL No. 1 transmission utility." },
{ type: "Human Resources", path: "/internal-faculties", icon: <RiGroupLine />, description: "A company is only as good as the people it keeps." },
{ type: "Miscellaneous", path: "/external-faculties", icon: <RiPsychotherapyLine />, description: "Faculties having domain expertise in various other fields." },
{ type: "Agencies", path: "/agencies", icon: <VscOrganization />, description: "External organizations who cater to our specialized needs." }
];


// const trainingCategories = ["Technical", "MDP", "Induction-cum-Orientation", "External"];
const trainingCategories = [{
  title: "Technical",
  description: "Fosters the training needs of the Transmission and Distribution Sector.Training programs on Safety and Safe Working Practices are regularly provided to all our employees to create awareness about the importance of safe working methods and maintaining personal safety while performing the operation, maintenance, and construction work in particular and avoiding electrical hazards in general."
}, {
  title: "Induction-cum-Orientation",
  description: "Ensures new employees have a smooth transition into their new roles and are equipped with the necessary knowledge and skills to perform their job duties effectively. The program covers a wide range of topics, including: Introduction to the organization's mission, vision, and values, Organizational culture and work environment, Policies and procedures, including safety policies and emergency procedures, Employee benefits and perks, Overview of the company's products or services, Job responsibilities and expectations, Performance expectations and metrics, Training and development opportunities, Introduction to colleagues and stakeholders, Communication protocols etc. The programs are designed to meet the specific needs of the organization and are tailored to the individual needs of each employee."
}, {
  title: "MDP",
  description: "Management development training program(MDP)s are designed to enhance the skills and competencies of managers at all levels within an organization. These programs are intended to provide managers with the knowledge and tools they need to lead their teams, achieve organizational goals, and foster a culture of innovation and growth. Programs including leadership development, strategic thinking & planning, people management, financial management, project management, innovation & creativity etc. are conducted as per the organizational needs."
},
{
  title: "External",
  description: "The SBU (strategic business unit) specific requirements due to the change in market scenario and required competencies are developed upon. Then suitable Consultants/practitioners are identified and customized programs are designed in consultation with line functions."
},

];


const Home = () => {

  const navigate = useNavigate();

  return (

    <div className="main">
      <div style={sliderContainerStyles}>
        <ImageSlider slides={slides} parentWidth={100} />
      </div>
      <div className="highlights">
        {highlights.map((highlight, index) => <Card key={index} title={highlight.title} icon={highlight.icon} description={highlight.description} link={highlight.link} />)}
      </div>

      <div className="about-container">
        <div className="about">
          <h1>ABOUT <span>PTC</span></h1>
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
          <button onClick={() => navigate("/about")}>Read more</button>
          <a href={trainingCalendarFile}><button id="trg-calendar">Training Calendar</button></a>
        </div>
        <div className="org-head-container">
          <div id="org-heading"><h1>From <span>CMD’s Desk</span></h1></div>
          <div id="org-head-img"><img src={cmd} alt="img" /></div>
          <div id="org-head-content"><span>Shri Sanjay Kumar Mishra, IRTS </span>
              <span id="designation">CMD, OPTCL</span>
              <p>
              Resolving technical issues and providing solutions to the challenges in power sector
              requires adoption of newer technologies and management expertise. In order to keep pace
              with the emerging new frontier of technological environment, it is necessary to update our
              skills and expertise and function as a leader in our sphere of work.
              </p>
              <button onClick={() => navigate("/org-head")}>Read more</button></div>
          {/* <h1>From CMD’s <span>Desk</span></h1>
            <div>
            <img src={cmd} alt="img" />
              <span>Shri Sanjay Kumar Mishra, IRTS | CMD, OPTCL</span>
              <p>
              Resolving technical issues and providing solutions to the challenges in power sector
              requires adoption of newer technologies and management expertise. In order to keep pace
              with the emerging new frontier of technological environment, it is necessary to update our
              skills and expertise and function as a leader in our sphere of work.
              </p>
              <button onClick={() => navigate("/org-head")}>Read more</button>
            </div> */}
        </div>
      </div>


      
      <div className="quality-policy-container">
        <h1>QUALITY <span>POLICY</span></h1>
        <div className='quality-policy-content'>
          <div className="quality-desc">
            {qualityDescription}
          </div>
          <div className="quality-policies">
            {
              qualityPolicies.map((qualityPolicy, index) => <li key={index}>{qualityPolicy}</li>)
            }
          </div>
        </div>
      </div>


      <div className="training-container">
        <h1>TRAINING <span>ACTIVITIES</span></h1>

        <div className="training-activities">
          {
            trainingActivities.map((trainingActivity, index) => <TrainingActivitiyCard key={index} number={trainingActivity.number} type={trainingActivity.type}></TrainingActivitiyCard>)
          }
        </div>
      </div>

      <div className="training-types-container">
        <h1>TRAINING <span>WE OFFER</span></h1>
        <div className="training-types-content">
        <TabsGroup tabsList={trainingCategories.map(trg => trg.title)}
          tabsContent={trainingCategories.map(trg => trg.description)} />
        </div>
      </div>
            
      

      
     
      <div className="faculties-container">
        <h1>OUR <span>RESOURCE PERSONNEL</span></h1>
        <div className="faculties-desc">{facultiesDescription}</div>
        <div className="faculty-types-container">
          {facultyTypes.map((facultyType, index) => <FacultyTypeCard key={index} type={facultyType.type} icon={facultyType.icon} path={facultyType.path} description={facultyType.description}/>)}
        </div>
      </div>
    </div>

  );
}

export default Home
