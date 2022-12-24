import Snowfall from "react-snowfall"
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom"
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

const router = createBrowserRouter([
	{
		path: "/carta-nochebuena",
		element: <Navigate to="/carta-nochebuena/menu" replace={true} />,
	},
	{
		path: "/carta-nochebuena/menu",
		element: <MainMenu />,
	},
	{
		path: "/carta-nochebuena/Aperitivos",
		element: <Aperitivos />,
	},
	{
		path: "/carta-nochebuena/Entrantes",
		element: <Entrantes />,
	},
	{
		path: "/carta-nochebuena/Principales",
		element: <Principales />,
	},
	{
		path: "/carta-nochebuena/Acompañamientos",
		element: <Acompanamientos />,
	},
	{
		path: "/carta-nochebuena/Postres",
		element: <Postres />,
	},
	{
		path: "/carta-nochebuena/Bebidas",
		element: <Bebidas />,
	},
	{
		path: "/carta-nochebuena/Día",
		element: <Dia />,
	},
	{
		path: "/carta-nochebuena/Hora",
		element: <Hora />,
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
