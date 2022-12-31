import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Principales = () => {
	return (
		<ContenedorPagina>
			<Carta
				titulo="Tradicional caldo de Nochebuena"
				elementos={[
					"Pollo CUK",
					"Pollo criado en suelo",
					"Jamón Duroc",
					"Paletilla ibérica Duroc",
					"Picatostes",
					"Huevo",
					"Sal",
					"Hueso artesanal",
					"Nueces",
					"Avellanas",
					"Caldo",
					"Nochebuena",
					"Tradición",
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
