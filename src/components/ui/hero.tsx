'use client'
export default function HeroSection(){
    return(
        <div className="w-full h-dvh ">
            <div className="bg-[url(/hero.jpg)] bg-size-[100%_100%] bg-center bg-fixed bg-no-repeat w-dvw sm:w-full h-dvh">
            <div className="bg-black/60 w-full h-full z-10"></div>
            <div className="w-full h-full grid items-center justify-items-center text-white/80 absolute top-0">
            <h1 className="text-6xl">Urbanite Hotel</h1>
            </div>
            </div>
        </div>
    )
} 