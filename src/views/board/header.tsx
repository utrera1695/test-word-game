import { ToggleTheme } from '../../components/icons/toggle-theme';
import questionCircle from '../../assets/icons/question-circle-fill.svg';
import chartFill from '../../assets/icons/chart-fill.svg';
import { useAppDispatch } from '../../store/hooks';
import { setShowInfo, setShowStats } from '../../store/logicSlice';

export const Header = (): JSX.Element => {
	const dispatch = useAppDispatch();

	return (
		<div className='rounded-xl flex justify-between items-center py-4 px-2 md:px-6 bg-[#f3f3f3] dark:bg-[#DADCE008]'>
			<div className='w-20'>
				<img
					className='cursor-pointer dark:brightness-200 w-5 md:w-auto'
					src={questionCircle}
					alt='info'
					onClick={() => dispatch(setShowInfo(true))}
				></img>
			</div>
			<h2 className='text-[#202537] dark:text-white font-semibold uppercase text-lg md:text-3xl'>
				Wordle
			</h2>
			<div className='flex w-20 gap-2.5'>
				<img
					className='cursor-pointer dark:invert w-6 md:w-auto '
					src={chartFill}
					alt='stats'
					onClick={() => dispatch(setShowStats(true))}
				/>
				<ToggleTheme></ToggleTheme>
			</div>
		</div>
	);
};
