import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const shuffle = (array) => array.sort((a, b) => 0.5 - Math.random())

const Acompanamientos = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Acompañamientos"
				elementos={shuffle([
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
					"Barra gallega",
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
