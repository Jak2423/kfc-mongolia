import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import Link from 'next/link';
import { Container } from './container';
import { MenuSheet } from './menu-sheet';
import { Button } from './ui/button';

export default function Header() {
	return (
		<header className='bg-background fixed top-0 z-10 grid h-20 w-full place-items-center border-b shadow-sm'>
			<Container className='flex h-full items-center'>
				<div className='flex flex-1 items-center justify-start gap-6'>
					<MenuSheet />
					<Link href='/'>
						<img src='/images/logo.png' alt='' className='w-20 shrink-0' />
					</Link>
					<ToggleGroup
						type='single'
						defaultValue='delivery'
						className='hidden items-center gap-4 lg:flex'
					>
						<ToggleGroupItem
							size='lg'
							value='delivery'
							className='bg-secondary text-secondary-foreground data-[state=on]:ring-primary data-[state=on] cursor-pointer px-6 font-semibold data-[state=on]:ring-2'
						>
							<img src='/images/delivery.png' alt='' className='size-6 shrink-0' />
							Хүргэлтээр
						</ToggleGroupItem>
						<ToggleGroupItem
							size='lg'
							value='pickup'
							className='bg-secondary text-secondary-foreground data-[state=on]:ring-primary data-[state=on] cursor-pointer px-6 font-semibold data-[state=on]:ring-2'
						>
							<img src='/images/pickup.png' alt='' className='size-6 shrink-0' />
							Очиж авах
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<div className='flex flex-1 items-center justify-end gap-2'>
					<div className='grid size-14 place-items-center bg-[url("/images/bucket.svg")] bg-contain bg-no-repeat font-bold text-black'>
						0
					</div>
					<Button size='lg' className='text-base font-semibold'>
						Нэвтрэх
					</Button>
				</div>
			</Container>
		</header>
	);
}
