import React, { useContext } from 'react'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // here define state and function to be passed to the app

  return (
    <AppContext.Provider
      value={
        {
          // Here pass the state and functions to be used
        }
      }
    >
      {children}
    </AppContext.Provider>
  )
}

// creation of the customs hook to be used in the components
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

// Dont forget to wrap the App with the Provider
// <AppProvider>
//   <App />
// </AppProvider>
