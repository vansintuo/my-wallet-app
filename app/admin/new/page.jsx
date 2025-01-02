"use client";
import React from "react";
import { useState, useEffect } from "react";
function Page() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/students");
      const data = await res.json();
      setStudents(data);
    }
    fetchData();
  }, []);
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
          {students.map((student, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">
                {student.name}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.age}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {student.gpa}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Page;
