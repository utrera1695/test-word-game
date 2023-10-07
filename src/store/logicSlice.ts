import { createSlice, current, type PayloadAction } from '@reduxjs/toolkit';
import WordHandler from '../helpers/handlers/wordsHandlers';
import {
	animateErrorWord,
	animateLetter,
} from '../helpers/animations/animations';
import moment from 'moment';

interface logicState {
	words: string[][];
	secretWord: string;
	validWords: string[];
	col: number;
	row: number;
	showInfo: boolean;
	showStats: boolean;
	gameOver: number /* 0: juego en curso, 1: juego ganado, 2: juego perdido */;
	newGame: number;
}

const initialState: logicState = {
	words: [
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	],
	secretWord: '',
	validWords: [],
	col: 0,
	row: 0,
	showInfo: localStorage.games === undefined,
	showStats: false,
	gameOver: parseInt(localStorage.gameOver) || 0,
	newGame: 0,
};

export const logicSlice = createSlice({
	name: 'logic',
	initialState,
	reducers: {
		setShowInfo: (state, action: PayloadAction<boolean>) => {
			state.showInfo = action.payload;
		},
		setShowStats: (state, action: PayloadAction<boolean>) => {
			state.showStats = action.payload;
		},
		setSecretWord: (state, action: PayloadAction<string>) => {
			state.secretWord = action.payload;
		},
		setValidWords: (state, action: PayloadAction<string[]>) => {
			state.validWords = action.payload;
		},
		addLetter: (state, action: PayloadAction<string>) => {
			if (state.col < 5) {
				if (state.words[state.row][state.col] === '') {
					state.words[state.row][state.col] = action.payload.toLowerCase();
					animateLetter(state.row, state.col);
				}
				if (state.col < 4) state.col += 1;
			}
		},
		removeLetter: (state) => {
			if (state.words[state.row][state.col] === '') {
				if (state.col > 0) {
					state.col -= 1;
					state.words[state.row][state.col] = '';
				}
			} else {
				state.words[state.row][state.col] = '';
			}
		},
		newGame: (state) => {
			state.words = [
				['', '', '', '', ''],
				['', '', '', '', ''],
				['', '', '', '', ''],
				['', '', '', '', ''],
				['', '', '', '', ''],
			];
			state.col = 0;
			state.row = 0;
			state.showStats = false;
			state.gameOver = 0;
			state.newGame += 1;
			localStorage.removeItem('gameOver');
		},
		checkWord: (state) => {
			const wordHandler = new WordHandler();
			if (
				wordHandler.isValidWord(
					current(state.validWords),
					state.words[state.row].reduce((a, b) => a.concat(b)),
				)
			) {
				if (
					state.secretWord ===
					state.words[state.row].reduce((a, b) => a.concat(b))
				) {
					state.showStats = true;
					state.gameOver = 1;
					localStorage.setItem('gameOver', '1');
					localStorage.setItem(
						'games',
						localStorage.games === undefined
							? '1'
							: (parseInt(localStorage.games || 0) + 1).toString(),
					);
					localStorage.setItem(
						'good_games',
						localStorage.good_games === undefined
							? '1'
							: (parseInt(localStorage.good_games || 0) + 1).toString(),
					);
					localStorage.setItem(
						'next_word',
						moment().add(5, 'minutes').toISOString(),
					);

					/* add to list of last words used */

					const lastWords = JSON.parse(localStorage.lastWords ?? '[]');
					lastWords.push(state.secretWord);
					localStorage.setItem('lastWords', JSON.stringify(lastWords));
				}
				if (state.row === 4) {
					state.showStats = true;
					state.gameOver = 2;
					localStorage.setItem('gameOver', '2');
					localStorage.setItem(
						'games',
						(parseInt(localStorage.games || 0) + 1).toString(),
					);
					localStorage.setItem(
						'next_word',
						moment().add(5, 'minutes').toISOString(),
					);
					/* add to list of last words used */

					const lastWords = JSON.parse(localStorage.lastWords ?? '[]');
					lastWords.push(state.secretWord);
					localStorage.setItem('lastWords', JSON.stringify(lastWords));
				}
				state.row += 1;
				state.col = 0;
			} else {
				animateErrorWord(state.row);
			}
		},
	},
});

export const {
	setSecretWord,
	setValidWords,
	addLetter,
	removeLetter,
	checkWord,
	setShowInfo,
	setShowStats,
	newGame,
} = logicSlice.actions;

export default logicSlice.reducer;
