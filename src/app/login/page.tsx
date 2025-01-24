import Image from 'next/image'; 
import Link from 'next/link';

export default function Login() {
  return (
     <>
    <div className="flex min-h-screen justify-center items-center">
      {/* Card Style Login Form */}
      <div className="w-full mt-20 max-w-md bg-white p-7 mb-12 rounded-lg shadow-sm">
        
        {/* Brand Name (Instead of Logo Image) */}
        <h2 className="text-3xl font-bold text-black mb-6 text-center">Login</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          Please login using account details below.
        </p>

        {/* Login Form */}
        <form className="w-full space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 transition duration-300 ease-in-out"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full p-3 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 transition duration-300 ease-in-out"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-pink-600 hover:bg-pink-700 text-white text-lg font-semibold rounded-md transition duration-300 ease-in-out"
            >
              Log In
            </button>
          </div>

          {/* Forgot Password Link */}
          <div className="text-center mt-4">
            <Link href="/forgot-password" className="text-[#714329] hover:text-[#5b3624] text-sm transition duration-300">
              Forgot your password?
            </Link>
          </div>

          {/* Register Link */}
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link href="/" className="text-[#714329] hover:text-[#5b3624] font-semibold transition duration-300">
                Create account
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>

          <div className="flex justify-center mt-14 mb-14">
            <Image
              src="/Blog/News.png"
              alt="News Letter"
              width={700}
              height={600}
              priority
            />
          </div>
          </>
  );
}