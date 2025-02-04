import BannersCarousel from '@/components/banners-carousel';
import ProductTabs from '@/components/product-tabs';

export default function Home() {
	return (
		<div className='relative flex min-h-svh w-full flex-col lg:flex-row'>
			<div className='relative mx-auto flex min-h-svh flex-1 flex-col px-12 py-28 lg:mr-80'>
				<BannersCarousel />
				<ProductTabs />
			</div>
			<div className='bg-background fixed top-20 right-0 hidden h-[calc(100svh-5rem)] max-h-[calc(100svh-5rem)] w-full flex-col overflow-y-auto border-l lg:flex lg:w-80'>
				<div className='flex items-center border-b px-4 py-6'>
					<h1 className='text-lg/normal font-bold uppercase'>Миний захиалга</h1>
				</div>
			</div>
		</div>
	);
}
