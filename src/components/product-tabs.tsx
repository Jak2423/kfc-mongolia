import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { burgersData, desertsData, drinksData, singelsData, tendersData } from '@/lib/data';
import ProductCard from './product-card';

export default function ProductTabs() {
	return (
		<Tabs defaultValue='tenders' className='my-8'>
			<TabsList className='h-auto flex-wrap bg-transparent'>
				<TabsTrigger
					value='tenders'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					ТЕНДЕРТЭЙ БАГЦ
				</TabsTrigger>
				<TabsTrigger
					value='burgers'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					БУРГЕРТЭЙ БАГЦ
				</TabsTrigger>
				<TabsTrigger
					value='singels'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					ДАН БVТЭЭГДЭХVVН
				</TabsTrigger>
				<TabsTrigger
					value='deserts'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					ХАЧИР
				</TabsTrigger>
				<TabsTrigger
					value='drinks'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					УНДАА
				</TabsTrigger>
			</TabsList>
			<TabsContent value='tenders'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{tendersData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</TabsContent>
			<TabsContent value='burgers'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{burgersData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</TabsContent>
			<TabsContent value='singels'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{singelsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</TabsContent>
			<TabsContent value='deserts'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{desertsData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</TabsContent>
			<TabsContent value='drinks'>
				<div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
					{drinksData.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			</TabsContent>
		</Tabs>
	);
}
