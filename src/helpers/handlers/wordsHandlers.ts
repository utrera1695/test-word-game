import { useAppSelector } from '../../store/hooks';

export default class WordHandler {
	private words: string[];
	constructor(words: any = null) {
		this.words = [];
		if (words) this.getListOfWords(words);
	}

	getListOfWords(words: any = null): string[] {
		if (!words) return this.words;
		const wordsSplit = words.split('\n');
		const wordsFilter = wordsSplit
			.filter((a: string) => a.length === 5)
			.filter((a: string) => !a.match(/([à-ü]|[À-Ü])/g));
		this.words = wordsFilter;
		return wordsFilter;
	}

	defineSecretWord(): string {
		const length = this.words.length;
		/* genera una palabra aleatoria */
		const index = Math.floor(Math.random() * length);
		const word = this.words[index];
		/* busca las ultimas palabras usadas */
		const lastWords = JSON.parse(localStorage.lastWords ?? '[]');
		/* si la palabra ya fue usada, busca una nueva */
		if (lastWords.includes(word)) return this.defineSecretWord();
		return word;
	}

	testLetterWord(index: number, letter: string, secretWord: string): number {
		if (!secretWord.includes(letter)) return 0;
		if (secretWord[index] !== letter) return 1;
		return 2;
	}
	/**
	 * @return 1 letter done
	 * @return 2 letter bad
	 * @return 0 letter unnuse
	 *  */

	testLetterKeyBoard(
		row: number,
		letter: string,
		secretWord: string,
		words: string[][],
	): number {
		//words.splice(1);
		const _words = [...words];
		_words.splice(row);
		if (_words.length <= 0) return 0;
		if (!_words.reduce((a, b) => a.concat(b)).includes(letter))
			return 0 /* letra sin usar */;
		else if (secretWord.includes(letter)) return 1; /* letra correcta */
		return 2; /* letra erronea */
	}

	isValidWord(words: string[], word: string): boolean {
		return words.includes(word);
	}
}
