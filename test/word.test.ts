import WordHandler from '../src/helpers/handlers/wordsHandlers';

test('adds 1 + 2 to equal 3', async () => {
	fetch(await import('../src/assets/wordsTest.txt'))
		.then(async (response) => await response.text())
		.then((response) => {
			const wordHandler = new WordHandler(response);
			expect(wordHandler.getListOfWords(response)).toBe([
				'abacá',
				'abada',
				'abaje',
			]);
		});
});
