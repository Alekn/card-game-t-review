import { Button } from '../atoms/Button'
import { SupplierLablel } from '../atoms/SupplierLabel'
import { ButtonIcon } from '../atoms/ButtonIcon'
import { CardText } from '../atoms/CardText'

import evoplay from '../../public/images/evoplay.png'
import info from '../../public/images/info.png'
import bonus from '../../public/images/bonus.png'
import { VariantProps, cva } from 'class-variance-authority'
import { GameDetail } from '@/app/page'

const cardStyles = cva(
	[
		'flex flex-col justify-between relative',
		'w-64 h-52 border rounded-2xl overflow-hidden',
		// 'bg-gradient-to-t from-black to-white bg-opacity-20',
	],
	{
		variants: {
			size: {
				small: 'text-xs tracking-tight',
			},
		},
	}
)

export interface Props extends VariantProps<typeof cardStyles> {
	details: GameDetail
}

export function Card({ details, ...props }: Props) {
	return (
		<div className={cardStyles({})} {...props}>
			<img
				className={'object-fill object-center max-h-none h-full -z-20 absolute'}
				src={details.src}
				alt={details.name}
			/>
			<div className="p-2 flex flex-col justify-between h-full relative">
				<div className="flex justify-between items-center">
					<SupplierLablel src={evoplay} alt="evoplay" size={'medium'} />
					<ButtonIcon src={info} alt="info" />
				</div>
				<div className="flex items-center justify-between">
					<Button size={'small'} intent={'accent'}>
						jugar ahora
					</Button>
				</div>
				<div className="flex justify-between items-end">
					<div className="flex flex-col justify-center items-start space-y-1">
						<CardText>{details.name}</CardText>
						<div className="flex space-x-1">
							<CardText intent={'detail'}>
								<div>Version:</div> <div>{details.info.version}</div>
							</CardText>
							<CardText intent={'detail'}>
								<div>Rtp:</div> <div>{details.info.rtp}</div>
							</CardText>
						</div>
					</div>
					<ButtonIcon src={bonus} alt="bonus" />
				</div>
			</div>
		</div>
	)
}
