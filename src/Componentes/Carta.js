const Carta = ({ titulo, elementos }) => {
	return (
		<div className="flex flex-col mb-6 last:mb-0 text-center">
			<h1 className="first-letter:text-red-500 uppercase text-3xl mb-5">
				{titulo}
			</h1>
			<div>
				{elementos.map((elemento, i) => (
					<div key={i}>{elemento}</div>
				))}
			</div>
		</div>
	)
}

export default Carta
