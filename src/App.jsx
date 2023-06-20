import React from 'react'
import { DaysContainer } from './components/DaysContainer'
import { Button } from './components/Button'
import { InfoDays } from './components/InfoDays'

export const App = () => {

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes('')){
          setError(true)
          setTimeout(() => {
              setError(false)
          }, "2000")
          return
      }
      // Limpiar Alerta
      setError('')

      // TODO: Cotizar
      cotizarSeguro()
    }

    return (
        <>
            <h1 className="flex justify-center items-center text-white uppercase text-3xl font-extrabold mt-[50px]">Age Calculator</h1>

            {/* <!-- Page container --> */}
            <section className="flex justify-center items-center mt-10">
                <div className="flex flex-col bg-white rounded-[20px] rounded-br-[110px]">
                    {/* <!-- Container Date Inputs --> */}
                    <form 
                      onSubmit={handleSubmit}
                      className="md:ml-4 mt-3 p-2 md:w-[500px] w-[380px] flex md:justify-start justify-center gap-2"
                    >
                        {/* <!-- Container Day --> */}
                        <DaysContainer 
                          title={ 'DD' }
                          label={ 'day'}
                        />
                        
                        {/* <!-- Container Month --> */}
                        <DaysContainer 
                          title={ 'MM' }
                          label={ 'month'}
                        />
                        
                        {/* <!-- Container Year -->  */}
                        <DaysContainer 
                          title={ 'YYYY' }
                          label={ 'year'}
                        />
                        
                    </form>

                    {/* <!-- Button --> */}
                    <Button 
                      onClick={ () => 'Hola mundo' }
                    />

                    {/* <!-- Info Days --> */}
                    <InfoDays 
                      year={'years'} 
                      month={'months'}
                      day={'days'}
                    />

                </div>
            </section>
        </>
    )
}
