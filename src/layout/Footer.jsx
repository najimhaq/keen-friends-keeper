import Link from "next/link";
import { FaCameraRetro, FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='bg-[#244D3F] text-white py-10 mt-20'>
      <div className='container mx-auto px-6 text-center'>
        {/* Brand */}
        <h1 className='text-5xl font-bold mb-2'>KeenKeeper</h1>
        <p className='max-w-3xl mx-auto text-sm mb-8 text-gray-400'>
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        {/* Social Links */}
        <h2 className='text-lg font-semibold mb-4'>Social Links</h2>
        <div className='flex justify-center gap-6 mb-8'>
          <Link
            href='#'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white text-green-900 hover:bg-green-200 transition'
            aria-label='Instagram'
          >
            <span className='font-bold text-gray-700'>
              <FaCameraRetro />
            </span>
          </Link>
          <a
            href='#'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white  hover:bg-green-200 transition'
            aria-label='Facebook'
          >
            <span className='font-bold text-gray-700'>
              <FaFacebookSquare />
            </span>
          </a>
          <a
            href='#'
            className='w-10 h-10 flex items-center justify-center rounded-full bg-white  hover:bg-green-200 transition'
            aria-label='Twitter/X'
          >
            <span className='font-bold text-gray-700'>
              <FaXTwitter />
            </span>
          </a>
        </div>

        {/* Legal Links */}
        <div className='flex justify-between items-center text-sm text-gray-300 space-x-4 mb-4'>
          <div>
            {/* Copyright */}
            <p className='text-xs text-gray-400'>
              © 2026 KeenKeeper. All rights reserved.
            </p>
          </div>
          <div>
            <Link href='#' className='text-gray-400 hover:underline mr-2'>
              Privacy Policy
            </Link>
            <span className='mr-2'>|</span>
            <Link href='#' className='text-gray-400 mr-2 hover:underline'>
              Terms of Service
            </Link>
            <span className='mr-2'>|</span>
            <Link href='#' className='text-gray-400 hover:underline'>
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
