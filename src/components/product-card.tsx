import { convertPriceFormat } from '@/lib/utils';
import { Button } from './ui/button';

export default function ProductCard({ product }: { product: any }) {
	return (
		<div className='group relative space-y-1'>
			<div className='bg-background/40 absolute inset-0 z-10 hidden place-items-center group-hover:grid'>
				<Button size='lg' className='cursor-pointer rounded-full'>
					Сагсанд хийх
				</Button>
			</div>
			<div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl'>
				<img
					src={product.imageUrl}
					alt=''
					className='size-full object-contain transition-all duration-300 group-hover:scale-105'
				/>
			</div>
			<div className='flex items-center justify-between gap-2'>
				<h1 className='font-medium uppercase'>{product.name}</h1>
				<span className='text-primary text-medium text-lg'>
					{convertPriceFormat(product.price)}₮
				</span>
			</div>
			<p className='text-muted-foreground text-sm'>{product.description}</p>
		</div>
	);
}
