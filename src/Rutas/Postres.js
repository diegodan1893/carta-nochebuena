import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const Postres = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
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
