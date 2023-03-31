import React, { useState } from 'react';
import "./TabsGroup.css";

const TabsGroup = ({tabsList, tabsContent}) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="tabs-container">
      <div className="bloc-tabs">
        {tabsList.map((tab, index) => <button key={index}
        className={toggleState === index + 1 ? "tabs active-tabs" : "tabs"}
        onClick={() => toggleTab(index + 1)}
        >{tab}</button>)}
      </div>
      <div className="content-tabs">

       {tabsContent.map((tabContent, index) =>  <div key={index}
          className={toggleState === index + 1 ? "content  active-content" : "content"}
        >
          
           {tabContent}
        </div>)}

      </div>
    </div>
  );
}

export default TabsGroup
