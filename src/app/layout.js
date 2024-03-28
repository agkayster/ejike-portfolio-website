import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Ejike Portfolio Website',
	description: 'Personal Portfolio Website',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<div className='w-screen h-screen bg-gradient-to-b from-blue-100 to-blue-300'>
					<div>
						<NavBar />
					</div>
					{children}
				</div>
			</body>
		</html>
	);
}
