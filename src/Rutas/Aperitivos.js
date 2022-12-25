import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const Aperitivos = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
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
