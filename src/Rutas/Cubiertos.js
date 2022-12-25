import ContenedorPagina from "../Componentes/ContenedorPagina"
import Tarjeta from "../Componentes/Tarjeta"

const Cubiertos = () => {
	return (
		<ContenedorPagina>
			<Tarjeta
				titulo="Cubiertos"
				elementos={[
					"Tenedores",
					"Cuchillos",
					"Cucharas soperas",
					"Cucharillas",
					"Cazo",
					"Rasera plana",
					"Rasera redonda",
					"La cosa esa triangular para coger la tarta",
				]}
			/>
		</ContenedorPagina>
	)
}

export default Cubiertos
