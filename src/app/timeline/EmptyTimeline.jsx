import Link from 'next/link';

export default function EmptyTimeline() {
  return (
    <div className='w-full max-w-md mx-auto rounded-3xl border my-6 border-green-300/80 bg-white/80 backdrop-blur-xl p-8 text-center shadow-[0_20px_60px_-15px_rgba(15,23,42,0.15)]'>
      <div className='mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-teal-500 to-green-500 shadow-lg shadow-indigo-500/20'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='1.8'
          className='h-8 w-8 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 6.75h12m-12 5.25h7.5m-7.5 5.25h12M3.75 6.75h.008v.008H3.75V6.75zm0 5.25h.008v.008H3.75V12zm0 5.25h.008v.008H3.75v-.008z'
          />
        </svg>
      </div>

      <h3 className='text-xl font-semibold tracking-tight text-slate-900'>
        No timeline events yet
      </h3>

      <p className='mt-3 text-sm leading-6 text-slate-500'>
        Start adding call, text, or video updates to build a clean and
        interactive timeline view.
      </p>

      <div className='mt-6 flex items-center justify-center gap-3'>
        <Link
          href='/friends'
          className='mb-6 inline-block font-semibold text-sm text-green-600 hover:text-green-800'
        >
          ← Back to Friends
        </Link>
      </div>
    </div>
  );
}
