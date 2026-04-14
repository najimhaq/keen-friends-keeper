// components/shared/ErrorState.jsx

import { FaTriangleExclamation } from 'react-icons/fa6';

const ErrorState = ({
  title = 'Something went wrong',
  message = 'We could not load the data. Please try again later.',
  buttonText,
  onRetry,
}) => {
  return (
    <div className='mx-auto max-w-3xl rounded-3xl border-8 border-red-200 bg-slate-800 p-10 text-center shadow-sm'>
      <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500'>
        <FaTriangleExclamation className='text-2xl' />
      </div>

      <h2 className='mt-5 text-2xl font-bold text-red-600'>{title}</h2>
      <p className='mt-3 text-slate-600'>{message}</p>

      {buttonText && onRetry && (
        <button
          onClick={onRetry}
          className='mt-6 rounded-2xl bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700'
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default ErrorState;
