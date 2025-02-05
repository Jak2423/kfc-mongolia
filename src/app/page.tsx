import BannersCarousel from '@/components/banners-carousel';
import CartSidebar from '@/components/cart-sidebar';
import Footer from '@/components/footer';
import ProductTabs from '@/components/product-tabs';

export default function Home() {
	return (
		<div className='relative flex min-h-svh w-full flex-col md:flex-row'>
			<div className='relative mx-auto flex min-h-svh flex-1 flex-col px-12 pt-28 pb-6 md:mr-80'>
				<BannersCarousel />
				<ProductTabs />
				<Footer />
			</div>
			<CartSidebar />
		</div>
	);
}
