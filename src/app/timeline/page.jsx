import { FiChevronDown } from 'react-icons/fi';
import { FaHandshake, FaMessage, FaVideo, FaPhone } from 'react-icons/fa6';

const timelineData = [
  {
    type: 'Meetup',
    name: 'Tom Baker',
    date: 'March 29, 2026',
    icon: FaHandshake,
    iconColor: 'text-amber-500',
  },
  {
    type: 'Text',
    name: 'Sarah Chen',
    date: 'March 28, 2026',
    icon: FaMessage,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Meetup',
    name: 'Olivia Martinez',
    date: 'March 26, 2026',
    icon: FaHandshake,
    iconColor: 'text-amber-500',
  },
  {
    type: 'Video',
    name: 'Aisha Patel',
    date: 'March 23, 2026',
    icon: FaVideo,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Meetup',
    name: 'Sarah Chen',
    date: 'March 21, 2026',
    icon: FaHandshake,
    iconColor: 'text-amber-500',
  },
  {
    type: 'Call',
    name: 'Marcus Johnson',
    date: 'March 19, 2026',
    icon: FaPhone,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Meetup',
    name: 'Aisha Patel',
    date: 'March 17, 2026',
    icon: FaHandshake,
    iconColor: 'text-amber-500',
  },
  {
    type: 'Text',
    name: 'Olivia Martinez',
    date: 'March 13, 2026',
    icon: FaMessage,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Call',
    name: 'Lisa Nakamura',
    date: 'March 11, 2026',
    icon: FaPhone,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Call',
    name: 'Sarah Chen',
    date: 'March 11, 2026',
    icon: FaPhone,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Video',
    name: 'Marcus Johnson',
    date: 'March 6, 2026',
    icon: FaVideo,
    iconColor: 'text-slate-500',
  },
  {
    type: 'Video',
    name: "Ryan O'Brien",
    date: 'February 24, 2026',
    icon: FaVideo,
    iconColor: 'text-slate-500',
  },
];

export default function TimelinePage() {
  return (
    <section className='min-h-screen bg-white px-4 py-6 lg:mt-26 md:px-8'>
      <div className='mx-auto max-w-3xl'>
        <div className='rounded-2xl border border-green-300/80 p-0'>
          <div className='border-b border-sky-200/70 px-4 py-4 md:px-5'>
            <h1 className='text-3xl font-extrabold tracking-tight text-slate-900'>
              Timeline
            </h1>

            <div className='mt-4 max-w-55'>
              <div className='relative'>
                <select className='w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-500 shadow-sm outline-none transition focus:border-slate-300'>
                  <option>Filter timeline</option>
                  <option>All</option>
                  <option>Meetup</option>
                  <option>Text</option>
                  <option>Call</option>
                  <option>Video</option>
                </select>
                <FiChevronDown className='pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400' />
              </div>
            </div>
          </div>

          <div className='divide-y divide-slate-100'>
            {timelineData.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.type}-${item.name}-${index}`}
                  className='flex items-start gap-3 px-4 py-3 md:px-5'
                >
                  <Icon className={`mt-0.5 text-xl ${item.iconColor}`} />

                  <div className='min-w-0'>
                    <div className='flex flex-wrap items-baseline gap-x-2 gap-y-0.5'>
                      <span className='text-sm font-bold text-slate-700'>
                        {item.type}
                      </span>
                      <span className='text-sm text-slate-500'>
                        with {item.name}
                      </span>
                    </div>
                    <p className='mt-0.5 text-xs font-medium text-slate-400'>
                      {item.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
