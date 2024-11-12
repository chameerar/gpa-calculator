import React from 'react';
import { Course as CourseType } from '../types';

interface CourseProps {
  course: CourseType;
  onUpdate: (newCourse: CourseType) => void;
}

const Course: React.FC<CourseProps> = ({ course, onUpdate }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onUpdate({ ...course, [name]: name === 'credits' || name === 'result' ? parseFloat(value) || '' : value });
  };

  return (
    <div className="grid grid-cols-4 gap-2 my-2">
      <input
        name="name"
        value={course.name}
        onChange={handleChange}
        placeholder="Course Name"
        className="border p-1"
      />
      <input
        name="code"
        value={course.code}
        onChange={handleChange}
        placeholder="Course Code"
        className="border p-1"
      />
      <input
        name="credits"
        type="number"
        value={course.credits || ''}
        onChange={handleChange}
        placeholder="Credits"
        className="border p-1"
      />
      <input
        name="result"
        type="number"
        step="0.01"
        value={course.result || ''}
        onChange={handleChange}
        placeholder="Result"
        className="border p-1"
      />
    </div>
  );
};

export default Course;
