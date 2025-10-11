export default function OtherItems(
    {id, name, checked}: {readonly id:number, readonly name:string ,readonly checked: boolean}
){

    

    return(
        <div className="grid justify-items-center content-center">
            <div className={`w-10 h-10   flex justify-center items-center rounded-full
                 ${checked ? 'bg-slate-950 text-white ': 'bg-gray-300/60 text-black' }`}>
               {id}          
            </div> 
        <h1 className="text-xs sm:text:md text-center">{name}</h1>
        </div>
    )
}