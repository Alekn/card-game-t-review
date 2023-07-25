import { VariantProps, cva } from 'class-variance-authority'
import { ComponentProps } from 'react'

const buttonStyles = cva(
	'font-bold inline-flex justify-center items-center gap-2.5 uppercase disabled:bg-gray-200 disabled:text-neutral-400 disabled:pointer-events-none',
	{
		variants: {
			intent: {
				primary:
					'bg-blue-950 text-slate-200 border-blue-950 active:text-slate-200',
				accent: 'bg-amber-400 border-amber-400 active:text-amber-50',
			},
			variant: {
				contained: 'hover:bg-opacity-80 active:bg-yellow-400',
				outlined:
					'bg-transparent border-2 disabled:bg-transparent disabled:border-neutral-400',
			},
			size: {
				small: 'text-xs py-2 px-4 text-white rounded-lg',
				medium: 'text-xl py-3.5 px-8 rounded-xl',
			},
		},
		defaultVariants: {
			intent: 'primary',
			variant: 'contained',
			size: 'medium',
		},
		compoundVariants: [
			{ class: 'active:border' },
			{
				intent: 'primary',
				variant: 'outlined',
				class: 'hover:bg-slate-200 active:bg-blue-950 text-blue-950',
			},
			{
				intent: 'accent',
				variant: 'outlined',
				class: 'hover:bg-amber-50 active:bg-amber-400 text-amber-400',
			},
			{ intent: 'accent', variant: 'contained', class: 'text-amber-50' },
		],
	}
)

type ButtonProps = ComponentProps<'button'>

export interface Props extends ButtonProps, VariantProps<typeof buttonStyles> {}

export function Button({ intent, variant, size, ...props }: Props) {
	return (
		<button className={buttonStyles({ intent, variant, size })} {...props} />
	)
}
