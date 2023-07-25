import { VariantProps, cva } from 'class-variance-authority'
import Image, { ImageProps } from 'next/image'

const supplierLabelStyles = cva(
	'w-52 h-11 px-5 py-2.5 bg-black bg-opacity-50 rounded-xl flex-col justify-center items-center gap-1 inline-flex -z-10',
	{
		variants: {
			size: {
				small:
					'px-0.5 h-5 w-5 rounded-md bg-opacity-80 items-stretch overflow-hidden',
				medium: 'px-1 py-1 w-20 h-5 rounded-md bg-opacity-80',
			},
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
