import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="fixed flex flex-col gap-2 justify-center items-center inset-0 h-[100vh] z-50 bg-black bg-opacity-90">
      <div class="book w-40 h-28 p-1">
        <div class="book__pg-shadow"></div>
        <div class="book__pg"></div>
        <div class="book__pg book__pg--2"></div>
        <div class="book__pg book__pg--3"></div>
        <div class="book__pg book__pg--4"></div>
        <div class="book__pg book__pg--5"></div>
      </div>
      <h2 className="text-white font-bold">Reading..</h2>
    </div>
  );
};

export default Loading;