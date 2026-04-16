import { RiseLoader } from 'react-spinners';

const Loading = () => {
  return (
    <section className='flex flex-col items-center justify-center h-screen bg-linear-to-br from-gray-50 to-gray-100'>
      <RiseLoader color='#15803d' size={12} />

      <p className='mt-6 text-lg font-medium text-gray-700 animate-pulse'>
        Preparing your friends list...
      </p>
    </section>
  );
};

export default Loading;
