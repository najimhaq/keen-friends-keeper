import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from '@/context/ContextProvider';
import Navbar from '@/layout/Navbar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
  //   weight: ['400', '500', '700'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  //   weight: ['400', '500', '700'],
});

export const metadata = {
  title: 'KeenKeeper',
  description: '`Friends to keep close in your life by create next app`',
};

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      data-theme='light'
      data-scroll-behavior='smooth'
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <ContextProvider>
          <Navbar />
          <main> {children}</main>
        </ContextProvider>
        <ToastContainer position='top-right' autoClose={2000} />
      </body>
    </html>
  );
}
