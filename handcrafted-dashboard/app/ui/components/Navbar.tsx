
import NavLinks from '@/app/ui/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import { auth,signOut,signIn } from '@/auth';


//import { useState } from 'react';

 

 // Initially signed in
 
 


//import Link from 'next/link';
//import styles from './Navbar.module.css'; // Optional: for styling

export default function Navbar() {

 

  // const [isSignedIn, setIsSignedIn] = useState(true); 
  // const handleSignInOut = () => {
  //   setIsSignedIn(!isSignedIn); // Toggle the sign-in state
  // };

    return (
        <nav className="bg-tertiary">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                  Icon when menu is closed.
      
                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-space-between sm:items-stretch sm:justify-space-between">
              <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src="../logo.png" alt="Your Company"/>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  {/* <Link href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" aria-current="page">Dashboard</Link>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                  <a href="#" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
                  <NavLinks/>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block">
        <form
          action={async () => {
            'use server';
            console.log(auth())
            await signOut();
          }}>
            
            
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>

      {/* <form
          action={async () => {
            'use server';
            await signOut();
          }}
        >
      <button
        onClick={handleSignInOut}
        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <PowerIcon className="w-6" />
        <div className="hidden md:block">
          {isSignedIn ? 'Sign Out' : 'Sign In'}
        </div>
      </button>
      </form>  */}
      </div>
      
              {/* <!-- Profile dropdown --> */}
              {/* <div className="relative ml-3">
                <div>
                  <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <span className="absolute -inset-1.5"></span>
                    <span className="sr-only">Open user menu</span>
                    <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                  </button>
                </div> */}
      
                {/* <!--
                  Dropdown menu, show/hide based on menu state.
      
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                --> */}
                {/* <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" >
                 
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-0">Your Profile</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-1">Settings</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem"  id="user-menu-item-2">Sign out</a>
                </div> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      
        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {/* <a href="#" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Dashboard</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Team</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
            <a href="#" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Calendar</a> */}
            <NavLinks/>
          </div>
        </div>
      </nav>
    );
};



// import { PowerIcon } from '@heroicons/react/24/outline';
// import { useState } from 'react';
// import NavLinks from '@/app/ui/nav-links'; // Assuming you have a NavLinks component
// import { signOut } from '@/auth'; // Placeholder for your actual auth function
 
// export default function Navbar() {
//   const [isSignedIn, setIsSignedIn] = useState(true); // Assume true for now. Replace with actual auth state if needed.
 
//   const handleSignInOut = () => {
//     if (isSignedIn) {
//       // Actual sign-out process (if connected with auth provider)
//       signOut(); // Adjust this based on your auth provider
//     }
//     setIsSignedIn(!isSignedIn); // Toggle sign-in state
//   };
 
//   return (
//     <nav className="bg-tertiary">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//           {/* Logo and navigation */}
//           <div className="flex flex-1 items-center justify-space-between sm:items-stretch sm:justify-space-between">
//             <div className="flex flex-shrink-0 items-center">
//               <img className="h-8 w-auto" src="../logo.png" alt="Your Company" />
//             </div>
//             <div className="hidden sm:ml-6 sm:block">
//               <div className="flex space-x-4">
//                 {/* Navigation Links */}
//                 <NavLinks />
//               </div>
//             </div>
//           </div>
 
//           {/* Sign in/out button */}
//           <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//             <form action={async () => { 'use server'; await signOut(); }} >
//               <button
//                 onClick={handleSignInOut}
//                 className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
//               >
//                 <PowerIcon className="w-6" />
//                 <div className="hidden md:block">
//                   {isSignedIn ? 'Sign Out' : 'Sign In'}
//                 </div>
//               </button>
//             </form>
//           </div>
//         </div>
 
//         {/* Only show "Edit Page" when the user is signed in */}
//         {isSignedIn ? (
//           <div className="mt-4">
//             <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
//               Edit Page
//             </button>
//           </div>
//         ) : (
//           <div className="mt-4 text-red-500">
//             <p>You must be signed in to edit this page.</p>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }
