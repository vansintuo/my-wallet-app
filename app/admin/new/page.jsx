import React from "react";

async function fetchStudents() {
  const res = await fetch("/api/students", {
    cache: "no-store", // Optional: For SSR-like behavior
  });
  if (!res.ok) throw new Error("Failed to fetch students data");
  return res.json();
}

export default async function Page() {
  const students = await fetchStudents();

  return (
    <div>
      <table className="table-auto w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Age</th>
            <th className="border border-gray-300 px-4 py-2">GPA</th>
          </tr>
        </thead>
        <tbody>
          {students.length === 0 ? (
            <tr>
              <td colSpan="3" className="text-center">No students found</td>
            </tr>
          ) : (
            students.map((student) => (
              <tr key={student.id}>
                <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                <td className="border border-gray-300 px-4 py-2">{student.gpa}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
