import { useEffect } from "react"

const Autodestruccion = () => {
	useEffect(() => {
		let txt = "a"

		while (true) {
			txt = txt + txt
		}
	}, [])
	return null
}

export default Autodestruccion
