import { Board } from './board';
import { Header } from './header';
import { Keyboard } from './keyboard';

export const MainBoard = (): JSX.Element => {
	return (
		<div>
			<Header></Header>
			<Board></Board>
			<Keyboard></Keyboard>
		</div>
	);
};
