import React, { useState } from "react"

const AppContext = React.createContext()

//Provider, Consumer

const AppProvider = ({ children }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const showMobileNav = () => {
    setIsMobileNavOpen(true)
  }
  const hideMobileNav = () => {
    setIsMobileNavOpen(false)
  }

  return (
    <AppContext.Provider
      value={{ isMobileNavOpen, setIsMobileNavOpen, showMobileNav, hideMobileNav }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider }