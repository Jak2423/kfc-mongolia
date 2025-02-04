import { cn } from '@/lib/utils';

type ContainerProps<T extends React.ElementType> = {
	as?: T;
	className?: string;
	children: React.ReactNode;
};

export function Container<T extends React.ElementType = 'div'>({
	as,
	className,
	children,
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> & ContainerProps<T>) {
	let Component = as ?? 'div';

	return <Component className={cn('container px-4', className)}>{children}</Component>;
}
