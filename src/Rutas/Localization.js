import ContenedorPagina from "../Componentes/ContenedorPagina"
import { TarjetaVacia } from "../Componentes/Tarjeta"
import mapa from "../resources/mapa.webp"

const Localizacion = () => {
	return (
		<ContenedorPagina>
			<TarjetaVacia>
				<h1 className="text-3xl">Localización</h1>
				<p className="text-lg my-5">
					1. f. Acción y efecto de localizar.
				</p>
				<img alt="Mapa del tesoro" src={mapa} />
			</TarjetaVacia>
		</ContenedorPagina>
	)
}

export default Localizacion
