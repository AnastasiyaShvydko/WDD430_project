
import { authConfig } from '@/auth.config';
import NavLinks from '@/app/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { auth,signOut,signIn } from '@/auth';
import { useSession } from "next-auth/react";
import { use } from 'react';
import Link from 'next/link';
import { redirect } from 'next/dist/server/api-utils';
import { NextURL } from 'next/dist/server/web/next-url';



  

  

//import { useState } from 'react';

 

 // Initially signed in
 
 


//import Link from 'next/link';
//import styles from './Navbar.module.css'; // Optional: for styling

export default async function Navbar() {

    return(
    <>

        <nav className="bg-tertiary">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                {/* <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span> */}
                {/* <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-space-between sm:items-stretch sm:justify-space-between">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="../logo.png" alt="Your Company"/>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLinks/>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className=" h-auto w-full grow rounded-md bg-gray-50 md:block">
              {/* check if User is signed In and change the button respectivly */}
              {await auth()?(
                <form action={async () => {
                  'use server';
                  await signOut({ redirectTo: '/' });}}>
                  <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                    <PowerIcon className="w-6" />
                    <div className="hidden md:block">Sign Out</div>
                  </button>
                </form>)
                :
                (<Link href="/login" className="flex items-center gap-5 self-start rounded-lg bg-grey-50 px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-sky-100 hover:text-blue-600 md:text-base">
                   < PowerIcon className="w-5 md:w-6" /> <span>Log in</span>
                </Link>)}
        
      </div>
      
              
            </div>
          </div>
        </div>
      
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLinks/>
          </div>
        </div>
      </nav>
      </>
    );
  }
    