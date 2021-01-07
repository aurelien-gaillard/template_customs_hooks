import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/global_reducer'

const initialState = {
  // define the state and default value
}

const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        // Here pass the functions to be used
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

// creation of the customs hook to be used in the components
export const useGlobalContext = () => {
  return useContext(GlobalContext)
}

// Dont forget to wrap the App with the Provider
// <GlobalProvider>
//   <App />
// </GlobalProvider>
