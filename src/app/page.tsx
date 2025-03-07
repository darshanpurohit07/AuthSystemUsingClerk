'use client';

import { SignIn, SignUp, SignedOut, SignedIn, UserButton } from '@clerk/nextjs';

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <SignedOut>
          <h2 className="text-xl font-semibold mb-4 text-center">Welcome to Our App</h2>
          <div className="flex flex-col gap-4">
            <SignIn path="/sign-in" routing="path" redirectUrl="/dashboard" />
            <p className="text-center text-gray-600">or</p>
            <SignUp path="/sign-up" routing="path" redirectUrl="/dashboard" />
          </div>
        </SignedOut>
        
        <SignedIn>
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold mb-2">You are already signed in!</p>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
      </div>
    </div>
  );
}
