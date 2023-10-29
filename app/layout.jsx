import './globals.css';
import { Rubik } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

// Components
import Navbar from './components/Navbar';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata = {
  title: 'StudieLedd',
  description: 'Connecting dremote based students.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Toaster />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
