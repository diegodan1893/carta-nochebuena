import { useEffect } from "react"
import { useState } from "react"
import ContenedorPagina from "../Componentes/ContenedorPagina"
import { TarjetaVacia } from "../Componentes/Tarjeta"
import { randomInRange } from "../Utils/random"

const Hora = () => {
	const [tipo, setTipo] = useState(0)
	const [hora, setHora] = useState("")

	useEffect(() => {
		setTipo(randomInRange(0, 3))
	}, [])

	useEffect(() => {
		const calcularHora = () => {
			switch (tipo) {
				case 0:
					setHora(Math.floor(Date.now() / 1000))
					break
				case 1:
					const hoy = new Date()
					setHora(hoy.toISOString())
					break
				case 2:
					setHora("hace 0 segundos")
					break
				case 3:
					const hora = randomInRange(0, 25)
					const minuto = randomInRange(0, 61)
					const segundo = randomInRange(0, 61)
					setHora(`${hora}:${minuto}:${segundo}`)
					break
				default:
					setHora("No deberías ver esto")
					break
			}
		}

		calcularHora()

		const temporizador = setInterval(() => {
			calcularHora()
		}, 1000)

		return () => clearInterval(temporizador)
	}, [tipo])

	return (
		<ContenedorPagina>
			<TarjetaVacia>
				<p>Ahora mismo son las</p>
				<p className="m-5 text-xl">{hora}</p>
			</TarjetaVacia>
		</ContenedorPagina>
	)
}

export default Hora
