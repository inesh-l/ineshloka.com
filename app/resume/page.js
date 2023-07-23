import { Navbar } from '../components/nav/navbar.js'

export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Resume" />

      
      <div className="flex flex-col items-center">
        <iframe src='/IneshLoka_Resume.pdf' width="80%" height="1000px" />
      </div>
    </main>
  )
}
