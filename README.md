# Dashboard

A dashboard that is built with React where widgets are grouped into categories. Widgets can be added, removed and searched.

**Live Link:** https://dashboard-cnapp-v2.vercel.app/

## Technologies Used 

- React (Vite)
- Context API for State Management
- Tailwind CSS for Styling 

## Features

- Dashboard is built from a JSON file (categories, each containing multiple widgets)
- Remove a widget with the cross icon on the card
- "AddWidget +" opens a side panel with a tab for each category
- Tick or untick widgets in the panel, then press confirm to apply changes (Clicking Cancel discards)
- Create a new widget by entering a name and text, and it is added to the selected category
- Search the dashboard cards from the top search box
- Search all widgets (including the removed ones) inside the panel

## How to run locally

1. Install [Node.js](https://nodejs.org) (version 20.19 or above, or 22.12 or above)
2. Clone the Repository
   ``` git clone https://github.com/mihir-gore/Dashboard.git ```
3. Go into the folder
   ``` cd Dashboard ```
4. Install the dependencies
   ``` npm install ```
5. Start the development server
   ``` npm run dev ```
6. Open the link shown in the terminal (usually http://localhost:5173)

To create a production build: 'npm run build' , and to preview it : 'npm run preview'.

##Notes

- Data is kept in-memory only, so the dashboard resets to the JSON on page refresh.


