import { FaPhone, FaVideo, FaBoxArchive } from 'react-icons/fa6';
import {
  FaRegBell,
  FaRegTrashAlt,
  FaRegCommentDots,
  FaRegCalendar,
  FaRegEnvelope,
} from 'react-icons/fa';

export default function ContactCard() {
  return (
    <div className='p-4 font-sans'>
      <div className='grid grid-cols-[260px_1fr] gap-3.5 items-start'>
        {/* Left column */}
        <div className='flex flex-col gap-2.5'>
          <div className='bg-white border border-gray-200 rounded-2xl overflow-hidden'>
            {/* Overdue accent bar */}
            <div className='h-[3px] bg-red-500 w-full' />

            <div className='px-5 pt-5 pb-4 flex flex-col items-center gap-2.5'>
              {/* Avatar with status dot */}
              <div className='relative'>
                <img
                  src='https://i.pravatar.cc/80?img=12'
                  alt='Emma Wilson'
                  className='w-[68px] h-[68px] rounded-full object-cover'
                />
                <span className='absolute bottom-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white' />
              </div>

              <div className='text-center'>
                <p className='font-medium text-base text-gray-900 mb-2'>
                  Emma Wilson
                </p>
                <div className='flex gap-1.5 flex-wrap justify-center'>
                  <span className='bg-red-50 text-red-700 text-[11px] font-medium px-2.5 py-0.5 rounded-full'>
                    Overdue
                  </span>
                  <span className='bg-green-50 text-green-800 text-[11px] font-medium px-2.5 py-0.5 rounded-full'>
                    Family
                  </span>
                </div>
              </div>

              <p className='text-[12.5px] text-gray-500 italic text-center leading-relaxed'>
                "Former colleague, great mentor"
              </p>

              <div className='flex items-center gap-1.5'>
                <FaRegEnvelope className='text-[11px] text-gray-400' />
                <span className='text-[11.5px] text-gray-400'>
                  Preferred: email
                </span>
              </div>
            </div>

            {/* Action buttons */}
            <div className='border-t border-gray-100 px-2.5 py-2 flex flex-col gap-1'>
              {[
                {
                  icon: <FaRegBell className='text-gray-500 text-sm' />,
                  label: 'Snooze 2 weeks',
                },
                {
                  icon: <FaBoxArchive className='text-gray-500 text-[13px]' />,
                  label: 'Archive',
                },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  className='flex items-center gap-2.5 px-4 py-2.5 text-[13.5px] text-gray-800 rounded-lg hover:bg-gray-50 transition-colors w-full'
                >
                  {icon}
                  {label}
                </button>
              ))}
              <button className='flex items-center gap-2.5 px-4 py-2.5 text-[13.5px] text-red-700 rounded-lg hover:bg-gray-50 transition-colors w-full'>
                <FaRegTrashAlt className='text-[13px]' />
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className='flex flex-col gap-2.5'>
          {/* Stat cards */}
          <div className='grid grid-cols-3 gap-2.5'>
            <div className='bg-gray-50 rounded-xl p-3.5 text-center'>
              <p className='text-[26px] font-medium text-teal-700 m-0'>62</p>
              <p className='text-[11.5px] text-gray-500 mt-1.5 leading-tight'>
                Days since contact
              </p>
            </div>
            <div className='bg-gray-50 rounded-xl p-3.5 text-center'>
              <p className='text-[26px] font-medium text-teal-700 m-0'>30</p>
              <p className='text-[11.5px] text-gray-500 mt-1.5 leading-tight'>
                Goal (days)
              </p>
            </div>
            <div className='bg-gray-50 rounded-xl p-3.5 text-center'>
              <p className='text-base font-medium text-red-700 m-0 leading-tight'>
                Feb 27{' '}
                <span className='text-xs text-gray-500 font-normal'>
                  , 2026
                </span>
              </p>
              <p className='text-[11.5px] text-gray-500 mt-1.5 leading-tight'>
                Next due
              </p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className='bg-white border border-gray-200 rounded-2xl p-4'>
            <div className='flex justify-between items-center mb-2'>
              <p className='font-medium text-sm text-gray-900'>
                Relationship goal
              </p>
              <button className='border border-gray-200 rounded-lg px-3 py-1 text-[12.5px] text-gray-800 hover:bg-gray-50 transition-colors'>
                Edit
              </button>
            </div>
            <div className='flex items-center gap-1.5 mb-3'>
              <FaRegCalendar className='text-[13px] text-gray-400' />
              <p className='text-[13px] text-gray-500'>
                Connect every{' '}
                <span className='font-medium text-gray-900'>30 days</span>
              </p>
            </div>
            {/* Progress bar — overdue = full red */}
            <div className='bg-gray-100 rounded-full h-1.5 overflow-hidden'>
              <div className='h-full w-full bg-red-500 rounded-full' />
            </div>
            <p className='text-[11px] text-red-700 mt-1.5'>32 days overdue</p>
          </div>

          {/* Quick Check-In */}
          <div className='bg-white border border-gray-200 rounded-2xl p-4'>
            <p className='font-medium text-sm text-gray-900 mb-3'>
              Quick check-in
            </p>
            <div className='grid grid-cols-3 gap-2'>
              {[
                {
                  icon: <FaPhone className='text-[18px] text-teal-700' />,
                  label: 'Call',
                },
                {
                  icon: (
                    <FaRegCommentDots className='text-[18px] text-blue-700' />
                  ),
                  label: 'Text',
                },
                {
                  icon: <FaVideo className='text-[18px] text-purple-700' />,
                  label: 'Video',
                },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  className='bg-white border border-gray-200 rounded-xl py-4 flex flex-col items-center gap-2 text-[12.5px] text-gray-800 hover:bg-gray-50 transition-colors'
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
