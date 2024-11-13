export interface Course {
    name: string;
    code: string;
    credits: number | '';
    result: string | '';
  }
  
  export interface Semester {
    id: number;
    courses: Course[];
  }
  