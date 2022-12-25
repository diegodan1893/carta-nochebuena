import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const shuffle = (array) => array.sort((a, b) => 0.5 - Math.random())

const Acompanamientos = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
				titulo="Acompañamientos"
				elementos={shuffle([
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
					"Nochebueno",
					"Nochebueno",
					"Nochebueno",
					"Nochebueno",
					"Nochebueno (sin azúcar)",
					"Nochebueno (sin azúcar)",
				])}
			/>
		</ContenedorPagina>
	)
}

export default Acompanamientos
