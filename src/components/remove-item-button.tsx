'use client';

import { useCartStore } from '@/stores/use-cart-store';
import { X } from 'lucide-react';

import { useTransition } from 'react';
import { Button } from './ui/button';

export function RemoveItemButton({ item }: { item: any }) {
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	const [isPending, startTransition] = useTransition();

	const handleRemoveItem = () => {
		startTransition(() => {
			removeFromCart(item);
		});
	};

	return (
		<Button
			size='icon'
			aria-label='Remove cart item'
			className='flex h-5 w-5 items-center justify-center rounded-full'
			onClick={handleRemoveItem}
			disabled={isPending}
		>
			<X className='text-primary-foreground shrink-0' />
		</Button>
	);
}
