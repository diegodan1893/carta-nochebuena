import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Entrantes = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Entrantes"
				elementos={[
					"Obligatoriedad a ayudar a montar un nacimiento improvisado",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Entrantes
