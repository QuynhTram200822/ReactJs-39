export const getStudents = () => {
  const students = localStorage.getItem('students');
  return students ? JSON.parse(students) : [];
};

export const saveStudents = (students) => {
  localStorage.setItem('students', JSON.stringify(students));
};

