"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import world from "../public/images/invest.jpg";

export default function Home() {
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
      {/* Top Contact Bar */}
      <section className="bg-teal-700 text-white py-20">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-4">Welcome to Impact</h2>
            <p className="mb-6">
              Sed autem laudantium dolores. Voluptatem itaque ea consequatur
              eveniet. Eum quas beatae cumque eum quaerat.
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-teal-700 px-4 py-2 rounded hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src={world}
              alt="World investment image"
              width={500}
              height={300}
              priority
            />
          </div>
        </div>
      </section>

      {/* Feature Boxes */}
      <section className="bg-white py-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-4">
          {["Lorem Ipsum", "Sed ut perspiciatis", "Magni Dolores", "Nemo Enim"].map(
            (text, index) => (
              <div
                key={index}
                className="p-6 bg-teal-700 text-white rounded shadow"
              >
                <h3 className="text-lg font-bold mb-2">{text}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Students Table */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <table className="table-auto w-full border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Age</th>
                <th className="border border-gray-300 px-4 py-2">GPA</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{index+1}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.age}</td>
                  <td className="border border-gray-300 px-4 py-2">{student.gpa}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
