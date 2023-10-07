export const animateLetter = (row: number, col: number): void => {
	const letter = document.getElementById(`letter-${row}-${col}`);
	letter?.classList.add('bounce');
	setTimeout(() => {
		letter?.classList.remove('bounce');
	}, 1000);
};

export const animateErrorWord = (row: number): void => {
	const word = document.getElementById(`row-${row}`);
	word?.classList.add('shake');
	setTimeout(() => {
		word?.classList.remove('shake');
	}, 1000);
};
