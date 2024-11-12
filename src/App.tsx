import React, { useState } from 'react';
import SemesterList from './components/SemesterList';
import GpaCalculator from './components/GpaCalculator';
import { Semester } from './types';

function App() {
  const [semesters, setSemesters] = useState<Semester[]>([{ id: 1, courses: [] }]);
  const [creditType, setCreditType] = useState<"4.0" | "4.2">("4.0");

  const addSemester = () => {
    setSemesters([...semesters, { id: semesters.length + 1, courses: [] }]);
  };

  const updateSemesterCourses = (semesterId: number, newCourses: Semester["courses"]) => {
    setSemesters(
      semesters.map((sem) =>
        sem.id === semesterId ? { ...sem, courses: newCourses } : sem
      )
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">GPA Calculator</h1>
      <GpaCalculator
        semesters={semesters}
        creditType={creditType}
        setCreditType={setCreditType}
      />
      <SemesterList
        semesters={semesters}
        updateSemesterCourses={updateSemesterCourses}
      />
      <button
        onClick={addSemester}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Add Semester
      </button>
    </div>
  );
}

export default App;
