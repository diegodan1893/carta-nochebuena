import { useEffect } from "react"

const Autodestruccion = () => {
	useEffect(() => {
		let txt = "a"

		while (true) {
			txt = txt + "a"
		}
	}, [])
	return null
}

export default Autodestruccion
