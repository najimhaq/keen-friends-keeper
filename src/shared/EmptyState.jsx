import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const EmptyState = ({
  title = 'No Data Found',
  message = 'There is nothing to show right now.',
  buttonText = 'Browse Friends',
  buttonLink = '/friends',
}) => {
  return (
    <div className='flex min-h-80 flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#161616] px-6 py-14 text-center text-white shadow-[0_20px_60px_rgba(0,0,0,0.25)]'>
      <div className='mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[#C8A96B]/30 bg-[#C8A96B]/10 text-[#244D3F]'>
        <FaShoppingCart className='text-3xl' />
      </div>

      <h2 className='text-2xl font-bold tracking-wide text-white'>{title}</h2>

      <p className='mt-3 max-w-md text-sm leading-7 text-gray-400'>{message}</p>

      <Link
        href={buttonLink}
        className='mt-7 inline-flex items-center justify-center rounded-full bg-[#244D3F] px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105'
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default EmptyState;
