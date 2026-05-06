# Modern React Todo App

A full-featured, minimalist Todo application built with React and Tailwind CSS v4. This project features a clean, spacious user interface designed for maximum productivity and ease of use.

## Features ✨

- **Task Management**: Create new tasks and assign due dates.
- **Dynamic Sorting**: Active (pending) tasks automatically stay at the top, while completed tasks are pushed to the bottom.
- **Smart Filtering**: Filter tasks by `All`, `Active`, or `Completed` states to focus on what matters.
- **Clean UI/UX**: Features a highly polished, responsive, and minimalist interface inspired by modern design trends.
- **State Management**: Built using the React Context API (`useReducer` & `useContext`) for scalable state management.
- **Backend Ready**: Integrated with backend API services to fetch, add, delete, and update tasks on the server.

## Tech Stack 🛠️

- **Frontend Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

## Getting Started 🚀

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository or download the project files.
2. Navigate to the project directory:
   ```bash
   cd todoFrontend
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to the local server address (usually `http://localhost:5173`).

## Project Structure 📁

- `src/components/`: Contains all modular React components (`App.jsx`, `addTodo.jsx`, `TodoItems.jsx`, etc.)
- `src/store/`: Contains the Context API provider (`todoItemsStore.jsx`) that handles global state.
- `src/services/`: Contains the API service functions for backend communication (`itemService.js`).

## Recent UI Improvements 🎨
- Removed conflicting global CSS resets to allow Tailwind spacing utilities to function correctly.
- Enhanced padding and margins across the `AddTodo` and `TodoItem` components for a breathable layout.
- Styled custom circular checkboxes and pill-shaped date tags.
- Implemented hover transitions on list items and action buttons.
