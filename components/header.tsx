import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: "url('/images/background.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full  font-deco">
        <h1 className="text-3xl md:text-4xl text-center font-extrabold  text-outline-green-header">
          Graeson and Elena&apos;s Wedding!
        </h1>
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <Link
                href="/"
                className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-2 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-2 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/qa"
                className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-2 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
              >
                Q&A
              </Link>
            </li>
            <li>
              <Link
                href="/rsvp"
                className="text-yellow-dark font-bold border-2 border-brown-dark bg-brown px-6 py-2 rounded-lg hover:bg-yellow-dark hover:text-brown-dark transition"
              >
                RSVP
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
