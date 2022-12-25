import ContenedorPagina from "../Componentes/ContenedorPagina"
import Carta from "../Componentes/Carta"

const Bebidas = () => {
	return (
		<ContenedorPagina>
			<Carta
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
		</ContenedorPagina>
	)
}

export default Bebidas
