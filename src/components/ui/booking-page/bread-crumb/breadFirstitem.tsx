
export default function FirstItem({name}:{ readonly name: string}){

    return(
        <div className="grid justify-items-center content-center">
            <div className="w-10 h-10 bg-slate-950 text-white flex justify-center items-center rounded-full">
               1           
            </div>
        <h1 className="text-xs sm:text-md text-center">{name}</h1>
        </div>
    )

}