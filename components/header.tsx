import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('/images/background.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full  font-deco">
                <h1 className="text-3xl md:text-4xl text-center font-extrabold  text-outline-green-header">Graeson and Elena's Wedding!!</h1>
                <nav className="mt-4">
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#home" className="text-[#ba9e6d] font-bold  border-2 border-brown-dark bg-brown px-4 py-2 rounded">Home</a>
                        </li>
                        <li>
                            <a href="#about" className="text-[#ba9e6d] font-bold border-2 border-brown-dark bg-brown px-4 py-2 rounded">About</a>
                        </li>
                        <li>
                            <a href="#rsvp" className="text-[#ba9e6d] font-bold border-2 border-brown-dark bg-brown px-4 py-2 rounded">RSVP</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;