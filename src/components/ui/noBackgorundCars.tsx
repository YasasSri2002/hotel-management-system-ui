import DynamicIcon from "../utill/DynamicIcons";
import { NoBgCardDetailsModel } from "../models/noBgCardDetials";

export default function Cards({details}: {details: NoBgCardDetailsModel}){
    return(
        <> 
            <div className="w-[15em] h-[15em] bg-white rounded-2xl  shadow-xl hover:scale-105 hover:-translate-1">
                <div className="grid justify-items-center content-center p-2 w-full h-full gap-3">
                    <div className="bg-gray-400/50 rounded-full w-[5em] h-[5em] flex justify-center items-center">
                        <DynamicIcon name={details.iconName} className="text-4xl"/>
                    </div>
                    <div className="grid justify-items-center content-center gap-1">
                        <h1 className="text-md sm:text-lg text-black/70">{details.topic}</h1>
                        <p className="text-xs sm:text-sm text-center text-gray-500/95">{details.details}</p>
                    </div>

                </div>
            </div>
        </>

    );
}