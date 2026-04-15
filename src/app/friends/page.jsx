'use client';
import Image from 'next/image';
import { useFriends } from '@/context/FriendsContext';
import Link from 'next/link';
import { LiaPaperPlane } from 'react-icons/lia';

export default function Friends() {
  const { friends, stats } = useFriends();

  return (
    <section className='container mx-auto px-6 py-12 mt-20'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>My Friends</h1>

      {/* Stats badges */}
      <div className='flex gap-4 mb-8 text-sm'>
        <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full'>
          Overdue: {stats.overdue}
        </span>
        <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full'>
          Almost Due: {stats.almostDue}
        </span>
        <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full'>
          On Track: {stats.onTrack}
        </span>
        <span className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full'>
          Total: {stats.total}
        </span>
      </div>

      {/* Friend cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {friends.map((friend) => (
          <div
            key={friend.id}
            className='p-6 border border-gray-200 rounded-xl shadow-sm cursor-pointer hover:shadow-lg transition-all duration-300 bg-white flex flex-col'
          >
            <div className='flex flex-col items-center gap-4 mb-4'>
              <Image
                src={friend.picture}
                alt={friend.name}
                width={64}
                height={64}
                className='rounded-full object-cover'
              />
              <div className='text-center'>
                <h2 className='text-lg font-semibold text-gray-800'>
                  {friend.name}
                </h2>
                <p className='mt-1 text-gray-500 bg-gray-200 font-medium px-2 py-1 text-xs rounded-full'>
                  Days left: {friend.daysLeft}
                </p>
              </div>
            </div>

            <div className='flex items-center justify-center flex-wrap gap-2 mb-3'>
              {friend.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='uppercase font-medium px-2 py-1 text-xs rounded-full bg-green-100 text-green-700'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='mt-auto flex flex-col items-center text-sm gap-1'>
              <span
                className={`font-medium px-2 py-1 text-xs rounded-full ${
                  friend.status === 'overdue'
                    ? 'bg-red-100 text-red-700 first-letter:uppercase'
                    : friend.status === 'almost due'
                      ? 'bg-yellow-100 text-yellow-700 first-letter:uppercase'
                      : 'bg-green-100 text-green-700 first-letter:uppercase'
                }`}
              >
                {friend.status}
              </span>
              <span className='text-gray-500 mt-2 text-xs font-medium'>
                Next due: {friend.next_due_date}
              </span>
            </div>
            <div className='mt-4 mx-auto'>
              <Link
                href={`/friends/${friend.id}`}
                className='inline-block px-4 py-1 bg-green-100 text-green-700 font-normal rounded-lg shadow hover:bg-green-300 transition-colors duration-300'
              >
                <div className='flex justify-center items-center gap-2'>
                  <span>View</span>
                  <LiaPaperPlane />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
