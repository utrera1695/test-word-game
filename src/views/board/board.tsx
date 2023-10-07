import WordHandler from '../../helpers/handlers/wordsHandlers';
import { useAppSelector } from '../../store/hooks';

export const Board = (): JSX.Element => {
	const words = useAppSelector((state) => state.logic.words);
	const secretWord = useAppSelector((state) => state.logic.secretWord);
	const row = useAppSelector((state) => state.logic.row);
	const wordHandler = new WordHandler();

	const setColor = (index: number, letter: string): string => {
		switch (wordHandler.testLetterWord(index, letter, secretWord)) {
			case 1:
				return 'bg-[#CEB02C]';
			case 2:
				return 'bg-[#66A060]';
			default:
				return 'bg-[#939B9F]';
		}
	};
	return (
		<div className='my-12 px-0 md:px-20'>
			{words.map((word, i) => (
				<div
					className='flex gap-4 justify-center items-center my-4'
					key={i}
					id={`row-${i}`}
				>
					{word.map((letter, j) => (
						<div
							id={`letter-${i}-${j}`}
							className={`flex justify-center items-center font-semibold uppercase text-3xl w-[40px] md:w-[70px] h-[40px] md:h-[70px] dark:text-white ${
								letter !== '' && row > i
									? setColor(j, letter)
									: 'bg-[#939B9F4D]'
							} rounded`}
							key={`${i}-${j}`}
						>
							{letter}
						</div>
					))}
				</div>
			))}
		</div>
	);
};
