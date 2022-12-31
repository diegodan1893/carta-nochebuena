import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Aperitivos = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Aperitivos"
				elementos={[
					"Polvorones",
					"Mantecados",
					"Danielitos",
					"Roscos de anís Gema",
					"Yemas de chocolate de Santa Teresa",
					"Surtido de canapés",
					"Fruta vegana",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Aperitivos
