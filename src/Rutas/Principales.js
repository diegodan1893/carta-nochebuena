import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const Principales = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
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
			<Tarjeta
				titulo="Lasaña casera"
				elementos={["Ingredientes de lasaña"]}
			/>
		</ContenedorPagina>
	)
}

export default Principales
