import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Postres = () => {
	return (
		<ListaCentrada>
			<Tarjeta
				titulo="Postres"
				elementos={[
					"Tronco de yema",
					"Café Nespresso",
					"Té de la Escarlata",
				]}
			/>
		</ListaCentrada>
	)
}

export default Postres
