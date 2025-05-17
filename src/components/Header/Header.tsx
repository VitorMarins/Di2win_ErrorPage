// import React from 'react';
import LogoDi2win from './../../assets/logo_di2win.svg';

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#F31E8D] shadow-md">
      <div className="flex items-center gap-4">
        <img src={LogoDi2win} alt="Logo Di2win" className="h-10 w-auto" />
        <h1 className="text-2xl font-bold text-gray-800">Di2win</h1>
      </div>
    </header>
  );
}
