'use client';
import { useFriends } from '@/context/FriendsContext';
import { useRouter } from 'next/navigation';

import { FiVideo } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineMessage } from 'react-icons/md';

const QuickCheckInActions = ({ friend }) => {
  const router = useRouter();
  const { addTimelineEvent } = useFriends();

  const handleClick = (type, label) => {
    addTimelineEvent({
      friendId: friend.id,
      friendName: friend.name,
      type,
      label,
    });
    router.push('/timeline');
  };

  return (
    <div className='grid grid-cols-1 gap-2.5 sm:grid-cols-3'>
      <button
        onClick={() => handleClick('call', 'call')}
        className='flex flex-col items-center gap-2 rounded-2xl border border-slate-200 cursor-pointer bg-white py-5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50'
      >
        <LuPhoneCall className='text-xl text-teal-700' />
        Call
      </button>

      <button
        onClick={() => handleClick('text', 'text')}
        className='flex flex-col items-center gap-2 rounded-2xl border border-slate-200 cursor-pointer bg-white py-5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50'
      >
        <MdOutlineMessage className='text-xl text-blue-700' />
        Text
      </button>

      <button
        onClick={() => handleClick('video', 'video')}
        className='flex flex-col items-center gap-2 rounded-2xl border border-slate-200 cursor-pointer bg-white py-5 text-xs font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50'
      >
        <FiVideo className='text-xl text-purple-700' />
        Video
      </button>
    </div>
  );
};

export default QuickCheckInActions;
