/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ShortenContext = createContext()

export const ContextProvider = ({ children }) => {

  const [links, setLinks] = useState(['wedsx', 'ewdszx'])
  const [input, setInput] = useState('')

  return (
    <ShortenContext.Provider value={{
      links,
      setLinks
    }}>
      {children}
    </ShortenContext.Provider>
  )
}
export const useStateContext = () => useContext(ShortenContext)
