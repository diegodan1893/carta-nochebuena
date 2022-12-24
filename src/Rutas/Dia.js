import { useEffect } from "react"
import { useState } from "react"
import { Dna } from "react-loader-spinner"
import { ClimbingBoxLoader } from "react-spinners"
import { SpinnerDotted } from "spinners-react"
import { randomInRange } from "../Utils/random"
import ListaCentrada from "../Componentes/ListaCentrada"
import { TarjetaVacia } from "../Componentes/Tarjeta"
import writtenNumber from "written-number"

const mesAleatorio = () => {
	const meses = [
		"pienero",
		"enero",
		"febrero",
		"marzo",
		"abril",
		"mayo",
		"junio",
		"julio",
		"agosto",
		"septiembre",
		"octubre",
		"noviembre",
		"diciembre",
	]

	const mes = randomInRange(0, 12)

	return meses[mes]
}

const Whirlpool = () => {
	return (
		<div class="whirlpool">
			<div class="ringspinner ring1"></div>
			<div class="ringspinner ring2"></div>
			<div class="ringspinner ring3"></div>
			<div class="ringspinner ring4"></div>
			<div class="ringspinner ring5"></div>
			<div class="ringspinner ring6"></div>
			<div class="ringspinner ring7"></div>
			<div class="ringspinner ring8"></div>
			<div class="ringspinner ring9"></div>
		</div>
	)
}

const Dia = () => {
	const [paso, setPaso] = useState(0)

	useEffect(() => {
		const contador = setTimeout(() => {
			if (paso < 4) {
				setPaso(paso + 1)
			}
		}, (3 + Math.random() * 5) * 1000)

		return () => {
			clearTimeout(contador)
		}
	}, [paso])

	return (
		<ListaCentrada>
			<TarjetaVacia>
				{paso === 0 && (
					<>
						<SpinnerDotted />
						<p className="mt-5">Calculando la fecha actual...</p>
					</>
				)}
				{paso === 1 && (
					<>
						<Dna />
						<p className="mt-5">Analizando especímenes vivos...</p>
					</>
				)}
				{paso === 2 && (
					<>
						<Whirlpool />
						<p className="mt-5">
							Simulando influencia de los campos cuánticos...
						</p>
					</>
				)}
				{paso === 3 && (
					<>
						<ClimbingBoxLoader color="#ffffff" />
						<p className="mt-5">Ya casi estamos...</p>
					</>
				)}
				{paso === 4 && (
					<>
						<p>Hoy es:</p>
						<p className="my-5 text-5xl">Nochebuena</p>
						<p className="text-lg">
							{randomInRange(-32, 32)} de {mesAleatorio()} de{" "}
							{writtenNumber(randomInRange(1970, 2026), {
								lang: "es",
							})}
						</p>
					</>
				)}
			</TarjetaVacia>
		</ListaCentrada>
	)
}

export default Dia
