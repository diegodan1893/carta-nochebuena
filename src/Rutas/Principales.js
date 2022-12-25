import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Principales = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Caldo de nochebuena"
				elementos={[
					"Pollo CUK",
					"Pollo criado en suelo",
					"Jamón Duroc",
					"Picatostes",
					"Huevo",
					"Sal rosa",
					"Hueso artesanal",
					"Caldo",
					"Nochebuena",
					"Sin aceite de palma",
				]}
			/>
			<Carta
				titulo="Lasaña casera"
				elementos={["Ingredientes de lasaña"]}
			/>
		</ContenedorPagina>
	)
}

export default Principales
