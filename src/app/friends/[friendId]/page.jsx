import { notFound } from 'next/navigation';
import Link from 'next/link';
import { FiArchive, FiBell, FiVideo } from 'react-icons/fi';
import { MdOutlineMessage } from 'react-icons/md';
import { LuPhoneCall, LuTrash2, LuCalendar, LuMail } from 'react-icons/lu';

const FriendDetailsPage = async ({ params }) => {
  const { friendId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/friends.json`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch friends data');

  const friends = await res.json();
  const friend = friends?.find((f) => String(f.id) === String(friendId));

  if (!friend) notFound();

  const isOverdue = friend.status === 'overdue';
  const daysPast = friend.daysSinceContact - friend.goalDays;

  return (
    <section className='min-h-screen bg-[#f5f7f8] p-4 lg:mt-25 md:p-6'>
      <Link
        href='/friends'
        className='inline-block mb-6 text-green-600 hover:text-green-800 text-sm'
      >
        ← Back to Friends
      </Link>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
        {/* ── Left ── */}
        <aside className='space-y-3 lg:col-span-4'>
          {/* Profile card */}
          <div className='rounded-2xl border border-slate-100 bg-white overflow-hidden shadow-sm'>
            {/* Overdue accent bar */}
            {isOverdue && <div className='h-[3px] w-full bg-red-500' />}

            <div className='px-6 pt-6 pb-5 flex flex-col items-center gap-2.5'>
              {/* Avatar + status dot */}
              <div className='relative'>
                <img
                  src={
                    friend.avatar ||
                    'https://randomuser.me/api/portraits/women/44.jpg'
                  }
                  alt={friend.name}
                  className='w-[72px] h-[72px] rounded-full object-cover'
                />
                {isOverdue && (
                  <span className='absolute bottom-0.5 right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white' />
                )}
              </div>

              {/* Name */}
              <h2 className='text-lg font-semibold text-slate-900 mt-1'>
                {friend.name || 'Emma Wilson'}
              </h2>

              {/* Badges */}
              <div className='flex gap-2 flex-wrap justify-center'>
                {isOverdue && (
                  <span className='bg-red-50 text-red-700 text-xs font-medium px-3 py-0.5 rounded-full'>
                    Overdue
                  </span>
                )}
                {friend.group && (
                  <span className='bg-green-50 text-green-800 text-xs font-medium px-3 py-0.5 rounded-full capitalize'>
                    {friend.group}
                  </span>
                )}
              </div>

              {/* Note */}
              {friend.note && (
                <p className='text-[12.5px] text-slate-500 italic text-center leading-relaxed'>
                  "{friend.note}"
                </p>
              )}

              {/* Preferred contact */}
              {friend.preferred && (
                <div className='flex items-center gap-1.5'>
                  <LuMail className='text-xs text-slate-400' />
                  <span className='text-xs text-slate-400'>
                    Preferred: {friend.preferred}
                  </span>
                </div>
              )}
            </div>

            {/* Action buttons — inside card, borderless rows */}
            <div className='border-t border-slate-100 px-3 py-2.5 space-y-1'>
              <button className='flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors'>
                <FiBell className='text-slate-400 text-sm' />
                Snooze 2 weeks
              </button>
              <button className='flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-medium text-slate-700 hover:bg-slate-50 transition-colors'>
                <FiArchive className='text-slate-400 text-sm' />
                Archive
              </button>
              <button className='flex w-full items-center gap-3 px-4 py-2.5 rounded-xl text-[13.5px] font-medium text-red-600 hover:bg-red-50 transition-colors'>
                <LuTrash2 className='text-sm' />
                Delete
              </button>
            </div>
          </div>
        </aside>

        {/* ── Right ── */}
        <div className='space-y-3 lg:col-span-8'>
          {/* Stat cards */}
          <div className='grid grid-cols-3 gap-3'>
            <div className='bg-slate-50 rounded-2xl p-4 text-center'>
              <p className='text-3xl font-semibold text-teal-700'>
                {friend.daysSinceContact ?? 62}
              </p>
              <p className='text-xs text-slate-500 mt-1.5 leading-tight'>
                Days since contact
              </p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-4 text-center'>
              <p className='text-3xl font-semibold text-teal-700'>
                {friend.goalDays ?? 30}
              </p>
              <p className='text-xs text-slate-500 mt-1.5 leading-tight'>
                Goal (days)
              </p>
            </div>
            <div className='bg-slate-50 rounded-2xl p-4 text-center'>
              <p
                className={`text-base font-semibold leading-tight ${isOverdue ? 'text-red-700' : 'text-teal-700'}`}
              >
                {friend.nextDue ?? 'Feb 27'}{' '}
                <span className='text-xs text-slate-400 font-normal'>
                  , 2026
                </span>
              </p>
              <p className='text-xs text-slate-500 mt-1.5 leading-tight'>
                Next due
              </p>
            </div>
          </div>

          {/* Relationship Goal */}
          <div className='rounded-2xl border border-slate-100 bg-white p-5 shadow-sm'>
            <div className='flex items-center justify-between mb-3'>
              <h3 className='text-sm font-semibold text-slate-800'>
                Relationship goal
              </h3>
              <button className='border border-slate-200 rounded-lg px-3.5 py-1 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors'>
                Edit
              </button>
            </div>
            <div className='flex items-center gap-2 mb-3'>
              <LuCalendar className='text-xs text-slate-400' />
              <p className='text-sm text-slate-500'>
                Connect every{' '}
                <span className='font-semibold text-slate-800'>
                  {friend.goalDays ?? 30} days
                </span>
              </p>
            </div>
            {/* Progress bar */}
            <div className='bg-slate-100 rounded-full h-1.5 overflow-hidden'>
              <div
                className={`h-full rounded-full ${isOverdue ? 'bg-red-500 w-full' : 'bg-teal-500'}`}
                style={
                  !isOverdue
                    ? {
                        width: `${Math.min((friend.daysSinceContact / friend.goalDays) * 100, 100)}%`,
                      }
                    : {}
                }
              />
            </div>
            {isOverdue && daysPast > 0 && (
              <p className='text-[11px] text-red-600 mt-1.5'>
                {daysPast} days overdue
              </p>
            )}
          </div>

          {/* Quick Check-In */}
          <div className='rounded-2xl border border-slate-100 bg-white p-5 shadow-sm'>
            <h3 className='text-sm font-semibold text-slate-800 mb-3'>
              Quick check-in
            </h3>
            <div className='grid grid-cols-3 gap-2.5'>
              {[
                {
                  icon: <LuPhoneCall className='text-xl text-teal-700' />,
                  label: 'Call',
                },
                {
                  icon: <MdOutlineMessage className='text-xl text-blue-700' />,
                  label: 'Text',
                },
                {
                  icon: <FiVideo className='text-xl text-purple-700' />,
                  label: 'Video',
                },
              ].map(({ icon, label }) => (
                <button
                  key={label}
                  className='bg-white border border-slate-200 rounded-2xl py-5 flex flex-col items-center gap-2 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors'
                >
                  {icon}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FriendDetailsPage;
