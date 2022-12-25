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
					"Surtido de canapés pero de los raros",
					"Trenza de salmón y queso",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Aperitivos
