import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Cubiertos = () => {
	return (
		<ContenedorPagina>
			<Carta
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
