import Link from 'next/link';
import React from 'react';
import { FaBug } from 'react-icons/fa';
const NavBar = () => {
  const links = [
    {
      label: 'Dashboard',
      href: '/',
    },
    {
      label: 'Cases',
      href: '/cases',
    },
  ];

  return (
    <nav className="flex space-x-6 border-b h-14 items-center px-6 mb-5">
      <Link href={'/'}>
        <FaBug />
      </Link>
      <ul className=" flex space-x-6">
        {links.map((link) => (
          <li className=" text-zinc-600 transition-colors hover:text-zinc-900">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
