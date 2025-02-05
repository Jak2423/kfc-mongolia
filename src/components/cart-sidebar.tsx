'use client';

import usePersistStore from '@/hooks/use-persist-store';
import { convertPriceFormat } from '@/lib/utils';
import { useCartStore } from '@/stores/use-cart-store';
import { EditItemQuantityButton } from './edit-item-quantity';
import { RemoveItemButton } from './remove-item-button';
import { Button } from './ui/button';

export default function CartSidebar() {
	const cart = usePersistStore(useCartStore, (state) => state.cart);
	const totalPrice = usePersistStore(useCartStore, (state) => state.totalPrice);
	const totalQuanity = usePersistStore(useCartStore, (state) => state.totalItems);

	return (
		<div className='bg-background fixed top-20 right-0 hidden h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] w-full flex-col overflow-y-auto border-l md:flex md:w-80'>
			<div className='flex items-center border-b px-4 py-6'>
				<h1 className='text-lg/normal font-bold uppercase'>Миний захиалга</h1>
			</div>
			<div className='flex h-full flex-col justify-between'>
				{cart && cart.length > 0 ? (
					<>
						<div className='flex-1 divide-y px-4 py-6'>
							{cart.map((item) => (
								<div
									key={`${item.id}_${item.variant_id}`}
									className='relative flex items-start justify-between gap-x-2 py-4'
								>
									<div className='absolute z-40 -mt-2 -ml-2'>
										<RemoveItemButton item={item} />
									</div>
									<div className='flex items-start gap-x-4'>
										<img
											src={item.imageUrl}
											alt={''}
											className='aspect-[1/1] size-16 rounded-lg object-cover object-center'
										/>
										<div className='flex-auto space-y-1'>
											<h3 className='mb-0 line-clamp-2 text-sm font-semibold'>
												{item?.name}
											</h3>
											<p className='text-muted-foreground text-sm'>
												{!!(item?.options && item?.options.length) &&
													`
                              ${(item?.options || [])
											.map(
												(option: any) =>
													`${option.title}: ${
														typeof option.value === 'string'
															? option.value
															: option.value.title
													}`,
											)
											.join(', ')}
                           `}
											</p>
										</div>
									</div>
									<div className='flex flex-col items-end space-y-1'>
										<p className='flex-none text-sm font-semibold'>
											{convertPriceFormat(item?.price)}₮
										</p>
										<EditItemQuantityButton item={item} />
									</div>
								</div>
							))}
						</div>
						<div className='mt-auto space-y-4 border-t px-4 py-4'>
							<p className='text-lg font-medium'>
								Нийт дүн:{' '}
								<span className='text-primary font-semibold'>
									{convertPriceFormat(totalPrice || 0)}₮
								</span>
							</p>
							<Button size='lg' className='w-full text-base font-semibold'>
								Захиалга хийх
							</Button>
						</div>
					</>
				) : (
					<div className='grid place-items-center space-y-2'>
						<img src='/empty.svg' alt='' className='w-full' />
						<p className='text-muted-foreground -mt-40 text-lg'>Таны сагс хоосон байна.</p>
					</div>
				)}
			</div>
		</div>
	);
}
