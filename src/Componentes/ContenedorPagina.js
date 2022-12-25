import { ScrollRestoration } from "react-router-dom"

const ContenedorPagina = ({ children }) => {
	return (
		<>
			<ScrollRestoration />
			<div className="flex mx-auto flex-col px-5 items-center max-w-xl min-h-screen min-h-screen-ios justify-center gap-10">
				{children}
			</div>
		</>
	)
}

export default ContenedorPagina
