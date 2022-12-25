import { Link } from "react-router-dom"
import ContenedorPagina from "../Componentes/ContenedorPagina"
import { año, nombreDia } from "../Utils/config"

const BotonMenu = ({ texto, fondo }) => {
	return (
		<Link
			className={`bg-white/50 backdrop-blur-sm hover:bg-red-500 hover:text-white py-2 px-4 border-4 border-black text-right uppercase shadow-md bg-cover bg-right ${fondo}`}
			to={`/${texto}`}
		>
			{texto}
		</Link>
	)
}

const MainMenu = () => {
	return (
		<ContenedorPagina>
			<h1 className="first-letter:text-red-500 uppercase text-3xl mb-16">
				{nombreDia} {año.slice(0, 2)}
				<span className="text-red-500">{año.slice(2, 4)}</span>
			</h1>
			<BotonMenu texto="Aperitivos" />
			<BotonMenu texto="Entrantes" />
			<BotonMenu texto="Principales" fondo="bg-principales" />
			<BotonMenu texto="Acompañamientos" />
			<BotonMenu texto="Postres" />
			<BotonMenu texto="Bebidas" fondo="bg-bebidas" />
			<BotonMenu texto="Día" fondo="bg-dia" />
			<BotonMenu texto="Hora" fondo="bg-hora" />
			<BotonMenu texto="Localización" />
			<BotonMenu texto="Cubiertos" />
			<BotonMenu texto="Palabra del día" />
			<BotonMenu texto="Autodestrucción" />
		</ContenedorPagina>
	)
}

export default MainMenu
