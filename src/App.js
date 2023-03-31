import { Home, About, Authentication, ContactUs, InhouseFaculties, InternalFaculties, ExternalFaculties, 
  AgenciesAsFaculties, Notification, Team, Infrastructure, OrgHead, MainGallery, CopyRightPolicy, 
  TermsAndConditions, Disclaimer, PrivacyPolicy } from "./pages";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PageTemplate } from "./templates";
import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import { FacultyProfile } from "./pages/faculties/utils";



function App() {


 

  return (
   <Router>
    <ScrollToTop/>
    <Routes>

      <Route exact path="/" element={<PageTemplate component={<Home/>}/>}/>
      <Route exact path="/about" element={<PageTemplate component={<About/>}/>}/>
      <Route exact path="/auth" element={<PageTemplate component={<Authentication/>}/>}/>
      <Route exact path="/contact-us" element={<PageTemplate component={<ContactUs/>}/>}/>
      <Route exact path="/inhouse-faculties" element={<PageTemplate component={<InhouseFaculties/>}/>}/>
      <Route exact path="/inhouse-faculties/:id" element={<PageTemplate component={<FacultyProfile/>}/>}/>
      <Route exact path="/internal-faculties" element={<PageTemplate component={<InternalFaculties/>}/>}/>
      <Route exact path="/internal-faculties/:id" element={<PageTemplate component={<FacultyProfile/>}/>}/>
      <Route exact path="/external-faculties" element={<PageTemplate component={<ExternalFaculties/>}/>}/>
      <Route exact path="/external-faculties/:id" element={<PageTemplate component={<FacultyProfile/>}/>}/>
      <Route exact path="/agencies" element={<PageTemplate component={<AgenciesAsFaculties/>}/>}/>
      <Route exact path="/agencies/:id" element={<PageTemplate component={<FacultyProfile/>}/>}/>


      <Route exact path="/notification" element={<PageTemplate component={<Notification/>}/>}/>
      <Route exact path="/infrastructure" element={<PageTemplate component={<Infrastructure/>}/>}/>
      <Route exact path="/team" element={<PageTemplate component={<Team/>}/>}/>
      <Route exact path="/org-head" element={<PageTemplate component={<OrgHead/>}/>}/>
      <Route exact path="/gallery" element={<PageTemplate component={<MainGallery/>}/>}/>


      <Route exact path="/copyright-policy" element={<PageTemplate component={<CopyRightPolicy/>}/>}/>
      <Route exact path="/privacy-policy" element={<PageTemplate component={<PrivacyPolicy/>}/>}/>
      <Route exact path="/disclaimer" element={<PageTemplate component={<Disclaimer/>}/>}/>
      <Route exact path="/terms-and-conditions" element={<PageTemplate component={<TermsAndConditions/>}/>}/>




    </Routes>
   </Router>
  );
}

export default App;
