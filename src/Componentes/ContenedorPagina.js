import { ScrollRestoration } from "react-router-dom"

const ContenedorPagina = ({ children }) => {
	return (
		<>
			<ScrollRestoration />
			<div className="flex flex-col mx-auto min-h-screen min-h-screen-ios justify-center max-w-sm space-y-3 px-4 pt-32 pb-48 font-oswald">
				{children}
			</div>
		</>
	)
}

export default ContenedorPagina
