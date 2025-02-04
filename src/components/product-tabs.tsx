import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProductTabs() {
	return (
		<Tabs defaultValue='tab-1' className='my-8'>
			<TabsList className='bg-transparent'>
				<TabsTrigger
					value='tab-1'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					ТЕНДЕРТЭЙ БАГЦ
				</TabsTrigger>
				<TabsTrigger
					value='tab-2'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					БУРГЕРТЭЙ БАГЦ
				</TabsTrigger>
				<TabsTrigger
					value='tab-3'
					className='data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-foreground cursor-pointer rounded-full px-6 py-2 text-base font-bold uppercase shadow-none'
				>
					ДАН БVТЭЭГДЭХVVН
				</TabsTrigger>
			</TabsList>
			<TabsContent value='tab-1'>
				<p className='text-muted-foreground p-4 text-center text-xs'>Content for Tab 1</p>
			</TabsContent>
			<TabsContent value='tab-2'>
				<p className='text-muted-foreground p-4 text-center text-xs'>Content for Tab 2</p>
			</TabsContent>
			<TabsContent value='tab-3'>
				<p className='text-muted-foreground p-4 text-center text-xs'>Content for Tab 3</p>
			</TabsContent>
		</Tabs>
	);
}
