import { VariantProps, cva } from 'class-variance-authority'
import { ReactNode } from 'react'

const cardTextStyles = cva('font-bold', {
	variants: {
		intent: {
			title: 'text-white text-base leading-none',
			detail: [
				'justify-center items-center gap-1 inline-flex',
				'p-0.5 bg-amber-400 bg-opacity-20 rounded-md',
				'text-xs text-slate-200',
			],
		},
		size: {
			small: 'text-xs tracking-tight',
		},
	},
	defaultVariants: {
		intent: 'title',
	},
})

interface CardTextProps {
	children: ReactNode
}

export interface Props
	extends CardTextProps,
		VariantProps<typeof cardTextStyles> {}

export function CardText({ intent, size, ...props }: Props) {
	return <div className={cardTextStyles({ intent, size })} {...props} />
}
