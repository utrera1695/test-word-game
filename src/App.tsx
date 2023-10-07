import { useEffect, useState } from 'react';
import { MainBoard } from './views/board/main';
import WordHandler from './helpers/handlers/wordsHandlers';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { setSecretWord, setShowStats, setValidWords } from './store/logicSlice';
import { Instructions } from './views/instructions/instructions';
import { Stats } from './views/stats/stats';
import moment from 'moment';

const App = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const showInfo = useAppSelector((state) => state.logic.showInfo);
	const showStats = useAppSelector((state) => state.logic.showStats);
	const newGame = useAppSelector((state) => state.logic.newGame);
	const [theme, setTheme] = useState('ligth');

	useEffect(() => {
		localStorage.theme === 'dark' ? setTheme('dark') : setTheme('ligth');
		if (
			localStorage.next_word &&
			moment().isBefore(moment(localStorage.next_word))
		) {
			dispatch(setShowStats(true));
		} else {
			localStorage.removeItem('next_word');
			/* get words of url */
			fetch('../src/assets/words.txt')
				.then(async (response) => await response.text())
				.then((response) => {
					const wordHandler = new WordHandler(response);
					const listOfWords = wordHandler.getListOfWords();
					dispatch(setValidWords(listOfWords));
					dispatch(setSecretWord(wordHandler.defineSecretWord()));
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [newGame]);

	return (
		<main id='main' className={theme}>
			<div className=' bg-white dark:bg-dark'>
				<div className=' flex justify-center items-center min-h-[100vh] relative w-[100%] md:w-[640px] md:m-auto'>
					{showInfo ? <Instructions></Instructions> : null}
					{showStats ? <Stats></Stats> : null}
					<MainBoard></MainBoard>
				</div>
			</div>
		</main>
	);
};

export default App;
