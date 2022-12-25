import Snowfall from "react-snowfall"
import { createHashRouter, RouterProvider } from "react-router-dom"
import MainMenu from "./Rutas/MainMenu"
import Aperitivos from "./Rutas/Aperitivos"
import "./index.css"
import Entrantes from "./Rutas/Entrantes"
import Principales from "./Rutas/Principales"
import Acompanamientos from "./Rutas/Acompanamientos"
import Postres from "./Rutas/Postres"
import Bebidas from "./Rutas/Bebidas"
import Dia from "./Rutas/Dia"
import Hora from "./Rutas/Hora"
import Localizacion from "./Rutas/Localization"
import Cubiertos from "./Rutas/Cubiertos"
import PalabraDia from "./Rutas/PalabraDia"
import Autodestruccion from "./Rutas/Autodestruccion"

const router = createHashRouter([
	{
		path: "/",
		element: <MainMenu />,
	},
	{
		path: "/Aperitivos",
		element: <Aperitivos />,
	},
	{
		path: "/Entrantes",
		element: <Entrantes />,
	},
	{
		path: "/Principales",
		element: <Principales />,
	},
	{
		path: "/Acompañamientos",
		element: <Acompanamientos />,
	},
	{
		path: "/Postres",
		element: <Postres />,
	},
	{
		path: "/Bebidas",
		element: <Bebidas />,
	},
	{
		path: "/Día",
		element: <Dia />,
	},
	{
		path: "/Hora",
		element: <Hora />,
	},
	{
		path: "/Localización",
		element: <Localizacion />,
	},
	{
		path: "/Cubiertos",
		element: <Cubiertos />,
	},
	{
		path: "/Palabra del día",
		element: <PalabraDia />,
	},
	{
		path: "/Autodestrucción",
		element: <Autodestruccion />,
	},
])

const App = () => {
	return (
		<div className="bg-black">
			<RouterProvider router={router} />
			<Snowfall />
		</div>
	)
}

export default App
