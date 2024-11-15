# GPA Calculator

A GPA calculator built with React, TypeScript, and Vite. This application lets users calculate their GPA by adding multiple semesters, each containing courses with specific credits and results. The GPA calculation supports both 4.0 and 4.2 scales.

## Features
 - Dynamic Semester & Course Management: Add multiple semesters, and within each semester, add or modify individual courses.
 - Customizable GPA Scale: Choose between a 4.0 and 4.2 scale for GPA calculation.
 - Responsive UI: Styled using Tailwind CSS for a responsive and clean layout.

## Technologies
 - Frontend: React, TypeScript, Vite
 - Styling: Tailwind CSS

## Project Structure
```
gpa-calculator/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Static images/assets (optional)
│   ├── components/         # React components
│   ├── types.ts            # TypeScript types for Course and Semester
│   ├── App.tsx             # Main App component
│   ├── index.css           # Tailwind CSS and global styles
│   ├── main.tsx            # Application entry point
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
└── vite.config.ts          # Vite configuration
```

## Getting Started

1. Install Dependencies:
```bash
npm install
```
2. Run the Development Server:
```bash
npm run dev
```
3. Build for Production:
```bash
npm run build
```
4. Preview Production Build:
```bash
npm run preview
```

## Usage
 - **Add a Semester**: Click on "Add Semester" to create a new semester.
 - **Add Courses**: Within each semester, add courses by specifying the course name, code, credits, and result.
 - **Change Credit Type**: Select between "Out of 4.0" or "Out of 4.2" to adjust the GPA calculation.
