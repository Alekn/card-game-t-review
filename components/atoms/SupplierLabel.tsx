import { VariantProps, cva } from 'class-variance-authority'
import Image, { ImageProps } from 'next/image'

const supplierLabelStyles = cva(
	'bg-black flex-col justify-center items-center gap-1 inline-flex -z-10',
	{
		variants: {
			size: {
				small:
					'w-5 h-5 px-0.5 rounded-md bg-opacity-80 items-stretch overflow-hidden',
				medium: 'w-20 h-5 px-1 py-1 rounded-md bg-opacity-80',
				large: 'w-52 h-11 px-5 py-2.5 rounded-xl bg-opacity-50',
			},
		},
		defaultVariants: {
			size: 'large',
		},
	}
)

export interface Props
	extends ImageProps,
		VariantProps<typeof supplierLabelStyles> {}

export function SupplierLablel({ size, ...props }: Props) {
	const { src, alt, style, ...others } = props
	const isSizeSmall = size === 'small'

	return (
		<div className={supplierLabelStyles({ size })} {...others}>
			<Image
				className={`object-cover object-center max-h-none ${
					isSizeSmall ? 'max-w-none w-20' : null
				}`}
				src={src}
				alt={alt}
				style={style}
			/>
		</div>
	)
}
