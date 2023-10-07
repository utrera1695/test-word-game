import { useEffect } from 'react';
import backspace from '../../assets/icons/backspace.svg';
import WordHandler from '../../helpers/handlers/wordsHandlers';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addLetter, checkWord, removeLetter } from '../../store/logicSlice';

export const Keyboard = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const secretWord = useAppSelector((state) => state.logic.secretWord);
	const row = useAppSelector((state) => state.logic.row);
	const words = useAppSelector((state) => state.logic.words);
	const wordHandler = new WordHandler();

	const setColor = (letter: string): string => {
		switch (wordHandler.testLetterKeyBoard(row, letter, secretWord, words)) {
			case 1:
				return 'bg-[#66A060] text-white';
			case 2:
				return 'bg-[#818181] text-white';
			default:
				return 'bg-[#D3D6DA] dark:bg-[#565F7E] text-[#56575E] dark:text-white';
		}
	};
	useEffect(() => {
		document.addEventListener('keyup', (event) => {
			if (event.key === 'Enter') {
				dispatch(checkWord());
				return;
			}
			if (event.key === 'Backspace' || event.key === 'Delete') {
				dispatch(removeLetter());
				return;
			}
			if (/^[a-zA-Z]$/i.test(event.key)) dispatch(addLetter(event.key));
		});
	}, []);
	return (
		<div className='keyboard bg-[#DADCE04D] dark:bg-[#DADCE008] rounded-xl py-8 px-1 md:px-5'>
			<div className='flex md:justify-center gap-2 md:gap-2.5'>
				<div
					onClick={() => dispatch(addLetter('q'))}
					className={`key ${setColor('q')}`}
				>
					q
				</div>
				<div
					onClick={() => dispatch(addLetter('w'))}
					className={`key ${setColor('w')}`}
				>
					w
				</div>
				<div
					onClick={() => dispatch(addLetter('e'))}
					className={`key ${setColor('e')}`}
				>
					e
				</div>
				<div
					onClick={() => dispatch(addLetter('r'))}
					className={`key ${setColor('r')}`}
				>
					r
				</div>
				<div
					onClick={() => dispatch(addLetter('t'))}
					className={`key ${setColor('t')}`}
				>
					t
				</div>
				<div
					onClick={() => dispatch(addLetter('y'))}
					className={`key ${setColor('y')}`}
				>
					y
				</div>
				<div
					onClick={() => dispatch(addLetter('u'))}
					className={`key ${setColor('u')}`}
				>
					u
				</div>
				<div
					onClick={() => dispatch(addLetter('i'))}
					className={`key ${setColor('i')}`}
				>
					i
				</div>
				<div
					onClick={() => dispatch(addLetter('o'))}
					className={`key ${setColor('o')}`}
				>
					o
				</div>
				<div
					onClick={() => dispatch(addLetter('p'))}
					className={`key ${setColor('p')}`}
				>
					p
				</div>
			</div>
			<div className='flex md:justify-end gap-2 md:gap-2.5 my-2 pl-0 md:pl-12'>
				<div
					onClick={() => dispatch(addLetter('a'))}
					className={`key ${setColor('a')}`}
				>
					a
				</div>
				<div
					onClick={() => dispatch(addLetter('s'))}
					className={`key ${setColor('s')}`}
				>
					s
				</div>
				<div
					onClick={() => dispatch(addLetter('d'))}
					className={`key ${setColor('d')}`}
				>
					d
				</div>
				<div
					onClick={() => dispatch(addLetter('f'))}
					className={`key ${setColor('f')}`}
				>
					f
				</div>
				<div
					onClick={() => dispatch(addLetter('g'))}
					className={`key ${setColor('g')}`}
				>
					g
				</div>
				<div
					onClick={() => dispatch(addLetter('h'))}
					className={`key ${setColor('h')}`}
				>
					h
				</div>
				<div
					onClick={() => dispatch(addLetter('j'))}
					className={`key ${setColor('j')}`}
				>
					j
				</div>
				<div
					onClick={() => dispatch(addLetter('k'))}
					className={`key ${setColor('k')}`}
				>
					k
				</div>
				<div
					onClick={() => dispatch(addLetter('l'))}
					className={`key ${setColor('l')}`}
				>
					l
				</div>
				<div
					onClick={() => dispatch(addLetter('ñ'))}
					className={`key ${setColor('ñ')}`}
				>
					ñ
				</div>
			</div>
			<div className='flex gap-2 md:gap-2.5'>
				<div
					onClick={() => dispatch(checkWord())}
					className='key !min-w-[43px] md:!min-w-[70px]  md:!px-12 bg-[#D3D6DA] dark:bg-[#565F7E] dark:text-white'
				>
					enter
				</div>
				<div
					onClick={() => dispatch(addLetter('z'))}
					className={`key ${setColor('z')}`}
				>
					z
				</div>
				<div
					onClick={() => dispatch(addLetter('x'))}
					className={`key ${setColor('x')}`}
				>
					x
				</div>
				<div
					onClick={() => dispatch(addLetter('c'))}
					className={`key ${setColor('c')}`}
				>
					c
				</div>
				<div
					onClick={() => dispatch(addLetter('v'))}
					className={`key ${setColor('v')}`}
				>
					v
				</div>
				<div
					onClick={() => dispatch(addLetter('b'))}
					className={`key ${setColor('b')}`}
				>
					b
				</div>
				<div
					onClick={() => dispatch(addLetter('n'))}
					className={`key ${setColor('n')}`}
				>
					n
				</div>
				<div
					onClick={() => dispatch(addLetter('m'))}
					className={`key ${setColor('m')}`}
				>
					m
				</div>
				<div
					onClick={() => dispatch(removeLetter())}
					className='key !min-w-[40px] md:!min-w-[70px] bg-[#D3D6DA] dark:bg-[#565F7E]'
				>
					<img src={backspace} alt='back' className='dark:brightness-[15]' />
				</div>
			</div>
		</div>
	);
};
