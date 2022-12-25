import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const Entrantes = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
				titulo="Entrantes"
				elementos={[
					"Obligatoriedad a ayudar a montar un nacimiento improvisado",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Entrantes
