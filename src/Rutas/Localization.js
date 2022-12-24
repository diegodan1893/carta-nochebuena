import ListaCentrada from "../Componentes/ListaCentrada"
import { TarjetaVacia } from "../Componentes/Tarjeta"
import mapa from "../resources/mapa.webp"

const Localizacion = () => {
	return (
		<ListaCentrada>
			<TarjetaVacia>
				<h1 className="text-3xl">Localización</h1>
				<p className="text-lg my-5">
					1. f. Acción y efecto de localizar.
				</p>
				<img alt="Mapa del tesoro" src={mapa} />
			</TarjetaVacia>
		</ListaCentrada>
	)
}

export default Localizacion
