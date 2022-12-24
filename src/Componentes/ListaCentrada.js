const ListaCentrada = ({ children }) => {
	return (
		<div className="flex mx-auto flex-col px-5 items-center max-w-xl min-h-screen min-h-screen-ios justify-center gap-10">
			{children}
		</div>
	)
}

export default ListaCentrada
