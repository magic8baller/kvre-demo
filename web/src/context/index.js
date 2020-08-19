import React, {useState} from "react"

const AppContext = React.createContext()

const AppProvider = ({children}) => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
	const showMobileNav = () => {
		setIsMobileNavOpen(true)
	}
	const hideMobileNav = () => {
		setIsMobileNavOpen(false)
	}
	const isOpen = isMobileNavOpen
	return (
		<AppContext.Provider value={{
			showMobileNav,
			isMobileNavOpen,
			isOpen,
			hideMobileNav,
			setIsMobileNavOpen
		}}>
			{children}
		</AppContext.Provider>
	)
}

export {AppProvider, AppContext}
