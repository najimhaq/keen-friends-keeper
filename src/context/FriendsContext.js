'use client';

import { differenceInDays } from 'date-fns';
import { createContext, useContext, useEffect, useState } from 'react';

const FriendsContext = createContext(null);

export function FriendsProvider({ children, initialFriends = [] }) {
  const [friends, setFriends] = useState(initialFriends);

   const [timelineEvents, setTimelineEvents] = useState([])

  const addTimelineEvent = ({ friendId, friendName, type, label }) => {
    const newEvent = {
      id: crypto.randomUUID(),
      friendId,
      friendName,
      type,
      label,
      date: new Date().toISOString(),
    };

    setTimelineEvents((prev) => [newEvent, ...prev]);
  };

  const stats = {
    overdue: friends.filter((f) => f.status === 'overdue').length,
    almostDue: friends.filter((f) => f.status === 'almost due').length,
    onTrack: friends.filter((f) => f.status === 'on-track').length,
    total: friends.length,
  };

  const friendsWithDaysLeft = friends.map((friend) => ({
    ...friend,
    daysLeft: Math.max(
      0,
      differenceInDays(new Date(friend.next_due_date), new Date())
    ),
  }));

  return (
    <FriendsContext.Provider
      value={{
        friends: friendsWithDaysLeft,
        setFriends,
        stats,
        timelineEvents,
        setTimelineEvents,
        addTimelineEvent,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

export function useFriends() {
  const ctx = useContext(FriendsContext);

  if (!ctx) {
    throw new Error('useFriends must be used within FriendsProvider');
  }

  return ctx;
}
