import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ToastContainer } from 'react-toastify';
import Navbar from '@/layout/Navbar';
import { FriendsProvider } from '@/context/FriendsContext';
import EmptyState from '@/shared/EmptyState';
import Footer from '@/layout/Footer';

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

export default async function RootLayout({ children }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/data/friends.json`
  );

  if (!res.ok) {
    throw new Error('Failed to fetch friends data');
  }

  const result = await res.json();
  const friends = result;
  if (!Array.isArray(friends)) {
      throw new Error('Invalid friends response format');
    }

    if (friends.length === 0) {
      return (
        <section className='bg-gray-50 px-4 py-40'>
          <EmptyState
            title='No Data Found'
            message='There is nothing to show right now.'
          />
        </section>
      );
    }
  return (
    <html
      lang='en'
      data-theme='light'
      data-scroll-behavior='smooth'
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col' suppressHydrationWarning>
        <FriendsProvider initialFriends={friends}>
          <Navbar />
          <main> {children}</main>
          <Footer/>
        </FriendsProvider>
        <ToastContainer position='top-right' autoClose={2000} />
      </body>
    </html>
  );
}
