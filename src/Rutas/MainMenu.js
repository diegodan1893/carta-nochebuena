import { Link } from "react-router-dom"

const BotonMenu = ({ texto, ruta }) => {
	return (
		<Link
			className="bg-slate-800 text-white rounded-lg py-2 min-w-full my-2 hover:bg-slate-700 text-center"
			to={`/${texto}`}
		>
			{texto}
		</Link>
	)
}

const MainMenu = () => {
	return (
		<div className="flex mx-auto flex-col px-5 items-center max-w-xl min-h-screen min-h-screen-ios justify-center">
			<BotonMenu texto="Aperitivos" />
			<BotonMenu texto="Entrantes" />
			<BotonMenu texto="Principales" />
			<BotonMenu texto="Acompañamientos" />
			<BotonMenu texto="Postres" />
			<BotonMenu texto="Bebidas" />
			<BotonMenu texto="Día" />
			<BotonMenu texto="Hora" />
			<BotonMenu texto="Localización" />
			<BotonMenu texto="Cubiertos" />
			<BotonMenu texto="Palabra del día" />
			<BotonMenu texto="Autodestrucción" />
		</div>
	)
}

export default MainMenu
