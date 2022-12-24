import ListaCentrada from "../Componentes/ListaCentrada"
import Tarjeta from "../Componentes/Tarjeta"

const Bebidas = () => {
	return (
		<ListaCentrada>
			<Tarjeta
				titulo="Bebidas"
				elementos={[
					"Sidra",
					"Champán",
					"Coca-Cola",
					"Fanta de Naranja",
					"Café Nespresso",
					"Descafeinado",
					"ColaCao",
					"Leche",
					"Agua mineral natural",
					"Agua del grifo",
					"Té de la Escarlata",
				]}
			/>
		</ListaCentrada>
	)
}

export default Bebidas
