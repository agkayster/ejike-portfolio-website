import { Inter } from 'next/font/google';
import './globals.css';
import TransitionProvider from '@/components/transitionsProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ejike Portfolio Website',
	description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
