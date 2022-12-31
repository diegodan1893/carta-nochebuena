import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Postres = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Postres"
				elementos={[
					"Piña",
					"Tarta de piononos y yogur griego",
					"Café",
					"Té de la Escarlata",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Postres
