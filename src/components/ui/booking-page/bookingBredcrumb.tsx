'use client';
import {useState} from 'react';


export default function BreadCrumb(){

interface CrumItemObj{
    id: number;
    name: string;
}

    const [crumbItems,setCrumbItems] = useState<CrumItemObj[]>([
        {
            id:1,
            name: "Rooms & Dates"
        },
        {
            id:2,
            name: "Rooms & Dates"
        },
        {
            id:3,
            name: "Rooms & Dates"
        }
    ]);

    

    return (
      <>
        <div className="flex items-center justify-evenly h-30 border-green-600 border-2">
          {crumbItems.map((item) => (
            <div className='flex items-center justify-evenly' key={item.id}>
                <div className="grid justify-items-center content-center">
                        <div className="w-10 h-10 bg-slate-950 text-white flex justify-center items-center rounded-full">
                            {item.id}           
                        </div>
                        <h1>{item.name}</h1>
                </div>
            </div>
          ))}
          
        </div>
        <div className="flex space-x-5">
          <button className="border-2 ">prev</button>
          <button className="border-2 ">next</button>
        </div>
      </>
    );
}