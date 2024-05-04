'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaBug } from 'react-icons/fa';
import classNames from 'classnames';
const NavBar = () => {
  const currentPath = usePathname();
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
          <Link
            key={link.href}
            className={classNames({
              'text-zinc-900': currentPath === link.href,
              'text-zinc-500': currentPath !== link.href,
              'transition-colors hover:text-zinc-800': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
