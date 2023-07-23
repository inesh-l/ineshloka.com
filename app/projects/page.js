import { Navbar } from '../components/nav/navbar.js'
import { ProjectCard } from '../components/projects/projectCard.js'

export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Projects" />

      <div className="flex flex-col items-center">
        <a href="https://github.com/inesh-l/stickerbomb" target='_blank' className="min-w-[50%]">
          <ProjectCard 
          name="Stickerbomb"
          description="An application to isolate subjects of images and turn them into cartoon stickers" />
        </a>
        <a href="https://github.com/inesh-l/soundbite" target='_blank' className="min-w-[50%]">
          <ProjectCard
          name="Soundbite"
          description="A lightweight utility to capture and modify sound clips from your computer" />
        </a>
        <a href="" target='_blank' className="min-w-[50%]">
          <ProjectCard
          name="AI Club Project Series"
          description="A collection of AI model implementations to teach club members the fundamentals of deep learning" />
        </a>
        <a href="https://github.com/inesh-l/vscode" target='_blank' className="min-w-[50%]">
          <ProjectCard
          name="VSCode - Tauri"
          description="An in-progress migration of Code - OSS (Visual Studio Code) to Tauri" />
        </a>
        <a href="https://github.com/inesh-l/MazeSolver" target='_blank' className="min-w-[50%]">
          <ProjectCard
          name="Maze Solver"
          description="An implementation of Dijkstra's algorithm to solve mazes using computer vision" />
        </a>
      </div>
    </main>
  )
}
