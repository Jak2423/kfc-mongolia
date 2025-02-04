'use client';

import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';

const banners = [
	{
		name: '1',
		image: '/images/banner-1.jpg',
	},
	{
		name: '2',
		image: '/images/banner-2.png',
	},
	{
		name: '3',
		image: '/images/banner-3.jpg',
	},
];

export default function BannersCarousel() {
	const [api, setApi] = useState<CarouselApi>();
	const [currentSlide, setCurrentSlide] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) return;

		setCount(api.scrollSnapList().length);
		api.on('select', () => {
			setCurrentSlide(api.selectedScrollSnap());
		});
	}, [api]);

	return (
		<div className='relative overflow-hidden rounded-2xl'>
			<Carousel
				className='w-full overflow-hidden'
				opts={{
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 4500,
					}),
				]}
				setApi={setApi}
			>
				<CarouselContent className='!ml-0 aspect-[3/1] w-full'>
					{banners.map((banner, index) => (
						<CarouselItem key={index} className='h-full w-full !p-0'>
							<div className='relative h-full w-full overflow-hidden'>
								<img
									src={banner.image}
									alt={banner.name}
									className='absolute inset-0 size-full object-cover object-top'
								/>
							</div>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className='absolute inset-0 size-full bg-black/10' />
				<CarouselPrevious className='absolute top-1/2 left-4 size-10 -translate-y-1/2 cursor-pointer rounded-full border-0 bg-black/40' />
				<CarouselNext className='absolute top-1/2 right-4 size-10 -translate-y-1/2 cursor-pointer rounded-full border-0 bg-black/40' />

				<div className='absolute bottom-4 left-12 flex -translate-x-1/2 items-center gap-2'>
					<span className='text-primary-foreground text-xl font-semibold'>
						{String(currentSlide + 1)}
					</span>
					<span className='text-primary text-xl font-semibold'>/</span>
					<span className='text-primary-foreground text-xl font-semibold'>
						{String(count)}
					</span>
				</div>
			</Carousel>
		</div>
	);
}
