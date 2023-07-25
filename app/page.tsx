import { SupplierLablel } from '@/components/atoms/SupplierLabel'
import { Card } from '@/components/molecules/Card'
import { ButtonIcon } from '@/components/atoms/ButtonIcon'

import evoplay from '../public/images/evoplay.png'
import pragmaticPlay from '../public/images/pragmaticPlay.png'
import playTech from '../public/images/playTech.png'
import spinomenal from '../public/images/spinomenal.png'
import bonus from '../public/images/bonus.png'
import info from '../public/images/info.png'

interface Info {
	moodBonus: boolean
	rtp: string
	version: number
}

export interface GameDetail {
	disabled: boolean
	info: Info
	name: string
	src: string
	supplier: string
}

async function getCardGameData(): Promise<Array<GameDetail> | string> {
	const res = await fetch(
		'https://run.mocky.io/v3/a095fe75-f09e-45fa-967c-4b9c4c908fb3'
	)

	if (!res.ok) {
		throw new Error('Failed to fetch game data')
	}

	return res.json()
}

export default async function Home() {
	const gamesData = await getCardGameData()

	const isGameDataAvailable = typeof gamesData !== 'string'

	console.log({ gamesData })

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{isGameDataAvailable &&
				gamesData.map((game, i) => <Card key={i} details={game} />)}

			<SupplierLablel src={evoplay} alt="evoplay" />
			<SupplierLablel src={pragmaticPlay} alt="evoplay" />
			<SupplierLablel src={playTech} alt="playTech" />
			<SupplierLablel src={spinomenal} alt="spinomenal" />
			<ButtonIcon src={bonus} alt="bonus" />
			<ButtonIcon src={info} alt="info" />
		</main>
	)
}
