# My TO-DO-LIST

This is a simple To-Do List web application that allows users to add,edit,view and manage their tasks.

![alt text](<./screenshots/Screenshot 2024-08-08 at 9.30.22 in the morning.png>)

## Features

- **Add Tasks**: Users can add tasks with a name and description.
- **View Tasks**: Tasks are displayed in a list format.
- **Edit Tasks**: Users can edit description and title of tasks.
- **Manage Tasks**: Users can mark tasks as completed or delete them.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Natib22/A2SV-project-phase.git
   ```

2. **Navigate to the ToDo App directory:**

   ```bash
   cd A2SV-project-phase/ToDo-with-React
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

4. **Run the app:**

   ```bash
   npm run dev
   ```

```
This will start the development server, and you can view the app in your browser by navigating to http://localhost:3000/
```

## Usage

1. **Add a Task:**

   - Enter the task name and description in the input fields.
   - Click the `+` button to add the task to the list.

2. **Manage Tasks:**

   - Once a task is added, you can:
     - Mark it as completed by clicking the `Completed` button.
     - Delete the task by clicking the `Delete` button.

![alt text](<./screenshots/Screenshot 2024-08-08 at 9.32.26 in the morning.png>)

## Project Structure

- `index.html`: The main HTML file containing the structure of the app.
- `README.md`: The README file containing instructions and project documentation.
- `public/`: Directory for public assets, such as images or static files.
- `src/`: Directory containing the source code for your React app.
  - `src/components/Task.tsx`: The React component that handles individual tasks, including functionality for adding, completing, editing, and deleting tasks.
  - `src/App.tsx`: The main React component that serves as the entry point of the app.
- `styles.css`: The CSS file for styling the application.
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.
- `vite.config.ts`: Configuration file for Vite, the build tool.
- `node_modules/`: Directory containing the installed npm packages.
- `package.json`: File containing the project’s dependencies and scripts.
- `package-lock.json`: File that locks the exact versions of the installed dependencies.

- `postcss.config.js`: Configuration file for PostCSS, used in the CSS build process.

## Credits

- **Author**: Natnael Biruk
