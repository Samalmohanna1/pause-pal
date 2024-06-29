import { useState } from 'react'
import favicon from '/favicon.svg'

function App() {
	const [count, setCount] = useState(0)

	return (
		<main className='font-UbuntuMonoRegular container grid grid-cols-6 bg-slate-900 w-96 text-white'>
			<div className='col-span-6 mx-auto flex justify-center items-end gap-4 px-4 py-8'>
				<a
					className='rounded-3xl overflow-hidden w-24'
					href='https://react.dev'
					rel='noopener noreferrer'
					aria-label='visit PausePal marketing site.'
					target='_blank'
				>
					<img
						className='w-full max-w-24'
						src={favicon}
						alt='PausePal logo.'
					/>
				</a>
				<h1 className='text-6xl font-UbuntuMonoBold text-white'>
					Pause Pal
				</h1>
			</div>

			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='read-the-docs'>
				Click on the Vite and React logos to learn more
			</p>
		</main>
	)
}

export default App
