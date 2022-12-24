import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Aperitivos = () => {
	return (
		<ListaCentrada>
			<Tarjeta
				titulo="Aperitivos"
				elementos={[
					"Polvorones",
					"Mantecados",
					"Danielitos",
					"Roscos de anís Gema",
					"Surtido de canapés pero de los raros",
					"Trenza de salmón y queso",
				]}
			/>
		</ListaCentrada>
	)
}

export default Aperitivos
