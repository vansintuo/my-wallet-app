"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 py-6">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-center">
          {/* Brand/Logo */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">
              <Link href="/" className="hover:underline">
                BABAKA
              </Link>
            </h2>
            <p className="text-sm">Your trusted platform</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About
            </Link>
            <Link href="/services" className="hover:underline">
              Services
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </nav>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="https://www.facebook.com/vansin.tuo.5/"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.406.593 24 1.325 24h11.49V14.708h-3.13v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.464.1 2.793.144v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.406 0 22.675 0z" />
              </svg>
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.564-2.003.974-3.127 1.195-.897-.959-2.178-1.558-3.594-1.558-2.719 0-4.924 2.205-4.924 4.917 0 .39.044.765.127 1.124-4.092-.205-7.719-2.164-10.148-5.144-.426.729-.666 1.577-.666 2.476 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.229-.617v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.848.171-1.296.171-.317 0-.626-.03-.927-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.808 2.102-6.102 2.102-.395 0-.787-.023-1.175-.067 2.179 1.394 4.768 2.208 7.548 2.208 9.055 0 14.004-7.5 14.004-14.004 0-.213-.005-.426-.014-.637.962-.695 1.796-1.562 2.457-2.549z" />
              </svg>
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
              <svg
                className="h-6 w-6"
                fill="currentColor"
                xmlns="https://www.linkedin.com/in/tuo-vansin-481877232/"
                viewBox="0 0 24 24"
              >
                <path d="M22.225 0H1.771C.792 0 0 .794 0 1.771v20.459C0 23.205.792 24 1.771 24h20.451c.979 0 1.778-.794 1.778-1.771V1.771C24 .794 23.204 0 22.225 0zM7.125 20.452H3.65V9.029h3.475v11.423zM5.39 7.621c-1.108 0-1.995-.902-1.995-2.014 0-1.112.887-2.014 1.995-2.014 1.108 0 1.995.902 1.995 2.014s-.887 2.014-1.995 2.014zM20.452 20.452h-3.475V14.6c0-1.389-.027-3.176-1.937-3.176-1.94 0-2.237 1.515-2.237 3.075v6.02h-3.475V9.029h3.338v1.556h.046c.464-.88 1.6-1.807 3.291-1.807 3.518 0 4.164 2.316 4.164 5.326v6.348z" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-sm">
          <p>© 2024 BABAKA. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
