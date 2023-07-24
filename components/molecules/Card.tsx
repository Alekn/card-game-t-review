import { Button } from '../atoms/Button'

export function Card({ ...props }) {
	return (
		<div className="w-64 h-52 flex flex-col justify-between border rounded-2xl p-2">
			<div className="flex justify-between items-center">
				<div>Evoplay</div>
				<div>info</div>
			</div>
			<div className="flex justify-center">
				<Button size={'small'} intent={'accent'}>
					jugar ahora
				</Button>
			</div>
			<div className="flex justify-between items-center">
				<div>Name of the Game</div>
				<div>Bonus</div>
			</div>
		</div>
	)
}
