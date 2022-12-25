import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Postres = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Postres"
				elementos={[
					"Tronco de yema",
					"Café Nespresso",
					"Té de la Escarlata",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Postres
