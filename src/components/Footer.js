import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
<footer className="bg-white  shadow border-t-2 dark:border-gray-900 dark:bg-gray-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <Link to="/" className="hover:underline">MovieMate</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">Instagarm</a>
        </li>
        <li>
            <a href="https://in.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"  rel="noreferrer" target="_blank" className="hover:underline me-4 md:me-6">LinkedIn</a>
        </li>
        <li>
            <a href="https://www.youtube.com/"  target="_blank" rel="noreferrer" className="hover:underline me-4 md:me-6">YouTube</a>
        </li>
        <li>
            <a href="https://github.com/"  target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
        </li>
    </ul>
    </div>
</footer>
  )
}
