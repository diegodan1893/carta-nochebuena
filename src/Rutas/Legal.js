import ContenedorPagina from "../Componentes/ContenedorPagina"
import { nombreDia } from "../Utils/config"

const Legal = () => {
	return (
		<ContenedorPagina>
			<h1 className="uppercase text-lg">Términos y condiciones</h1>
			<div className="text-sm space-y-5">
				<p>
					Los siguientes términos y condiciones (los “Términos y
					Condiciones”) rigen el consumo del surtido de dulces
					navideños excluyendo mazapanes y hojaldrinas (de ahora en
					adelante “mantecados” o “surtido navideño”) y el uso de los
					servicios ofrecidos en este sitio web (el “menú de{" "}
					{nombreDia}” o “menú”) que hace usted (el “comensal” o
					“invitado”). Los anfitriones (“anfitriones” o “nosotros”)
					pueden cambiar los Términos y Condiciones de vez en cuando,
					en cualquier momento sin ninguna notificación, solo
					publicando los cambios en un nuevo menú como este. AL
					CONSUMIR MANTECADOS O UTILIZAR LOS SERVICIOS DEL MENÚ DE{" "}
					<span className="uppercase">{nombreDia}</span>, USTED ACEPTA
					Y ESTÁ DE ACUERDO CON ESTOS TÉRMINOS Y CONDICIONES EN LO QUE
					SE REFIERE AL CONSUMO DE MANTECADOS Y EL USO DE LOS
					SERVICIOS DEL MENÚ. Si usted no está de acuerdo con estos
					Términos y Condiciones, no puede consumir mantecados ni
					influir en su consumo de ninguna otra manera, ni tampoco
					utilizar los servicios del menú de {nombreDia}.
				</p>
				<ol className="list-inside list-decimal space-y-3">
					<li>
						<span className="underline">Derechos de consumo</span>.
						Cada comensal tiene derecho al consumo de un mantecado
						de cada variedad.
					</li>
					<li>
						<span className="underline">Licencia limitada</span>.
						Los anfitriones no están obligados a proporcionar
						suficientes mantecados para todos los comensales.
					</li>
					<li>
						<span className="underline">
							Conductas permitidas de los anfitriones
						</span>
						. En caso de que no haya suficientes mantecados de una
						variedad para que todos los comensales puedan probarlos,
						se permite cualquier conducta por parte de los
						comensales para conseguir no quedarse sin uno, a
						excepción de conductas que causen:
						<ol className="mt-3 ml-8 list-[lower-alpha] space-y-3">
							<li>
								<span className="underline">
									Daños materiales
								</span>{" "}
								a cualquier propiedad de los anfitriones.
							</li>
							<li>
								<span className="underline">
									Daños personales
								</span>{" "}
								a cualquiera de los anfitriones.
							</li>
						</ol>
					</li>
					<li>
						<span className="underline">Indemnización</span>. Los
						comensales se obligan a defender, indemnizar y sacar a
						los anfitriones y sus afiliados en paz y a salvo de
						cualquier demanda, responsabilidad, costos y gastos, de
						cualquier naturaleza, incluyendo honorarios de abogados,
						en que incurriera como resultado del consumo de los
						mantecados o el reparto de los mismos.
					</li>
					<li>
						<span className="underline">
							Descargo de responsabilidad
						</span>
						. Los servicios de autodestrucción, día y hora del menú
						de {nombreDia} se ofrecen tal cual, sin garantía de
						ningún tipo, expresa o implícita, incluyendo pero no
						limitado a garantías de seguridad, correctitud e
						idoneidad para un propósito particular. En ningún caso
						los anfitriones serán responsables de ninguna
						reclamación, daños u otras responsabilidades, ya sea en
						una acción de contrato, agravio o cualquier otro motivo,
						derivadas de, fuera de o en conexión con los servicios
						de autodestrucción, día u hora o de su uso.
					</li>
				</ol>
				<p>
					Estos Términos y Condiciones fueron revisados por última vez
					el 26/12/2022.
				</p>
			</div>
		</ContenedorPagina>
	)
}

export default Legal
