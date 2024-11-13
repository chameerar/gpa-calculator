import React from 'react';
import { Semester } from '../types';

interface GpaCalculatorProps {
  semesters: Semester[];
  creditType: "4.0" | "4.2";
  setCreditType: (value: "4.0" | "4.2") => void;
}

function getGradePoint(grade: string, creditType: "4.0" | "4.2") : number {

    if (creditType === "4.2") {
        switch (grade) {
            case "A+":
                return 4.2;
            case "A":
                return 4.0;
            case "A-":
                return 3.8;
            case "B+":
                return 3.6;
            case "B":
                return 3.4;
            case "B-":
                return 3.2;
            case "C+":
                return 3.0;
            case "C":
                return 2.8;
            case "C-":
                return 2.6;
            case "D":
                return 1.0;
            default:
                return 0.0;
        }
    } else if (creditType === "4.0") {
        switch (grade) {
            case "A+":
                return 4.0;
            case "A":
                return 4.0;
            case "A-":
                return 3.8;
            case "B+":
                return 3.6;
            case "B":
                return 3.4;
            case "B-":
                return 3.2;
            case "C+":
                return 3.0;
            case "C":
                return 2.8;
            case "C-":
                return 2.6;
            case "D":
                return 1.0;
            default:
                return 0.0;
        }
    }
    return 0;
}

function calculateGPA(semesters: Semester[], creditType: "4.0" | "4.2") {
  let totalCredits = 0;
  let totalPoints = 0;

  semesters.forEach((semester) => {
    semester.courses.forEach((course) => {
      const credit = course.credits;
      const grade = course.result;
      const gradePoint = getGradePoint(grade, creditType);
      if (credit && grade) {
        totalCredits += credit;
        totalPoints += gradePoint * credit;
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
