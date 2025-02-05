import Header from '@/components/header';
import type { Metadata } from 'next';
import { Oswald } from 'next/font/google';
import './globals.css';

const oswald = Oswald({ subsets: ['cyrillic', 'latin'] });
export const metadata: Metadata = {
	title: 'KFC Монгол',
	description: 'KFC Монгол',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${oswald.className} bg-background text-foreground relative min-h-screen antialiased`}
			>
				<Header />
				{children}
			</body>
		</html>
	);
}
