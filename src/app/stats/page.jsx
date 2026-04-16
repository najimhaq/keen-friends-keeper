'use client';

import { useFriends } from '@/context/FriendsContext';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

export default function StatsChart() {
  const { stats } = useFriends();

  // loading
  if (!stats) {
    return (
      <div className='bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-800'>
        <div className='h-[400px] flex items-center justify-center'>
          <div className='text-gray-500'>Loading chart...</div>
        </div>
      </div>
    );
  }

  const data = [
    { name: 'Overdue', value: stats.overdue || 0, color: '#ef4444' },
    { name: 'Almost Due', value: stats.almostDue || 0, color: '#f59e0b' },
    { name: 'On Track', value: stats.onTrack || 0, color: '#10b981' },
  ];

  const total = data.reduce((sum, d) => sum + d.value, 0);


  if (total === 0) {
    return (
      <div className='bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-800'>
        <div className='h-[400px] flex items-center justify-center'>
          <div className='text-center'>
            <div className='text-4xl mb-2'>📊</div>
            <div className='text-gray-500'>No data available</div>
            <div className='text-xs text-gray-400 mt-1'>
              Add some friends to see statistics
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 rounded-2xl shadow-xl p-6 border border-gray-200 dark:border-gray-800'>
      <div className='flex justify-between items-start mb-6'>
        <div>
          <h3 className='text-lg font-semibold text-gray-900 dark:text-white'>
            Status Overview
          </h3>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            Distribution of friend statuses
          </p>
        </div>
        <div className='bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-1'>
          <span className='text-xs font-medium text-gray-600 dark:text-gray-400'>
            Total: {stats.total || 0}
          </span>
        </div>
      </div>

      <div className='w-full h-[400px]'>
        <ResponsiveContainer width='100%' height='100%'>
          <PieChart>
            <Pie
              data={data}
              dataKey='value'
              nameKey='name'
              cx='50%'
              cy='50%'
              outerRadius={110}
              innerRadius={65}
              isAnimationActive={true}
              animationDuration={1000}
              paddingAngle={4}
              cornerRadius={8}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke='white'
                  strokeWidth={3}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend
              verticalAlign='bottom'
              align='center'
              iconType='circle'
              iconSize={10}
              wrapperStyle={{ paddingTop: '20px' }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className='mt-6 grid grid-cols-3 gap-3 pt-4 border-t border-gray-200 dark:border-gray-800'>
        {data.map((item) => (
          <div key={item.name} className='text-center'>
            <div
              className='w-2 h-2 rounded-full mx-auto mb-1'
              style={{ backgroundColor: item.color }}
            />
            <div className='text-xs font-semibold text-gray-900 dark:text-white'>
              {item.value}
            </div>
            <div className='text-[10px] text-gray-500 dark:text-gray-400'>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
