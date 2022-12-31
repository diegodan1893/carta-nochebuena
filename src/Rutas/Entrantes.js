import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Entrantes = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Entrantes"
				elementos={[
					"Piruletas de queso",
					"Tabla de patés",
					"Tabla de quesos Tolco",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Entrantes
