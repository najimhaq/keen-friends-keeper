import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/friends.json`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error('Failed to fetch friends data');
  }

  const friends = await res.json();

  // JSON array থেকে ফ্রেন্ড খোঁজা (আপনার JSON সরাসরি array)
  const friend = friends?.find((f) => String(f.id) === String(friendId));

  if (!friend) {
    notFound();
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-700';
      case 'almost due':
        return 'bg-amber-100 text-amber-700';
      case 'on-track':
        return 'bg-emerald-100 text-emerald-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className='mt-20 container mx-auto px-6 py-8'>
      <Link
        href='/friends'
        className='inline-block mb-6 text-green-600 hover:text-green-800'
      >
        ← Back to Friends
      </Link>

      <div className='max-w-2xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'>
        <div className='bg-gradient-to-r from-green-600 to-teal-500 h-32'></div>

        <div className='flex justify-center -mt-12 mb-4'>
          <div className='relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg'>
            <Image
              src={friend.picture}
              alt={friend.name}
              fill
              className='object-cover rounded-full'
              sizes='96px'
            />
          </div>
        </div>

        <div className='p-6'>
          <div className='text-center mb-6'>
            <h1 className='text-2xl font-bold text-gray-900'>{friend.name}</h1>
            <p className='text-gray-500'>{friend.email}</p>
            <div className='inline-block mt-2'>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(friend.status)}`}
              >
                {friend.status === 'overdue' && 'Overdue'}
                {friend.status === 'almost due' && 'Almost Due'}
                {friend.status === 'on-track' && 'On Track'}
              </span>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-4 mb-6'>
            <div className='bg-gray-50 rounded-lg p-3 text-center'>
              <div className='text-2xl font-bold text-gray-900'>
                {friend.days_since_contact}
              </div>
              <div className='text-xs text-gray-500'>Days Since Contact</div>
            </div>
            <div className='bg-gray-50 rounded-lg p-3 text-center'>
              <div className='text-2xl font-bold text-gray-900'>
                {friend.goal}
              </div>
              <div className='text-xs text-gray-500'>Goal (Days)</div>
            </div>
          </div>

          <div className='mb-6'>
            <div className='flex justify-between text-sm text-gray-600 mb-1'>
              <span>Progress</span>
              <span>
                {friend.days_since_contact}/{friend.goal} days
              </span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-3'>
              <div
                className={`h-3 rounded-full transition-all duration-300 ${
                  friend.status === 'overdue'
                    ? 'bg-red-500'
                    : friend.status === 'almost due'
                      ? 'bg-amber-500'
                      : 'bg-emerald-500'
                }`}
                style={{
                  width: `${Math.min(100, (friend.days_since_contact / friend.goal) * 100)}%`,
                }}
              />
            </div>
          </div>

          {friend.bio && (
            <div className='mb-6'>
              <h3 className='text-sm font-semibold text-gray-700 mb-2'>
                About
              </h3>
              <p className='text-gray-600 text-sm'>{friend.bio}</p>
            </div>
          )}

          {friend.tags && friend.tags.length > 0 && (
            <div className='mb-6'>
              <h3 className='text-sm font-semibold text-gray-700 mb-2'>Tags</h3>
              <div className='flex flex-wrap gap-2'>
                {friend.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className='text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600'
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className='pt-4 border-t border-gray-200'>
            <div className='flex justify-between items-center'>
              <span className='text-sm text-gray-500'>Next Due Date</span>
              <span className='font-semibold text-gray-900'>
                {friend.next_due_date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetailsPage;
