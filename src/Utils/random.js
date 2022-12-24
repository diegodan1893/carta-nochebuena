export const randomInRange = (min, max) => {
	const difference = max - min

	return Math.round(Math.random() * difference) + min
}
