import Image from 'next/image'
import { Navbar } from '../components/nav/navbar.js'

export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Home" />

      <div className="flex flex-col items-center pt-48 pb-24">
        <h1 className="capitalize text-5xl font-black mb-4">Hi, I'm Inesh</h1>
        <p className="text-m">I'm a computer science student and software developer. Here's a bit about me!</p>
      </div>


      <div className="flex flex-col items-center p-24 text-7xl">
        &#8595;
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4">About Me</h2>
      </div>
        

      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4">Career Interests</h2>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Machine Learning Engineering
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              I've created and used custom deep learning models for personal projects, and I've participated in various Kaggle competitions for fun. 
              I'm also active in Ohio State's AI club as a technology committee member.
            </p>
          </div>
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Fullstack Application Development
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              I have experience developing enterprise-grade desktop applications using .NET and WPF, and web applications using Angular and NextJS. 
              This website was built using NextJS and TailwindCSS.
            </p>
          </div>
          <div
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Education and Leadership
            </h2>
            <p className={`m-0 max-w-[50ch] text-sm opacity-50`}>
              I'll come up with something for here later.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4">Skills & Capabilities</h2>
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4">What I'm Looking For</h2>
      </div>
    </main>
  )
}
