import React from 'react'

export const Button = () => {
  return (
    <>
        <div className="ml-4 p-2 mt-3 md:w-auto">
            <div className="p-3 border-t">
                <div className="flex md:justify-end justify-center">
                    <button className="md:absolute md:mt-[-40px] md:ml-10 py-4 px-4 bg-[#854dff] duration-300 hover:bg-[#684DFF] rounded-full">
                        <img 
                            src="https://res.cloudinary.com/dytlbyofu/image/upload/v1687301523/arrow_uwlj6u.png" 
                            alt="arrow icon"
                            className=" w-9 rotate-90"
                        ></img>
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
