import React from 'react'

export const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [id, setID] = React.useState(0)

  return (
    <UserContext.Provider
      value={{
        id,
        setID,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
