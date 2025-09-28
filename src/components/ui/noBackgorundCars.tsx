import DynamicIcon from "../utill/DynamicIcons";

export default function Cards(){
    return(
        <> 
            <div className="w-[15em] h-[15em] bg-white rounded-2xl border-4 shadow-2xl">
                <div className="grid justify-items-center content-center p-2 w-full h-full gap-3">
                    <div className="bg-gray-400 rounded-full w-[5em] h-[5em] flex justify-center items-center">
                        <DynamicIcon name="MdWaves" className="text-4xl"/>
                    </div>
                    <div className="grid justify-items-center content-center gap-1">
                        <h1 className="text-md sm:text-lg">Swimming Pool & Spa</h1>
                        <p className="text-xs sm:text-sm text-center text-gray-400/50">Relax in our heated indoor pool and rejuvenate at our full-service spa</p>
                    </div>

                </div>
            </div>
        </>

    );
}