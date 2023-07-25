import { Button } from '../atoms/Button'
import { ButtonIcon } from '../atoms/ButtonIcon'

import { VariantProps, cva } from 'class-variance-authority'
import { CardHeader } from './CardHeader'
import { IGameDetail } from '@/app/page'
import { CardDetails } from './CardDetails'
import bonus from '../../public/images/bonus.png'

const cardStyles = cva(
	[
		'flex flex-col justify-between relative',
		'w-64 h-52 border rounded-2xl overflow-hidden from-black',
	],
	{
		variants: {
			disabled: {
				false: 'group/bg transition hover:bg-gradient-to-t bg-opacity-20',
				true: 'bg-black/60',
			},
		},
	}
)

export interface Props extends VariantProps<typeof cardStyles> {
	details: IGameDetail
}

export function Card({ details, disabled, ...props }: Props) {
	const isDisabled = details.disabled
	const hasBonus = details.info.moodBonus
	return (
		<div className={cardStyles({ disabled: isDisabled })} {...props}>
			<img
				className={'object-fill object-center max-h-none h-full -z-20 absolute'}
				src={details.src}
				alt={details.name}
			/>
			<div className="p-2 flex flex-col justify-between h-full relative">
				<CardHeader supplier={details.supplier} isDisabled={isDisabled} />
				<div className="h-full self-center flex items-center absolute top-0">
					<Button size={'small'} intent={'accent'} disabled={isDisabled}>
						jugar ahora
					</Button>
				</div>
				<div className="flex justify-between items-end">
					<CardDetails name={details.name} info={details.info} />
					{hasBonus && !isDisabled && <ButtonIcon src={bonus} alt="bonus" />}
				</div>
			</div>
		</div>
	)
}
