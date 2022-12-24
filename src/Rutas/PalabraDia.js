import { useCallback, useEffect, useMemo, useState } from "react"
import { Fade, Flip, Roll, Zoom } from "react-awesome-reveal"
import ListaCentrada from "../Componentes/ListaCentrada"
import { TarjetaVacia } from "../Componentes/Tarjeta"
import { palabras } from "../Utils/diccionario"
import { randomInRange } from "../Utils/random"

const PalabraDia = () => {
	const [paso, setPaso] = useState(0)
	const [palabra, setPalabra] = useState("")

	const generarPalabra = useCallback(() => {
		const indice = randomInRange(0, palabras.length)
		setPalabra(palabras[indice])
	}, [])

	useEffect(() => {
		generarPalabra()
	}, [generarPalabra])

	useEffect(() => {
		const contador = setTimeout(() => {
			if (paso < 3) {
				setPaso(paso + 1)
			}
		}, 2000)

		return () => {
			clearTimeout(contador)
		}
	}, [paso])

	return (
		<ListaCentrada>
			<TarjetaVacia className="h-96">
				{paso === 0 && (
					<Zoom delay={500}>
						<p className="text-5xl">La palabra del día</p>
					</Zoom>
				)}
				{paso === 1 && (
					<Flip>
						<p className="text-5xl">La palabra del día</p>
					</Flip>
				)}
				{paso === 2 && (
					<Roll>
						<p className="text-5xl">es...</p>
					</Roll>
				)}
				{paso === 3 && (
					<>
						<Zoom duration={15000}>
							<p className="text-5xl mb-16">{palabra}</p>
						</Zoom>
						<Fade delay={5000}>
							<button onClick={generarPalabra}>Otra</button>
						</Fade>
					</>
				)}
			</TarjetaVacia>
		</ListaCentrada>
	)
}

export default PalabraDia
