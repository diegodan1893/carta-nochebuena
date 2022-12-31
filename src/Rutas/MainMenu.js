import { Link } from "react-router-dom"
import ContenedorPagina from "../Componentes/ContenedorPagina"
import { año, nombreDia } from "../Utils/config"

const BotonMenu = ({ texto, fondo }) => {
	return (
		<Link
			className={`bg-white/50 backdrop-blur-sm hover:bg-red-500 hover:text-white py-2 px-4 border-4 border-black text-right uppercase shadow-md bg-cover bg-left ${fondo}`}
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
			<BotonMenu texto="Aperitivos" fondo="bg-aperitivos" />
			<BotonMenu texto="Entrantes" fondo="bg-entrantes" />
			<BotonMenu texto="Principales" fondo="bg-principales" />
			<BotonMenu texto="Acompañamientos" fondo="bg-acompañamientos" />
			<BotonMenu texto="Postres" fondo="bg-postres" />
			<BotonMenu texto="Bebidas" fondo="bg-bebidas" />
			<BotonMenu texto="Día" fondo="bg-dia" />
			<BotonMenu texto="Hora" fondo="bg-hora" />
			<BotonMenu texto="Localización" fondo="bg-localizacion" />
			<BotonMenu texto="Cubiertos" fondo="bg-cubiertos" />
			<BotonMenu texto="Palabra del día" fondo="bg-palabra" />
			<BotonMenu texto="Autodestrucción" fondo="bg-autodestruccion" />
			<BotonMenu texto="Legal" fondo="bg-legal" />
		</ContenedorPagina>
	)
}

export default MainMenu
