import Image from 'next/image';
import EmptyState from '@/shared/EmptyState';

export default async function Friends() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/friends.json`,
    {
      cache: 'no-store',
    }
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
    <section className='container mx-auto px-6 py-12 mt-20'>
      <h1 className='text-3xl font-bold text-gray-900 mb-8'>My Friends</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {friends.map((friend) => (
          <div
            key={friend.id}
            className='p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col'
          >
            <div className='flex items-center gap-4 mb-4'>
              <Image
                src={friend.picture}
                alt={friend.name}
                width={64}
                height={64}
                className='rounded-full object-cover'
              />
              <div>
                <h2 className='text-lg font-semibold text-gray-800'>
                  {friend.name}
                </h2>
                <p className='text-sm text-gray-500'>{friend.email}</p>
              </div>
            </div>

            <p className='text-gray-600 text-sm mb-3'>{friend.bio}</p>

            <div className='flex flex-wrap gap-2 mb-3'>
              {friend.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className='px-2 py-1 text-xs rounded-full bg-green-100 text-green-700'
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className='mt-auto flex justify-between items-center text-sm'>
              <span
                className={`font-medium ${
                  friend.status === 'overdue'
                    ? 'text-red-600'
                    : friend.status === 'almost due'
                      ? 'text-yellow-600'
                      : 'text-green-600'
                }`}
              >
                {friend.status}
              </span>
              <span className='text-gray-500'>
                Next due: {friend.next_due_date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
