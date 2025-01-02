export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/page/api/students");
  const students = await res.json();

  return {
    props: { students },
  };
}

export default function Home({ students }) {
  return (
    <div>
      <h1>Student List</h1>
      <ul>
        {students.map((student) => (
          <li key={student._id}>
            {student.name} - Age: {student.age} - GPA: {student.gpa}
          </li>
        ))}
      </ul>
    </div>
  );
}
