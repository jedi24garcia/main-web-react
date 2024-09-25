import React from 'react';

function Header() {
  return (
    <header className="flex justify-between items-center p-20 bg-gradient-to-r from-neutral-400 to-gray-500">
      <nav>
        <ul className='flex space-x-10'>
          <li className='hover:'>About</li>
          <li className='hover:'>Portfolio</li>
          <li className='hover:'>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;