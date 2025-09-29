import { HeaderModel } from "@/components/models/header";
import HeaderSection from "../header";

export default function ContactSection(){

    const headerDetails:HeaderModel ={
        sectionTopic: "Contact Us",
        topic: "Get in Touch",
        details: "Have questions about your stay or need assistance with booking? Our friendly team is here to help you 24/7.",
    }

    return(
        <>
            <HeaderSection details={headerDetails}/>
        </>
    );
}