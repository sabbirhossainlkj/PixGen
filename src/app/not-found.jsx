import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
       <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you are looking for does not exist.
      </p>

      <Link href="/" className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg">
        Go Back Home
      </Link>
    </div>
    );
};

export default NotFound;