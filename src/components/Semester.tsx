import React from 'react';
import Course from './Course';
import { Course as CourseType, Semester as SemesterType } from '../types';

interface SemesterProps {
  semester: SemesterType;
  updateCourses: (newCourses: CourseType[]) => void;
}

const Semester: React.FC<SemesterProps> = ({ semester, updateCourses }) => {
  const addCourse = () => {
    const newCourse: CourseType = { name: '', code: '', credits: '', result: '' };
    updateCourses([...semester.courses, newCourse]);
  };

  const updateCourse = (index: number, newCourse: CourseType) => {
    const newCourses = semester.courses.map((course, i) =>
      i === index ? newCourse : course
    );
    updateCourses(newCourses);
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <h2 className="text-xl font-bold">Semester {semester.id}</h2>
      {semester.courses.map((course, index) => (
        <Course
          key={index}
          course={course}
          onUpdate={(newCourse) => updateCourse(index, newCourse)}
        />
      ))}
      <button onClick={addCourse} className="mt-2 p-2 bg-green-500 text-white rounded">
        Add Course
      </button>
    </div>
  );
};

export default Semester;
