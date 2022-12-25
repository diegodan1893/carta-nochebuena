export const Tarjeta = ({ children, className }) => {
	return (
		<div
			className={`flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm py-2 px-4 border-4 border-black shadow-md text-center ${className}`}
		>
			{children}
		</div>
	)
}

export default Tarjeta
