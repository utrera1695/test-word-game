import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { newGame, setShowStats } from '../../store/logicSlice';
import moment from 'moment';

export const Stats = (): JSX.Element => {
	const dispatch = useAppDispatch();

	const gameOver = useAppSelector((state) => state.logic.gameOver);
	const secretWord = useAppSelector((state) => state.logic.secretWord);
	const [showButton, setShowButton] = useState(true);
	const [currentTime, setCurrentTime] = useState(moment());
	const timeBetween = moment.duration(
		moment(localStorage.next_word).diff(currentTime),
	);
	useEffect(() => {
		if (localStorage.next_word) {
			setShowButton(false);
			const interval = setTimeout(() => {
				setCurrentTime(moment());
			}, 1000);
			if (timeBetween.asMinutes() <= 0 && timeBetween.asSeconds() <= 0) {
				clearTimeout(interval);
				setShowButton(true);
			}
			return () => {
				clearTimeout(interval);
			};
		}
	}, [timeBetween]);
	return (
		<>
			<div className='backdrop bg-[#F3F3F3E3] dark:bg-[#262b3ce3]'></div>
			<div className='dialog bg-[#F3F3F3] dark:bg-[#262B3C] border border-black dark:border-white absolute rounded-lg py-8 px-10 z-50 w-[90%]'>
				<h2 className='text-center font-semibold dark:text-white'>
					Estadisticas
				</h2>
				<div className='flex justify-around items-center my-11'>
					<div className='dark:text-white text-center'>
						<h2 className='font-semibold'>{localStorage.games}</h2>
						<h4>Jugadas</h4>
					</div>
					<div className='dark:text-white text-center'>
						<h2 className='font-semibold'>{localStorage.good_games}</h2>
						<h4>Victorias</h4>
					</div>
				</div>
				{gameOver === 2 ? (
					<p className='text-center dark:text-white'>
						La palabra era: <b className='uppercase'>{secretWord}</b>
					</p>
				) : null}
				{!showButton ? (
					<>
						<p className='dark:text-white text-center uppercase'>
							Siguiente palabra
						</p>
						<div className='text-center dark:text-white font-semibold text-2xl'>
							{timeBetween.minutes() >= 10
								? timeBetween.minutes()
								: '0' + timeBetween.minutes()}
							:
							{timeBetween.seconds() >= 10
								? timeBetween.seconds()
								: '0' + timeBetween.seconds()}
						</div>
					</>
				) : null}
				<div className='flex justify-center mt-8'>
					{showButton ? (
						<button
							onClick={() =>
								gameOver === 0
									? dispatch(setShowStats(false))
									: dispatch(newGame())
							}
						>
							{gameOver === 0 ? 'ACEPTAR' : '!JUGAR¡'}
						</button>
					) : null}
				</div>
			</div>
		</>
	);
};
