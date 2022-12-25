import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Cubiertos = () => {
	return (
		<ListaCentrada>
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
		</ListaCentrada>
	)
}

export default Cubiertos