import React, { useContext } from 'react'
const GlobalContext = React.createContext()

export const GlobalProvider = ({ children }) => {
  // here define state and function to be passed to the app

  return (
    <GlobalContext.Provider
      value={
        {
          // Here pass the state and functions to be used
        }
      }
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
// <AppProvider>
//   <App />
// </AppProvider>
