'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from "clsx";


const links = [
    { name: 'Home',
      href: '/',
     },
    {
      name: 'Catalog',
      href: '/handcraft/catalog',
      
    },
    { name: 'Sellers', 
      href: '/handcraft/sellers', 
      },
    { name: 'About', 
        href: '/handcraft/about', 
    },

  ];

  export default function NavLinks() {
    const pathname = usePathname();
    return (
      <>
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              href={link.href}
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md dark-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-center md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
            >
              {/* <LinkIcon className="w-6" /> */}
              <p className=" md:flex justify-center">{link.name}</p>
            </Link>
          );
        })}
      </>
    );
  }
  


  