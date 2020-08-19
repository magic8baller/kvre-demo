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
	
	return (
		<AppContext.Provider value={{
			showMobileNav,
			isMobileNavOpen,
			hideMobileNav,
			setIsMobileNavOpen
		}}>
			{children}
		</AppContext.Provider>
	)
}

export {AppProvider, AppContext}
