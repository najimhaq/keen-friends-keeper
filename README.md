# Friend Tracker

A clean and modern relationship management app built with Next.js that helps you keep track of friends, contact frequency, follow-up status, and interaction history.

## Overview

Friend Tracker helps you stay intentional about your relationships. You can monitor which friends are overdue for contact, who is almost due, and who is still on track. The app also includes a timeline system so every call, text, or video action can be logged and reviewed later.

## Features

- Track friend status: Overdue, Almost Due, and On Track
- View detailed friend profiles
- Quick check-in actions: Call, Text, and Video
- Automatically store interaction history in a timeline
- Filter and sort timeline entries
- Visual status analytics with charts
- Responsive and clean UI
- Context API based state management

## Tech Stack

- **Next.js**
- **React**
- **Tailwind CSS**
- **Context API**
- **Recharts**
- **date-fns**
- **react-icons**

## Screens

### Friend Details
- View profile image, email, bio, and current relationship status
- See goal days, next due date, and days since contact
- Trigger quick interaction actions

### Timeline
- Displays logged interaction history
- Supports filtering by type: Call, Text, Video
- Supports sorting by latest or oldest date

### Stats
- Pie chart overview of status distribution
- Quick numeric summary of relationship health

## How It Works

When you click one of the quick action buttons on the friend details page:

- A new event object is created
- The event is added to `timelineEvents`
- The timeline page reads that data and displays it
- The list can then be filtered and sorted

Example event structure:

```js
{
  id: Date.now(),
  friendId: friend.id,
  friendName: friend.name,
  type: 'call',
  label: 'Call',
  date: new Date().toISOString(),
}
```

## Project Structure

```bash
app/
├── friends/
│   └── [friendId]/
│       └── page.jsx
├── timeline/
│   └── page.jsx
├── layout.jsx
├── page.jsx

components/
├── QuickCheckInActions.jsx
├── StatsChart.jsx

context/
├── FriendsContext.jsx

public/
├── friends.json
```

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/friend-tracker.git
```

Go to the project folder:

```bash
cd friend-tracker
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:

```bash
http://localhost:3000
```

## Usage

1. Open the app
2. Browse the friend list
3. Click a friend to open the details page
4. Use **Call**, **Text**, or **Video**
5. Go to the **Timeline** page
6. Filter and sort interaction history
7. Review chart-based status overview

## State Management

The app uses **Context API** for shared state.

Main context values include:

- `friends`
- `setFriends`
- `stats`
- `timelineEvents`
- `setTimelineEvents`
- `addTimelineEvent`

This makes it easy to update interaction logs from one page and display them in another.

## UI Highlights

- Soft card-based layout
- Modern spacing and typography
- Timeline list with sort and filter
- Responsive chart section
- Status badges and progress indicators

## Future Improvements

- Persist data in a database
- Add authentication
- Add notes for each interaction
- Add reminders and notifications
- Add search and advanced filtering
- Add edit/delete for timeline entries

## Challenges Solved

- Shared state across multiple pages using Context API
- Timeline event logging from action buttons
- Sorting and filtering dynamic timeline data
- Fixing hydration issues in client-rendered pages
- Handling Recharts rendering safely in Next.js

## Contributing

Contributions are welcome.

If you want to improve this project:

1. Fork the repo
2. Create a new branch
3. Make your changes
4. Commit your work
5. Open a pull request

## License

This project is open-source and available under the **MIT License**.

## Author

**Live Link**


