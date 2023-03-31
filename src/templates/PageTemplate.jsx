import { Navbar, Footer } from '../components';
import { optclLogo } from "../assets/images";
import { trainingCalendarFile } from '../assets/files';


const PageTemplate = ({component}) => {
    return (
        <div>
            <Navbar />
            {component}
            <Footer org_info={{ name: "Power Training Centre Chandaka", logo: optclLogo, address: " 220/132/33 KV Grid Substation, Chandaka, Near KIMS Hospital, Chandaka Industrial Estate, PO-KIIT, Bhubaneswar-751024", phone: "9438908200", email: "ptc@optcl.co.in", website: "www.ptc.co.in" }}
                quickLinks={[{title:"Training Calendar", link:trainingCalendarFile}, 
                            {title:"Infrastructure", link:"/infrastructure"}, {title:"Faculties", link:"/"}, 
                            {title: "Training Programs", link: "/"}, {title: "ISO", link: "/"}]}
                exploreList={[{title: "Terms & Conditions", link: "/terms-and-conditions"},
                {title: "Privacy Policy", link: "/privacy-policy"},
                {title: "Copyright Policy", link: "/copyright-policy"},
                {title:  "Disclaimer", link: "/disclaimer"},
                {title: "Contact Us", link: "/contact-us"}]}
            />
        </div>
    )
}

export default PageTemplate
