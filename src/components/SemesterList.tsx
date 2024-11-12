import React from 'react';
import { Semester } from '../types';
import SemesterComponent from './Semester';

interface SemesterListProps {
  semesters: Semester[];
  updateSemesterCourses: (semesterId: number, newCourses: Semester["courses"]) => void;
}

const SemesterList: React.FC<SemesterListProps> = ({ semesters, updateSemesterCourses }) => {
  return (
    <div className="my-4">
      {semesters.map((semester) => (
        <SemesterComponent
          key={semester.id}
          semester={semester}
          updateCourses={(newCourses) => updateSemesterCourses(semester.id, newCourses)}
        />
      ))}
    </div>
  );
};

export default SemesterList;
