'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { AlignLeft, ChevronRight, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { Input } from './ui/input';

export function MenuSheet() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button
					aria-label='Open menu sheet'
					variant='ghost'
					size='icon'
					className='relative shadow-none'
				>
					<AlignLeft className='!size-8' />
				</Button>
			</SheetTrigger>
			<SheetContent
				side='left'
				className='flex h-full flex-col overflow-y-auto p-0 py-4 pb-16 [&>button]:hidden'
			>
				<SheetHeader className='flex-row items-center justify-end px-4'>
					<SheetTitle className='sr-only'>Side menu</SheetTitle>
					<Button
						aria-label='close-sheet'
						size='icon'
						variant='ghost'
						onClick={() => setIsOpen(false)}
					>
						<X className='!size-6 shrink-0' />
					</Button>
				</SheetHeader>
				<div className='px-4'>
					<div className='bg-muted/40 relative w-full rounded-lg py-3 pl-16'>
						<div className='absolute top-0 left-2 mx-2 grid h-full shrink-0 place-items-center'>
							<img src='/images/truck.png' alt='' className='w-10 shrink-0' />
						</div>
						<Input
							name='name'
							placeholder='Захиалгын явц'
							className='h-full border-none !text-lg font-semibold !ring-0 shadow-none !outline-none focus:!border-none focus:!ring-0 focus:!outline-none'
						/>
					</div>
				</div>
				<div className='flex flex-col divide-y px-4'>
					<Link
						href='/#'
						className='flex items-center justify-between py-3 text-lg font-semibold'
					>
						Меню
						<ChevronRight />
					</Link>
					<Link
						href='/#'
						className='flex items-center justify-between py-3 text-lg font-semibold'
					>
						Салбар
						<ChevronRight />
					</Link>
				</div>
			</SheetContent>
		</Sheet>
	);
}
