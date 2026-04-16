'use client';

import { useMemo, useState } from 'react';
import { FiChevronDown, FiVideo } from 'react-icons/fi';
import { MdOutlineMessage } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { useFriends } from '@/context/FriendsContext';

export default function TimelinePage() {
  const { timelineEvents } = useFriends();
  const [filterType, setFilterType] = useState('all');
  const [sortOrder, setSortOrder] = useState('latest');

  const filteredAndSortedTimeline = useMemo(() => {
    let data = [...timelineEvents];

    if (filterType !== 'all') {
      data = data.filter((item) => item.type === filterType);
    }

    data.sort((a, b) =>
      sortOrder === 'latest'
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date)
    );

    return data;
  }, [timelineEvents, filterType, sortOrder]);

  const getIcon = (type) => {
    switch (type) {
      case 'call':
        return <LuPhoneCall className='text-xl text-slate-500' />;
      case 'text':
        return <MdOutlineMessage className='text-xl text-slate-400' />;
      case 'video':
        return <FiVideo className='text-xl text-slate-500' />;
      default:
        return <LuPhoneCall className='text-xl text-slate-500' />;
    }
  };

  return (
    <section className='min-h-screen bg-[#f5f7f8] p-4 lg:pt-28 md:p-6'>
      <div className='mx-auto max-w-4xl'>
        <div className='rounded-2xl border border-green-300/80 bg-white'>
          <div className='border-b border-sky-200/70 px-4 py-4 md:px-5'>
            <h1 className='text-3xl font-extrabold tracking-tight text-slate-900'>
              Timeline
            </h1>

            <div className='mt-4 flex flex-col gap-3 sm:flex-row sm:items-center'>
              <div className='relative w-full sm:max-w-55'>
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className='w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm outline-none'
                >
                  <option value='all'>Filter timeline</option>
                  <option value='call'>Call</option>
                  <option value='text'>Text</option>
                  <option value='video'>Video</option>
                </select>
                <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400' />
              </div>

              <div className='relative w-full sm:max-w-45'>
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  className='w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm outline-none'
                >
                  <option value='latest'>Latest first</option>
                  <option value='oldest'>Oldest first</option>
                </select>
                <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400' />
              </div>
            </div>
          </div>

          <div className='divide-y divide-slate-100'>
            {filteredAndSortedTimeline.length === 0 ? (
              <div className='px-5 py-6 text-lg font-medium text-green-700 text-center'>
                No timeline events yet.
              </div>
            ) : (
              filteredAndSortedTimeline.map((item) => (
                <div
                  key={item.id}
                  className='flex items-start gap-3 px-4 py-3 md:px-5'
                >
                  <div className='mt-2.5'>{getIcon(item.type)}</div>

                  <div className='min-w-0'>
                    <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0.5'>
                      <span className='text-sm font-bold text-slate-700'>
                        {item.label}
                      </span>
                      <span className='text-sm text-slate-500'>
                        with {item.friendName}
                      </span>
                    </div>

                    <p className='mt-0.5 text-xs font-medium text-slate-400'>
                      {new Date(item.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
