import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Principales = () => {
	return (
		<ListaCentrada>
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
		</ListaCentrada>
	)
}

export default Principales
