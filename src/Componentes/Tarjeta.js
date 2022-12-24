export const TarjetaVacia = ({ children, className }) => {
	return (
		<div className={`text-white text-center bg-slate-900 rounded-xl flex min-w-full flex-col py-5 items-center px-5 justify-center ${className}`}>
			{children}
		</div>
	)
}

const Tarjeta = ({ titulo, elementos }) => {
	return (
		<TarjetaVacia>
			<h1 className="text-5xl mb-10">{titulo}</h1>
			<div>
				{elementos.map((elemento, i) => (
					<div key={i}>{elemento}</div>
				))}
			</div>
		</TarjetaVacia>
	)
}

export default Tarjeta
