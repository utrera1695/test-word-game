import { useAppDispatch } from '../../store/hooks';
import { setShowInfo } from '../../store/logicSlice';

export const Instructions = (): JSX.Element => {
	const dispatch = useAppDispatch();
	return (
		<>
			<div className='backdropc bg-[#F3F3F3E3] dark:bg-[#262b3ce3]'></div>
			<div className='bg-[#F3F3F3] dark:bg-[#262B3C] border border-black dark:border-white absolute rounded-lg py-4 md:py-8 px-4 md:px-10 z-50 w-[100%] md:w-[90%]'>
				<h2 className='text-center font-semibold dark:text-white'>
					Cómo jugar
				</h2>
				<p className='dark:text-white'>
					Adivina la palabra oculta en cinco intentos
				</p>
				<p className='dark:text-white'>
					Cada intento debe ser una palabra valida de 5 letras
				</p>
				<p className='dark:text-white'>
					Despues de cada intento el color de las letras cambia para mostrar que
					tan cerca estas de acertar la palabra
				</p>
				<p className='dark:text-white'>
					<b>Ejemplos</b>
				</p>
				<div className='flex justify-center items-center gap-4 my-4'>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px]  md:h-[70px] bg-[#66A060] dark:text-white rounded'>
						G
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px]  md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						A
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px]  md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						T
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px]  md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						O
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px]  md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						S
					</div>
				</div>
				<p className='dark:text-white'>
					La letra <b>G</b> está en la palabra y en la posición correcta.
				</p>
				<div className='flex justify-center items-center gap-4 my-4'>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						V
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						O
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-[#CEB02C] dark:text-white rounded'>
						C
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						A
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						L
					</div>
				</div>
				<p className='dark:text-white'>
					La letra <b>C</b> está en la palabra pero en la posición incorrecta.
				</p>
				<div className='flex justify-center items-center gap-4 my-4'>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						V
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						O
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						C
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-white dark:bg-[#262B3C] border border-black dark:border-white dark: text-white rounded'>
						A
					</div>
					<div className='flex justify-center items-center font-semibold uppercase text-lg md:text-3xl w-[40px] h-[40px] md:w-[70px] md:h-[70px] bg-[#939B9F] dark:text-white rounded'>
						L
					</div>
				</div>
				<p className='dark:text-white'>
					La letra <b>O</b> no está en la palabra.
				</p>
				<p className='dark:text-white'>
					Puede haber letras repetidas. Las pistas son independientes para cada
					letra.
				</p>
				<p className='text-center dark:text-white'>
					¡Una palabra nueva cada 5 minutos!
				</p>
				<div className='flex justify-center mt-8'>
					<button onClick={() => dispatch(setShowInfo(false))}>!JUGAR¡</button>
				</div>
			</div>
		</>
	);
};
