import { useContext } from "react"
import { DaysContainer } from "../components/DaysContainer"

const useDaysConverter = () => {
    return useContext(DaysContainer)
}

export default useDaysConverter