import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FiArchive, FiBell } from 'react-icons/fi';
import { LuTrash2, LuCalendar, LuMail } from 'react-icons/lu';
import QuickCheckInActions from '@/components/QuickCheckInActions';

function getStatusUI(status) {
  switch (status) {
    case 'overdue':
      return {
        label: 'Overdue',
        pill: 'bg-red-50 text-red-700',
        bar: 'bg-red-500',
        dot: 'bg-red-500',
        progress: 'bg-red-500',
        text: 'text-red-600',
      };
    case 'almost due':
      return {
        label: 'Almost due',
        pill: 'bg-amber-50 text-amber-700',
        bar: 'bg-amber-500',
        dot: 'bg-amber-500',
        progress: 'bg-amber-500',
        text: 'text-amber-600',
      };
    case 'on-track':
    default:
      return {
        label: 'On track',
        pill: 'bg-emerald-50 text-emerald-700',
        bar: 'bg-emerald-500',
        dot: 'bg-emerald-500',
        progress: 'bg-emerald-500',
        text: 'text-emerald-600',
      };
  }
}

export default async function FriendDetailsPage({ params }) {
  const { friendId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/friends.json`,
    { cache: 'no-store' }
  );

  if (!res.ok) throw new Error('Failed to fetch friends data');

  const friends = await res.json();
  const friend = friends.find((f) => String(f.id) === String(friendId));

  if (!friend) notFound();

  const daysSinceContact = friend.days_since_contact ?? 62;
  const goalDays = friend.goal ?? 30;
  const isOverdue = friend.status === 'overdue';
  const daysPast = Math.max(daysSinceContact - goalDays, 0);
  const statusUI = getStatusUI(friend.status);

  return (
    <section className='min-h-screen bg-[#f5f7f8] p-4 lg:mt-26 md:p-6'>
      <Link
        href='/friends'
        className='mb-6 inline-block text-sm text-green-600 hover:text-green-800'
      >
        ← Back to Friends
      </Link>

      <div className='grid grid-cols-1 gap-4 lg:grid-cols-12'>
        <aside className='space-y-3 lg:col-span-4'>
          <div className='overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md shadow-slate-200/60'>
            <div className={`h-0.75 w-full ${statusUI.bar}`} />

            <div className='flex flex-col items-center gap-2.5 px-6 pb-5 pt-6'>
              <div className='relative h-18 w-18'>
                <Image
                  src={
                    friend.picture ||
                    'https://randomuser.me/api/portraits/women/44.jpg'
                  }
                  alt={friend.name}
                  fill
                  sizes='72px'
                  className='rounded-full object-cover'
                  priority
                />
                <span
                  className={`absolute bottom-0.5 right-0.5 h-3 w-3 rounded-full border-2 border-white ${statusUI.dot}`}
                />
              </div>

              <h2 className='mt-1 text-lg font-semibold text-slate-900'>
                {friend.name}
              </h2>

              <div className='flex flex-wrap justify-center gap-2'>
                <span
                  className={`rounded-full px-3 py-0.5 text-xs font-medium ${statusUI.pill}`}
                >
                  {statusUI.label}
                </span>

                {friend.tags?.[0] && (
                  <span className='rounded-full bg-green-50 px-3 py-0.5 text-xs font-medium capitalize text-green-800'>
                    {friend.tags[0]}
                  </span>
                )}
              </div>

              {friend.bio && (
                <p className='text-center text-[12.5px] leading-relaxed italic text-slate-500'>
                  &quot;{friend.bio}&quot;
                </p>
              )}

              <div className='flex items-center gap-1.5'>
                <LuMail className='text-xs text-slate-400' />
                <span className='text-xs text-slate-400'>{friend.email}</span>
              </div>
            </div>
          </div>
          {/* Buttons Left */}
          <div className='border-t border-slate-100 px-4 py-4 space-y-3 '>
            <button className='flex h-14 w-full items-center justify-center gap-5 rounded-2xl cursor-pointer border border-slate-200 bg-white text-xs font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:shadow-md'>
              <FiBell className='text-xl text-slate-800' />
              <span>Snooze 2 Weeks</span>
            </button>

            <button className='flex h-14 w-full items-center justify-center gap-5 rounded-2xl cursor-pointer border border-slate-200 bg-white text-xs font-medium text-slate-800 shadow-sm transition hover:bg-slate-50 hover:shadow-md'>
              <FiArchive className='text-xl text-slate-800' />
              <span>Archive</span>
            </button>

            <button className='flex h-14 w-full items-center justify-center gap-5 rounded-2xl cursor-pointer border border-slate-200 bg-white text-xs font-medium text-red-500 shadow-sm transition hover:bg-red-50 hover:shadow-md'>
              <LuTrash2 className='text-xl text-red-500' />
              <span>Delete</span>
            </button>
          </div>
        </aside>

        <div className='space-y-3 lg:col-span-8'>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-3'>
            <div className='rounded-2xl bg-slate-50 p-4 text-center shadow-md shadow-slate-200/50'>
              <p className='text-3xl font-semibold text-teal-700'>
                {daysSinceContact}
              </p>
              <p className='mt-1.5 text-xs leading-tight text-slate-500'>
                Days since contact
              </p>
            </div>

            <div className='rounded-2xl bg-slate-50 p-4 text-center shadow-md shadow-slate-200/50'>
              <p className='text-3xl font-semibold text-teal-700'>{goalDays}</p>
              <p className='mt-1.5 text-xs leading-tight text-slate-500'>
                Goal (days)
              </p>
            </div>

            <div className='rounded-2xl bg-slate-50 p-4 text-center shadow-md shadow-slate-200/50'>
              <p
                className={`text-base font-semibold leading-tight ${statusUI.text}`}
              >
                {friend.next_due_date || 'Feb 27, 2026'}
              </p>
              <p className='mt-1.5 text-xs leading-tight text-slate-500'>
                Next due
              </p>
            </div>
          </div>

          <div className='rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50'>
            <div className='mb-3 flex items-center justify-between'>
              <h3 className='text-sm font-semibold text-slate-800'>
                Relationship goal
              </h3>
              <button className='rounded-lg border border-slate-200 px-3.5 py-1 text-xs font-medium text-slate-700 transition-colors hover:bg-slate-50'>
                Edit
              </button>
            </div>

            <div className='mb-3 flex items-center gap-2'>
              <LuCalendar className='text-xs text-slate-400' />
              <p className='text-sm text-slate-500'>
                Connect every{' '}
                <span className='font-semibold text-slate-800'>
                  {goalDays} days
                </span>
              </p>
            </div>

            <div className='h-1.5 overflow-hidden rounded-full bg-slate-100'>
              <div
                className={`h-full rounded-full ${statusUI.progress}`}
                style={
                  !isOverdue
                    ? {
                        width: `${Math.min(
                          (daysSinceContact / goalDays) * 100,
                          100
                        )}%`,
                      }
                    : { width: '100%' }
                }
              />
            </div>

            <p className={`mt-1.5 text-[11px] ${statusUI.text}`}>
              {friend.status === 'overdue'
                ? `${daysPast} days overdue`
                : friend.status === 'almost due'
                  ? 'Almost due soon'
                  : 'On track'}
            </p>
          </div>

          <div className='rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/50'>
            <h3 className='mb-3 text-sm font-semibold text-slate-800'>
              Quick check-in
            </h3>

            <QuickCheckInActions friend={friend}/>
          </div>
        </div>
      </div>
    </section>
  );
}
