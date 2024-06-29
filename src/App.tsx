import { useState } from 'react'
import favicon from '/favicon.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<main className='font-UbuntuMonoRegular container grid grid-cols-6 bg-slate-900 w-96 text-white gap-12 px-4 py-16 rounded-b-2xl overflow-hidden'>
			<div className='col-span-6 mx-auto flex justify-center items-end gap-4'>
				<a
					className='rounded-3xl overflow-hidden w-14'
					href='https://react.dev'
					rel='noopener noreferrer'
					aria-label='visit PausePal marketing site.'
					target='_blank'
				>
					<img
						className='w-full max-w-14'
						src={favicon}
						alt='PausePal logo.'
					/>
				</a>
				<h1 className='text-5xl font-UbuntuMonoBold text-white'>
					Pause Pal
				</h1>
			</div>

			<div className='col-span-6 mx-auto'>
				<button
					className='px-8 py-4 rounded-lg font-UbuntuMonoBold text-xl bg-sky-500 text-black'
					onClick={() => setCount((count) => count + 1)}
				>
					count is {count}
				</button>
			</div>
			<p className='col-span-4 col-start-2 mx-auto'>
				Click on the Vite and React logos to learn more
			</p>
		</main>
	)
}

export default App
