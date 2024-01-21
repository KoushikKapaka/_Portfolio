import React from "react";

const Header: React.FC = () => {
  return (
    <div className="fixed flex items-center justify-center translate-x-[-50%]  mx-auto overflow-auto z-50  top-4 left-1/2  w-5/6 bg-black  text-white p-3 rounded-full border border-purple-500">
      <div className="container mx-auto flex justify-around items-center">
        <div className="text-xl">Sri Krishna Koushik Kapaka</div>
        <nav>
          <ul className="flex space-x-4">
            <li>Home</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </nav>
        <button className="bg-purple-600 text-white px-4 py-2 rounded">
          Contact me
        </button>
      </div>
    </div>
  );
};

export default Header;
