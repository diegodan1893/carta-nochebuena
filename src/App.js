import Snowfall from "react-snowfall"
import { createHashRouter, RouterProvider } from "react-router-dom"
import MainMenu from "./Rutas/MainMenu"
import Aperitivos from "./Rutas/Aperitivos"
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
import Legal from "./Rutas/Legal"

import "./index.css"
import Pinos from "./resources/pinos"
import Globo from "./resources/globo"

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
	{
		path: "/Legal",
		element: <Legal />,
	},
])

const Fondo = () => {
	return (
		<>
			<div className="absolute bottom-0 h-60 w-full overflow-clip bg-monte bg-auto bg-right -z-20" />
			<div className="absolute bottom-10 right-12 -z-20">
				<Pinos />
			</div>
			<div className="absolute bottom-14 right-36 -z-20">
				<Pinos />
			</div>
			<div className="absolute top-1/4 left-14 sm:left-64 -z-20 animate-float">
				<Globo />
			</div>
		</>
	)
}

const App = () => {
	return (
		<div className="relative min-h-screen min-h-screen-ios">
			<RouterProvider router={router} />
			<Fondo />
			<div className="fixed h-screen h-screen-ios w-screen top-0 -z-10">
				<Snowfall />
			</div>
		</div>
	)
}

export default App
