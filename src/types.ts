export interface Course {
    name: string;
    code: string;
    credits: number | '';
    result: number | '';
  }
  
  export interface Semester {
    id: number;
    courses: Course[];
  }
  