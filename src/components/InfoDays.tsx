import React from 'react'

export const InfoDays = ({year, month, day}) => {
  return (
    <>
        <div className="ml-4 px-4 mb-10">
            <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]">--</span> {year}</h2>
            <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]">--</span> {month}</h2>
            <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]">--</span> {day}</h2>
        </div>
    </>
  )
}
