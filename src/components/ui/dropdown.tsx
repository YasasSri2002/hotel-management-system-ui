"use client"; 

import { useEffect, useState } from "react";

import DynamicIcon from "@/components/utill/DynamicIcons";

export default function DropdownMenu({items, smallSize, name }: {readonly items:string[], readonly smallSize : boolean ,readonly name: string | undefined}  ) {


  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | undefined>("Select"); 

  useEffect(()=>{
    setSelected(name);
  },[]);
  

  const handleSelect = (value: string) => {
    setSelected(value); // update button label
    setIsOpen(false);   // close dropdown
  };

  return (
    <div className={`relative inline-block text-left ${smallSize? 'w-[180px]' : 'w-full'} `}>
      {/* Trigger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex justify-between w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-100 focus:outline-none "
      >
        {selected}
        <DynamicIcon name="MdOutlineKeyboardArrowDown" className="ml-2 -mr-1 h-5 w-5 text-gray-500"/>
      </button>

     
      <div
        className={`absolute right-0 mt-2 ${smallSize? 'w-[180px]' : 'w-full' } origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transform transition ease-out duration-200 ${
          isOpen ? "opacity-100 scale-100 z-50" : "opacity-0 scale-95 pointer-events-none "
        }`}
      >
        <div className="py-1">
          {items.map((option) => (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
