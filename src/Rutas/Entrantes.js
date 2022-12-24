import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Entrantes = () => {
	return (
		<ListaCentrada>
			<Tarjeta
				titulo="Entrantes"
				elementos={[
					"Obligatoriedad a ayudar a montar un nacimiento improvisado",
				]}
			/>
		</ListaCentrada>
	)
}

export default Entrantes
