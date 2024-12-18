"use client";

import Link from "next/link";
import Image from "next/image";
import world from '../public/images/invest.jpg'
export default function Home() {
  return (
    <div>
      {/* Top Contact Bar */}
   


      {/* Hero Section */}
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
          <div className="w-full md:w-1/2" >
            <Image
              // className="dark:invert"
              src={world}
              alt="Next.js logo"
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
          <div className="p-6 bg-teal-700 text-white rounded shadow">
            <h3 className="text-lg font-bold mb-2">Lorem Ipsum</h3>
          </div>
          <div className="p-6 bg-teal-700 text-white rounded shadow">
            <h3 className="text-lg font-bold mb-2">Sed ut perspiciatis</h3>
          </div>
          <div className="p-6 bg-teal-700 text-white rounded shadow">
            <h3 className="text-lg font-bold mb-2">Magni Dolores</h3>
          </div>
          <div className="p-6 bg-teal-700 text-white rounded shadow">
            <h3 className="text-lg font-bold mb-2">Nemo Enim</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
