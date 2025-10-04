import { HeaderModel } from "../models/header"

export default function HeaderSection({details}: {readonly details: HeaderModel}){
    return(
        <div className="grid justify-items-center gap-10 p-10">
            <h1 className="text-xs sm:text-sm border-1 bg-white shadow-xl rounded-xl p-2 px-5 hover:cursor-pointer hover:-translate-y-1 hover:scale-101 transition-all ease ">{details.sectionTopic}</h1>
            <h2 className="text-xl sm:text-4xl">{details.topic}</h2>
            <p className="text-lg sm:text-xl text-center">{details.details}</p>
        </div>
    )
}