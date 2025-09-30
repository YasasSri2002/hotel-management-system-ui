import { HeaderModel } from "@/components/models/header";
import HeaderSection from "../header";
import Information from "./infomation";
import ContactForm from "./contactForm";

export default function ContactSection(){

    const headerDetails:HeaderModel ={
        sectionTopic: "Contact Us",
        topic: "Get in Touch",
        details: "Have questions about your stay or need assistance with booking? Our friendly team is here to help you 24/7.",
    }

    return(
        <>
            <HeaderSection details={headerDetails}/>
            <div className="grid justify-items-center sm:flex sm:justify-evenly gap-5 w-full">
                <Information/>
                <ContactForm/>
            </div>
        </>
    );
}