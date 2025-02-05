'use client';

import { cn } from '@/lib/utils';
import { useCartStore } from '@/stores/use-cart-store';
import { Minus, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface EditItemQuantityButtonProps {
	item: any;
	className?: string;
}

export function EditItemQuantityButton({ item, className }: EditItemQuantityButtonProps) {
	const incrementQuantity = useCartStore((state) => state.incrementQuantity);
	const decrementQuantity = useCartStore((state) => state.decrementQuantity);
	const updateItemQuantity = useCartStore((state) => state.updateItemQuantity);

	const isDecrementDisabled = item.quantity <= 1;
	const isIncrementDisabled = item.has_inventory && item.quantity >= item.max;

	const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		if (isNaN(value)) return;

		if (item.has_inventory && value > item.max) {
			updateItemQuantity(item.id, item.max, item.variant_id);
			return;
		}

		if (value < 1) {
			updateItemQuantity(item.id, 1, item.variant_id);
			return;
		}

		updateItemQuantity(item.id, value, item.variant_id);
	};

	return (
		<div className={cn('flex h-7 items-center', className)}>
			<Button
				className='h-full rounded-l-lg rounded-r-none px-2'
				disabled={isDecrementDisabled}
				onClick={() => decrementQuantity(item.id, item.variant_id)}
				aria-label='Decrease quantity'
			>
				<Minus className='size-3' />
			</Button>

			<Input
				type='number'
				className='border-primary/50 h-full w-7 rounded-none border-x-0 border-y p-0 text-center'
				value={item.quantity}
				onChange={handleQuantityChange}
				min={1}
				max={item.has_inventory ? item.max : undefined}
				aria-label='Item quantity'
			/>

			<Button
				className='h-full rounded-l-none rounded-r-lg px-2'
				disabled={isIncrementDisabled}
				onClick={() => incrementQuantity(item.id, item.variant_id)}
				aria-label='Increase quantity'
			>
				<Plus className='size-3' />
			</Button>
		</div>
	);
}
