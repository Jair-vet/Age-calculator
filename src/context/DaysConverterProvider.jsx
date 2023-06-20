import { createContext, useState } from 'react'
import { calcularMarca, calcularPlan, formatearDinero, obtenerDiferenciaYear } from '../helpers'

const CotizadorContext = createContext()

const CotizadorProvider = ({children}) => {

    const [datos, setDatos] = useState({
        day: '',
        month: '',
        year: '',
    })

    const [resultado, setResultado] = useState(0)

    const handleChangeDatos = e => {
        setDatos({
            ...datos,  // Tomar una copia
            [e.target.name] : e.target.value
        })
    }

    

    return(
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                resultado,
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}

export default CotizadorContext