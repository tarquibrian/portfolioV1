import React, { useState } from "react"
import { createContext } from "react"

export const Context = createContext()

export const ContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <Context.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </Context.Provider>
  )
}