import { useEffect, useState } from 'react';
import cloud from '../../assets/icons/cloud.svg';
import start from '../../assets/icons/start.svg';
export const ToggleTheme = (): JSX.Element => {
	const [theme, setTheme] = useState('ligth');

	useEffect(() => {
		localStorage.theme === 'dark' ? setTheme('dark') : setTheme('ligth');
	}, []);

	const changeTheme = (): void => {
		if (theme === 'dark') {
			setTheme('ligth');
			document.getElementById('main')?.classList.replace('dark', 'ligth');
			localStorage.setItem('theme', 'ligth');
		} else {
			setTheme('dark');
			document.getElementById('main')?.classList.replace('ligth', 'dark');
			localStorage.setItem('theme', 'dark');
		}
	};
	return (
		<label id='toggle-button'>
			<input
				type='checkbox'
				id='toggle'
				onChange={changeTheme}
				checked={theme === 'dark'}
			></input>
			<div className='container'>
				<div className='button'></div>
				{theme === 'ligth' ? (
					<>
						<img
							src={cloud}
							alt='cloud'
							className='absolute left-4 top-2 w-1'
						/>
						<img src={cloud} alt='cloud' className='absolute left-1 top-1' />
					</>
				) : (
					<>
						<img
							src={start}
							alt='start'
							className='absolute right-3 top-2 w-[3px]'
						/>
						<img
							src={start}
							alt='start'
							className='absolute right-5 top-1 w-[2px]'
						/>
						<img src={start} alt='start' className='absolute right-1 top-1 ' />
					</>
				)}
			</div>
		</label>
	);
};
