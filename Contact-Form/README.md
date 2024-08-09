# Contact Form Web App

This is a simple Contact Form web application built with React, TypeScript and Vite. The form collects a user's name, email, and message, and includes validation to ensure that the data entered is in the correct format.

![alt text](<Screenshot 2024-08-09 at 10.03.06 in the morning.png>)

## Features

- **Name Field**: Collects the user's name with required field validation.
- **Email Field**: Collects the user's email with proper email format validation.
- **Message Field**: Collects the user's message with a minimum of 2 words validation.
- **Error Display**: Highlights fields with validation errors and displays error messages.

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Natib22/A2SV-project-phase.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Contact-Form
   ```

3. **Install the dependencies:**

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

4. **Run the app:**

   ```bash
   npm run dev
   ```

   or if you're using yarn:

   ```bash
   yarn dev
   ```

   This will start the development server, and you can view the app in your browser by navigating to `http://localhost:3000/` (or the port specified by Vite).

## Usage

1. **Fill Out the Form:**

   - Enter your name in the "Name" field.
   - Enter your email address in the "Email" field.
   - Enter your message in the "Message" field.

2. **Form Submission:**

   - Click the `Submit` button to submit the form.
   - Validation errors, if any, will be displayed next to the respective fields, and the fields will be highlighted in red.

![alt text](<Screenshot 2024-08-09 at 10.04.06 in the morning.png>)

## Project Structure

- `index.html`: The main HTML file containing the structure of the app.
- `README.md`: The README file containing instructions and project documentation.
- `public/`: Directory for public assets, such as images or static files.
- `src/`: Directory containing the source code for your React app.
  - `src/App.tsx`: The main React component that handles the contact form logic and validation.
  - `src/main.tsx`: The entry point for the React application.
- `styles.css`: The CSS file for global styling (if applicable).
- `tailwind.config.js`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.
- `vite.config.ts`: Configuration file for Vite, the build tool.
- `node_modules/`: Directory containing the installed npm packages.
- `package.json`: File containing the project’s dependencies and scripts.
- `package-lock.json`: File that locks the exact versions of the installed dependencies.
- `postcss.config.js`: Configuration file for PostCSS, used in the CSS build process.

## Credits

- **Author**: Natnael Biruk
