"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, text, mobile }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`${
        mobile
          ? 'block px-3 py-2 rounded-md text-base font-medium'
          : 'px-3 py-2 rounded-md text-sm font-medium'
      } ${
        isActive
          ? 'bg-ios-primary-light text-white dark:bg-ios-primary-dark'
          : 'text-ios-gray-light hover:bg-gray-100 dark:text-ios-gray-dark dark:hover:bg-gray-800'
      }`}
    >
      {text}
    </Link>
  );
};

export default NavLink;
