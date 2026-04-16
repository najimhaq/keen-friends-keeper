import { useFriends } from '@/context/FriendsContext';
import { FaPlus } from 'react-icons/fa';
export default function Banner() {
  const { stats } = useFriends();
  return (
    <main className='container mx-auto mt-28 px-6'>
      {/* Hero Section */}
      <section className='flex flex-col items-center text-center space-y-6 mb-16'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-gray-700 leading-tight'>
          Friends to keep close in your life
        </h1>
        <p className='text-gray-600 max-w-2xl text-lg'>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>
        <button className='flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300'>
          <FaPlus className='h-5 w-5' />
          Add a Friend
        </button>
      </section>

      {/* Stats Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {[
          { value: stats.total, label: 'Total Friends' },
          { value: stats.onTrack, label: 'On Track' },
          { value: stats.overdue , label: 'Overdue' },
          { value: stats.almostDue, label: 'Almost Due' },


        ].map((item, idx) => (
          <div
            key={idx}
            className='flex flex-col items-center justify-center p-8 border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 bg-white'
          >
            <h1 className='text-5xl font-bold text-gray-700'>{item.value}</h1>
            <p className='text-green-700 font-medium text-lg mt-2'>
              {item.label}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
