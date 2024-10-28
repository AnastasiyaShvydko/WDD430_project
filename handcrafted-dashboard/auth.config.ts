
import type { NextAuthConfig}  from 'next-auth';
import { revalidatePath } from 'next/cache';

export const authConfig = {
  pages: {

    signIn: '/login',
  },
  
  callbacks: {
    session({ session, token, user }) {
      return session},

    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;


      const isOnDashboard = nextUrl.pathname.startsWith('/handcraft/product_edit');
       if (isOnDashboard&&isLoggedIn) {
        console.log('case1')
          return true;}
        else if (isOnDashboard&&!isLoggedIn) {
          console.log('case2')
          return false}
          
       else if (isLoggedIn) {
        console.log('case3')
       console.log(isLoggedIn);
       console.log('Next URL:', nextUrl);
      //return Response.redirect(new URL('/', nextUrl) );
      return true;

      }
      return true;
    },
    
    
    

  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;

