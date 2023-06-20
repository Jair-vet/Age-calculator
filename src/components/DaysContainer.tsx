import React from 'react'

export const DaysContainer = ({ title, label}) => {
  return (
    <>
       {/* <!-- Container Month --> */}
       <div className="p-1">
            <label className="text-gray-400 text-[11px] font-bold uppercase tracking-widest">{ label }</label>
            <input 
              type="day" 
              placeholder={ title }
              className="flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20"
            />
        </div> 
    </>
  )
}
