import { IInfo } from '@/app/page'
import { CardText } from '../atoms/CardText'

interface Props {
	name: string
	info: IInfo
}

export function CardDetails({ name, info }: Props) {
	return (
		<div className="invisible group-hover/bg:visible flex flex-col justify-center items-start space-y-1">
			<CardText>{name}</CardText>
			<div className="flex space-x-1">
				<CardText intent={'detail'}>
					<div>Version:</div> <div>{info.version}</div>
				</CardText>
				<CardText intent={'detail'}>
					<div>Rtp:</div> <div>{info.rtp}</div>
				</CardText>
			</div>
		</div>
	)
}
