import DynamicIcon from "@/components/utill/DynamicIcons";

export default function AmentiesCard(){
    return(
        <>
            <div className="w-full sm:w-[40em] h-[20em] relative sm:m-5 ">
                <div className="rounded-2xl w-full h-full bg-cover bg-center shadow-2xl" style={{ backgroundImage: `url(/normalRoom.jpg)` }}>
                    <div className="bg-black/60 rounded-2xl w-full h-full absolute inset-0 z-10"></div>
                    <div className="grid justify-items-center content-center text-white  h-full">
                        <DynamicIcon name='MdWaves' className="text-7xl z-20" />
                        <div className="grid justify-items-center content-center text-white z-20 py-5 px-10">
                            <h1 className="text-xl sm:text-2xl">Pools & Spa</h1>
                            <p className="text-md sm:text-lg text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, voluptates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}