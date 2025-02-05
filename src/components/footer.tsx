import { Facebook, Instagram, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Container } from './container';

export default function Footer() {
	const navigations = [
		{
			title: 'KFC Монгол',
			items: [
				{ name: 'Түүх', href: '' },
				{ name: 'Чанарын стандарт', href: '' },
			],
		},
		{
			title: 'Нийгмийн хариуцлага',
			items: [
				{ name: 'Тэврэлтийн өдөр', href: '' },
				{ name: 'Дутуугаа дүүргэе', href: '' },
				{ name: 'Тэтгэлэгт хөтөлбөр', href: '' },
			],
		},
		{
			title: 'Журам',
			items: [
				{ name: 'Үйлчилгээний нөхцөл', href: '' },
				{ name: 'Нууцлалын бодлого', href: '' },
			],
		},
		{
			title: 'Бидэнтэй нэгдэх',
			items: [
				{ name: 'Түүх', href: '' },
				{ name: 'Ажилд орох', href: '' },
			],
		},
	];

	return (
		<div className='bg-secondary text-secondary-foreground mt-12 grid w-full place-items-center rounded-2xl border-t py-8 shadow-sm md:mt-16'>
			<Container className='space-y-8 px-6'>
				<div className='flex flex-row flex-wrap items-center justify-between gap-4 border-b border-zinc-700 pb-4 md:flex-row'>
					<div className='flex items-center gap-4'>
						<img src='/images/kfc.png' alt='' className='size-10' />
						<h1 className='max-w-sm text-lg font-semibold'>
							Хаанаас ч хайгаад оломгүй Шунан дурламаар амтыг Та зөвхөн KFC-ээс амтална.
						</h1>
					</div>
					<Link href={`tel:+9767555-1010`} className='flex items-center gap-2 font-semibold'>
						<Phone size={20} />
						<span>7555-1010</span>
					</Link>
				</div>
				<div className='grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4'>
					{navigations.map((navigation, i) => (
						<div key={i} className='space-y-3'>
							<h2 className='font-medium'>{navigation.title}</h2>
							<ul className='space-y-1'>
								{navigation.items.map((item, j) => (
									<li
										key={j}
										className='text-muted-foreground hover:text-foreground cursor-pointer'
									>
										{item.name}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
				<div className='border-border flex flex-col items-center justify-center gap-4 border-t py-2 lg:flex-row lg:justify-between'>
					<span className='text-muted-foreground flex flex-wrap text-sm/6'>
						&copy; {new Date().getFullYear()} KFC Монгол. Зохиогчийн эрх хуулиар
						хамгаалагдсан. Developed by Tavanbogd Cubix LLC
					</span>
					<div className='text-muted-foreground flex items-center gap-4 text-sm/6'>
						<Link
							href='https://www.facebook.com/KFC.Mongolia'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Facebook className='size-5 shrink-0' />
						</Link>
						<Link
							href='https://www.instagram.com/kfc_mongolia/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<Instagram className='size-5 shrink-0' />
						</Link>
						<Link href='https://x.com/MongoliaKfc' target='_blank' rel='noopener noreferrer'>
							<Twitter className='size-5 shrink-0' />
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
}
