const React = require("react")
const {AppProvider} = require('./src/context')
exports.wrapRootElement = ({element}) => {
	return <AppProvider>{element}</AppProvider>
}