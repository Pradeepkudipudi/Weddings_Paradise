import { createContext } from "react"

export const VenueContext = createContext()


const VenueContextProvider = (props) => {

const value = {

}

return(
    <VenueContext.Provider value={value}>
        {props.children}
    </VenueContext.Provider>
)


}


export default VenueContextProvider