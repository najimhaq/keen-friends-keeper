import './globals.css';
import fs from 'fs';
import path from 'path';
import { Geist, Geist_Mono } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import Navbar from '@/layout/Navbar';
import { FriendsProvider } from '@/context/FriendsContext';
import EmptyState from '@/shared/EmptyState';
import Footer from '@/layout/Footer';
import friendsData from '@/data/friends.json';

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

});

export const metadata = {
  title: 'KeenKeeper',
  description: '`Friends to keep close in your life by create next app`',
};

function getFriendsData() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'friends.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData);
}


export default function RootLayout({ children }) {
 const friends = getFriendsData();
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
          <Footer />
        </FriendsProvider>
        <ToastContainer position='top-right' autoClose={2000} />
      </body>
    </html>
  );
}
