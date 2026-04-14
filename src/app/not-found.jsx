'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { RiArrowLeftLine, RiHome5Line, RiContactsLine } from 'react-icons/ri';

export default function NotFound() {
  return (
    <section className='relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 px-6 py-12 text-white overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.25),transparent_40%)]' />
      </div>

      {/* Card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='relative flex w-full max-w-5xl flex-col items-center gap-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center shadow-2xl backdrop-blur-md sm:flex-row sm:text-left'
      >
        {/* Illustration */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full max-w-70 shrink-0'
        >
          <Image
            src='/error3.png'
            alt='404 not found illustration'
            width={300}
            height={300}
            priority
            className='h-auto w-full object-contain drop-shadow-lg'
          />
        </motion.div>

        {/* Text & Actions */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='flex flex-col items-center sm:items-start'
        >
          <p className='text-sm font-semibold uppercase tracking-widest text-green-400'>
            Error 404
          </p>

          <h1 className='mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl'>
            Page Not Found
          </h1>

          <p className='mt-4 max-w-md text-base text-white/70'>
            Sorry, we couldn’t find the page you’re looking for. It may have
            been removed, renamed, or the link might be broken.
          </p>

          <div className='mt-8 flex flex-col gap-4 sm:flex-row'>
            <Link
              href='/'
              className='inline-flex items-center gap-2 rounded-lg bg-green-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-md transition hover:bg-green-300 hover:shadow-lg'
            >
              <RiHome5Line size={18} />
              Go Home
            </Link>

            <Link
              href='/friends'
              className='inline-flex items-center gap-2 rounded-lg border border-green-700 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/20'
            >
              <RiContactsLine size={18} />
              Friends
            </Link>
          </div>

          <div className='mt-6 flex items-center gap-2 text-sm text-white/50'>
            <RiArrowLeftLine size={18} />
            <span>Check the URL or return to a safe page.</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
