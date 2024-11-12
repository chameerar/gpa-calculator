import React from 'react';
import { Semester } from '../types';

interface GpaCalculatorProps {
  semesters: Semester[];
  creditType: "4.0" | "4.2";
  setCreditType: (value: "4.0" | "4.2") => void;
}

function calculateGPA(semesters: Semester[], creditType: "4.0" | "4.2") {
  let totalCredits = 0;
  let totalPoints = 0;

  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      const credit = course.credits;
      const grade = course.result;
      if (credit && grade) {
        totalCredits += credit;
        totalPoints += grade * credit;
      }
    });
  });

  const maxGpa = parseFloat(creditType);
  return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : `0.0 / ${maxGpa}`;
}

const GpaCalculator: React.FC<GpaCalculatorProps> = ({ semesters, creditType, setCreditType }) => {
  const gpa = calculateGPA(semesters, creditType);

  return (
    <div className="my-4">
      <div className="flex items-center">
        <label className="mr-2">Credit Type:</label>
        <select
          value={creditType}
          onChange={(e) => setCreditType(e.target.value as "4.0" | "4.2")}
          className="border p-1"
        >
          <option value="4.0">Out of 4.0</option>
          <option value="4.2">Out of 4.2</option>
        </select>
      </div>
      <p className="mt-2 text-lg font-semibold">GPA: {gpa}</p>
    </div>
  );
};

export default GpaCalculator;
