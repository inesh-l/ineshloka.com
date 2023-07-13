import { Navbar } from '../components/nav/navbar.js'


export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Projects" />

      
      <div className="flex flex-col items-center p-24">
        <p className="text-lg">This page is still under development.</p>
      </div>
    </main>
  )
}
