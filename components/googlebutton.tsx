"use client"
import { signIn } from "next-auth/react";

const SignUpWithGoogleButton = () => {
  return (
    <button
      onClick={() => signIn('google')}
      className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        width="24"
        height="24"
      >
        <path
          fill="#EA4335"
          d="M24 9.5c3.17 0 5.9 1.18 8.08 3.09L37.71 8C33.75 4.48 29.18 2.5 24 2.5 14.64 2.5 6.77 8.42 3.46 16.89l7.72 5.99C13.1 15.01 18.13 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M24 43.5c5.18 0 9.75-1.98 13.71-5.5l-6.63-5.09C28.92 35.33 26.17 36.5 24 36.5c-5.92 0-10.96-5.51-12.82-11.37L3.46 26c3.3 8.47 11.17 14.39 20.54 14.39z"
        />
        <path
          fill="#4A90E2"
          d="M43.59 24.5c0-.9-.08-1.77-.22-2.62H24v7.72h11.04c-.75 2.01-2.18 3.88-4.11 5.17l6.63 5.09c3.89-3.47 6.03-8.61 6.03-15.36z"
        />
        <path
          fill="#FBBC05"
          d="M11.18 24c0-1.5.27-2.95.73-4.33l-7.72-5.99C3.5 16.41 2.5 20.13 2.5 24c0 3.87 1 7.59 2.69 10.92l7.72-5.99c-.46-1.37-.73-2.82-.73-4.33z"
        />
      </svg>
      Sign Up with Google
    </button>
  );
};

export default SignUpWithGoogleButton;