import { HeaderModel } from "@/components/models/header";
import DynamicIcon from "../../utill/DynamicIcons";
import HeaderSection from "../header";
export default function AboutSection(){

    const headerDetails: HeaderModel = {
        sectionTopic : "About",
        topic: "Excellence in Hospitality",
        details: "For over 50 years, Grand Hotel has been synonymous with luxury, comfort, and exceptional service. Located in the heart of the city, we offer an unparalleled experience for both business and leisure travelers."
    }

    return(
        <div className="
        bg-gradient-to-b 
            from-transparent from-0% 
            via-gray-300/40 via-95% 
            to-transparent to-100%
        ">
           <HeaderSection details={headerDetails}/>
           <div className="sm:grid sm:grid-cols-2">
            <div className="col-1 gap-5">
                 <div className="grid gap-5 justify-items-center sm:justify-items-start content-center p-5 mt-5 mb-10">
                    <h1 className="text-2xl sm:text-4xl text-black/90 text-center ">Our Story</h1>
                    <p className="text-lg  text-gray-500 text-center sm:text-start">
                        Founded in 1973, Grand Hotel has been a beacon of hospitality excellence. What started as a family-owned boutique hotel has grown into a world-class destination while maintaining our commitment to personalized service and attention to detail.
                    </p>
                </div>
                <div className="grid gap-5 justify-items-center sm:justify-items-start content-center p-5">
                    <h1 className="text-2xl sm:text-4xl text-black/90 text-center ">Our Mission</h1>
                    <p className="text-lg  text-gray-500 text-center sm:text-start">
                        We strive to create memorable experiences that exceed our guests' expectations. Through our dedicated team, luxurious amenities, and commitment to sustainability, we aim to be more than just a place to stay – we're your home away from home.
                    </p>
                </div>
            </div>
            <div className="col-2">
                <div className="flex flex-1 flex-wrap  justify-center gap-5 mx-5 mt-10">
                    <div className="grid justify-items-center content-center bg-white rounded-2xl w-[15em] h-[10em] p-5 shadow-2xl">
                        <div className="bg-gray-300 p-3 rounded-2xl">
                            <DynamicIcon name="FaRegStar" className="text-2xl"/>
                        </div>
                        <h1>5-Star Rating</h1>
                        <p className="text-gray-400 text-center">Consistently rated among the top hotels</p>
                    </div>
                    <div className="grid justify-items-center content-center bg-white rounded-2xl w-[15em] h-[10em] p-5 shadow-2xl">
                        <div className="bg-gray-300 p-3 rounded-2xl">
                            <DynamicIcon name="FiAward" className="text-2xl"/>
                        </div>
                        <h1>25+ Awards</h1>
                        <p className="text-gray-400 text-center">Recognition for excellence in hospitality</p>
                    </div>
                    <div className="grid justify-items-center content-center bg-white rounded-2xl w-[15em] h-[10em] p-5 shadow-2xl">
                        <div className="bg-gray-300 p-3 rounded-2xl">
                            <DynamicIcon name="IoPeople" className="text-2xl"/>
                        </div>
                        <h1>50,000+</h1>
                        <p className="text-gray-400 text-center">Happy guests served annually</p>
                    </div>
                    <div className="grid justify-items-center content-center bg-white rounded-2xl w-[15em] h-[10em] p-5 shadow-2xl">
                        <div className="bg-gray-300 p-3 rounded-2xl">
                            <DynamicIcon name="FaRegCalendar" className="text-2xl"/>
                        </div>
                        <h1>50+ Years</h1>
                        <p className="text-gray-400 text-center">Of hospitality excellence</p>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
}