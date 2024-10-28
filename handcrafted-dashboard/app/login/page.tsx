import HandcraftedLogo from '@/app/ui/handcraft-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';
import { auth,signOut,signIn } from '@/auth';

export const metadata: Metadata = {
  title: 'Login',
};
export default async function LoginPage() {
  
 const authUser = await auth();
  if (!authUser){

  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="w-32 text-white md:w-36">
            <HandcraftedLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
else{
//  {signIn()}
  return (
  <>
  <div className="bg-gray-100 flex items-center justify-center min-h-screen">
    <div className="bg-white rounded-lg shadow-lg p-8 w-96 text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome, {authUser.user?.name} !</h1>
        <p className="text-gray-700 mb-6">We're glad to have you here. Explore our features and enjoy your experience!</p>
    </div>
  </div>
  </>
    
  )
}

}
