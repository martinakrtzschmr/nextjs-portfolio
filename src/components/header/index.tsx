import React from 'react'
import Link from 'next/link'

const Header = () => {
  // Component logic goes here

  return (
    <header>
      <div className='p-1'>
        <nav>
          <ul>
            <li>
              <Link href="/admin/users">Users</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact me</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header
