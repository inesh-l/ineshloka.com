'use client'
import { useEffect, useState } from "react"

export function Navbar(props) {
    let [isShrunk, setShrunk] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setShrunk((isShrunk) => {
                if (!isShrunk && (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)) {
                    return true;
                }

                if (isShrunk && document.body.scrollTop < 4 && document.documentElement.scrollTop < 4) {
                    return false;
                }

                return isShrunk;
            });
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav className={isShrunk ? "transition-all duration-300 border-gray-200 dark:border-gray-800 backdrop-blur sticky top-0 mb-32" : "transition-all duration-300 bg-dark p-16 sticky top-0"}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <p className="text-xl font-black">{props.currentPage}</p>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                    <li>
                        <a href="home" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="projects" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="blog" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Blog
                        </a>
                    </li>
                    <li>
                        <a href="resume" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Resume
                        </a>
                    </li>
                    <li>
                        <a href="contact" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                            Contact
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}