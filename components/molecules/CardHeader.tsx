import { ButtonIcon } from '../atoms/ButtonIcon'
import { SupplierLabel } from '../atoms/SupplierLabel'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

import evoplay from '../../public/images/evoplay.png'
import pragmaticPlay from '../../public/images/pragmaticPlay.png'
import playTech from '../../public/images/playTech.png'
import spinomenal from '../../public/images/spinomenal.png'
import info from '../../public/images/info.png'

interface Props {
	supplier: string
	isDisabled: boolean
}

export function CardHeader({ supplier: name, isDisabled }: Props) {
	const supplierImage = getSupplierImage(name)

	return (
		<div className="flex justify-between items-center">
			<SupplierLabel src={supplierImage} alt="evoplay" size={'medium'} />
			{!isDisabled && <ButtonIcon src={info} alt="info" />}
		</div>
	)
}

const getSupplierImage = (name: string): StaticImport => {
	switch (name.toLowerCase()) {
		case 'evoplay':
			return evoplay
		case 'pragmaticplay':
			return pragmaticPlay
		case 'playTech':
			return playTech
		case 'spinomenal':
			return spinomenal
		default:
			return evoplay
	}
}
