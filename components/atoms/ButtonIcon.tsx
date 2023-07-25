import { VariantProps, cva } from 'class-variance-authority'
import Image, { ImageProps } from 'next/image'
import { ComponentProps } from 'react'

const iconStyles = cva([
	'flex-col justify-center items-center gap-1 inline-flex',
	'bg-black bg-opacity-80 hover:bg-amber-400 hover:bg-opacity-20',
	'p-0.5 h-6 w-6 rounded-md',
])

type ButtonIconProps = ComponentProps<'button'> & ImageProps

export interface Props
	extends ButtonIconProps,
		VariantProps<typeof iconStyles> {}

export function ButtonIcon({ ...props }: Props) {
	const { src, alt, style, ...others } = props

	return (
		<button className={iconStyles({})} {...others}>
			<Image
				className={`object-cover object-center shadow`}
				src={src}
				alt={alt}
				style={style}
			/>
		</button>
	)
}
