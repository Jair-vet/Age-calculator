import  { useState } from 'react'

export const App = () => {
  
  const [day, setDay] = useState('')
  const [mon, setMon] = useState('')
  const [year, setYear] = useState('')
  const [data, setData] = useState([])
  const [error, setError] = useState(false)
  const [pass, setPass] = useState(true)

  
  const handleSubmit = e => {
    e.preventDefault()

    const d1 = day
    const m1 = mon
    const y1 = year
    
    const date = new Date()
    
    // Current Date
    var d2 = date.getDate()
    var m2 = 1 + date.getMonth()
    var y2 = date.getFullYear()
    
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    
    if(d1 > d2){
      d2 = d2 + month[m2 - 1]
      m2 = m2 - 1
    }
    
    if(m1 > m2){
      m2 = m2 + 12
      y2 = y2 - 1
    }

    if( d1 == '' && m1 == '' && y1 == '' ){
      
      setTimeout(() => {
        setError(false)
      }, 3000);
      setError(true)
      
    }else{
      const d = d2 - d1
      const m = m2 - m1
      const y = y2 - y1
      
      setData(data.push(y,m,d))
      
      if ( !d == '' && !m == '' && !y == '' ){
        setData([])
        
        setYear(data[0])
        setMon (data[1])
        setDay (data[2])

        setPass(false)
      }
      
    }

   
  }

    return (
        <>
            <h1 className="flex justify-center items-center text-gray-600 font-bold uppercase text-3xl mt-[50px]">Age Calculator</h1>

            {/* <!-- Page container --> */}
            <section className="flex justify-center items-center mt-10">
                <div className="flex flex-col bg-white rounded-[20px] rounded-br-[110px]">
                    {/* <!-- Container Date Inputs --> */}
                    <form 
                      onSubmit={handleSubmit}
                      className="flex flex-col md:ml-4 mt-3 p-2 md:w-[500px] w-[380px] md:justify-start justify-center gap-2"
                    >
                      <div className='flex'>
                        {/* <!-- Container Day --> */}
                        <div className="p-1">
                          <label 
                            htmlFor="mon" 
                            className={error 
                              ?"text-red text-[11px] font-bold uppercase tracking-widest"
                              :"text-gray-400 text-[11px] font-bold uppercase tracking-widest"
                            }
                          >day</label>
                          <input 
                            type="text" 
                            id='day'
                            placeholder='DD'
                            minLength='1'
                            maxLength='2'
                            onChange={ (e) => setDay(e.target.value) }
                            className={ error 
                              ? "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20 border-red" 
                              : "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20" 
                            }
                          />
                        </div> 
                        
                        {/* <!-- Container Month --> */}
                        <div className="p-1">
                          <label 
                            htmlFor="mon" 
                            className={ error
                              ?"text-red text-[11px] font-bold uppercase tracking-widest"
                              :"text-gray-400 text-[11px] font-bold uppercase tracking-widest"
                            }
                          >month</label>
                          <input 
                            type="text" 
                            id='mon'
                            placeholder='MM'
                            minLength='1'
                            maxLength='2'
                            onChange={ (e) => setMon(e.target.value) }
                            className={ error 
                                ? "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20 border-red" 
                                : "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20" 
                              }
                          />
                        </div> 
                        
                        {/* <!-- Container Year -->  */}
                        <div className="p-1">
                          <label 
                            htmlFor="mon" 
                            className={error 
                              ?"text-red text-[11px] font-bold uppercase tracking-widest"
                              :"text-gray-400 text-[11px] font-bold uppercase tracking-widest"
                            }
                          >year</label>
                          <input 
                            type="text" 
                            id='year'
                            placeholder='YYYY'
                            minLength='4'
                            maxLength='4'
                            onChange={ (e) => setYear(e.target.value) }
                            className={ error 
                              ? "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20 border-red" 
                              : "flex flex-col border rounded-md font-extrabold text-2xl p-2 md:w-28 w-20" 
                            }
                          />
                      </div> 
                      </div>


                      {/* <!-- Button --> */}
                      <div className="ml-4 p-2 mt-3 md:w-auto">
                          <div className="p-3 border-t">
                              <div className="flex md:justify-end justify-center">
                                  <button type='submit' className="md:absolute md:mt-[-40px] md:ml-10 py-4 px-4 bg-[#854dff] duration-300 hover:bg-[#684DFF] rounded-full">
                                      <img 
                                          src="https://res.cloudinary.com/dytlbyofu/image/upload/v1687301523/arrow_uwlj6u.png" 
                                          alt="arrow icon"
                                          className=" w-9 rotate-90"
                                      ></img>
                                  </button>
                              </div>
                          </div>
                      </div>
                    </form>


                    {/* <!-- Info Days --> */}
                    <div className="ml-4 px-4 mb-10">
                      <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]"> { pass ? '--' : `${year}` } </span> years</h2>
                      <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]"> { pass ? '--' : `${mon}` } </span> months</h2>
                      <h2 className="text-6xl font-extrabold"><span className="text-6xl font-extrabold text-[#854dff]"> { pass ? '--' : `${day}` } </span> days</h2>
                  </div>  

                </div>
            </section>
        </>
    )
}
