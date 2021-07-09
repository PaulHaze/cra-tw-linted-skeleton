import React from 'react';

export function Home() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-100">
      <div className="flex flex-col justify-center w-8/12 px-10 py-10 bg-white rounded-lg shadow-2xl">
        <h1 className="p-10 m-10 text-[#504e63] font-bold  text-center">
          Im your new Tailwind Project
        </h1>
        <p className="text-[#fff] m-5 text-center">
          Delete this and make something great
        </p>
      </div>
    </div>
  );
}
