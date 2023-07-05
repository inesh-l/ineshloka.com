import { Navbar } from '../components/nav/navbar.js'
import {faPython, faJava, faJs, faMicrosoft, faGit, faLinux } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Home" />

      <div className="flex flex-col items-center pt-48 pb-24">
        <h1 className="capitalize text-5xl font-black mb-4">Hi, I&#39;m Inesh!</h1>
        <p className="text-m text-center">I&#39;m a computer science student and software developer. Here&#39;s a bit about me!</p>
      </div>


      <div className="flex flex-col items-center p-24 text-7xl">
        &#8595;
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4 text-center lg:text-left">Introduction</h2>
        <p className={"m-0 max-w-[80ch] text-md p-2"}>Hi! My name is Inesh Loka. I&#39;m a current B.S. Computer Science and Engineering student at The Ohio State University, 
        with specializations in both Artificial Intelligence and Software Development.</p>
        <p className={"m-0 max-w-[80ch] text-md p-2"}>My most recent position was a Software Development Internship at London Computer Systems in Cincinnati, 
        where I developed features for enterprise-level rental accounting software used by over 30,000 corporate clients worldwide.</p>
        <p className={"m-0 max-w-[80ch] text-md p-2"}>Outside of work and school, I educate myself through personal projects, mainly focusing on data science and low-level software development.
        I also spend much of my free time training boxing through OSU&#39;s Boxing Club, and I&#39;m an active technology committee member in our Artifical Intelligence Club.</p>
      </div>
        

      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4 text-center lg:text-left">Skills & Capabilities</h2>
        <div className="mb-32 grid text-center lg:mb-0  lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={"mb-3 text-2xl font-semibold"}>
              Deep Learning & AI
            </h2>
            <p className={"m-0 max-w-[100ch] text-sm text-gray-400"}>
              I&#39;ve created and used custom deep learning models for personal projects, and I&#39;ve participated in various Kaggle competitions for fun. 
              I&#39;m also active in Ohio State&#39;s AI club as a technology committee member.
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={"mb-3 text-2xl font-semibold"}>
              Enterprise-Level Application Development
            </h2>
            <p className={"m-0 max-w-[100ch] text-sm text-gray-400"}>
              During my time as an intern at London Computer Systems, I gained experience developing enterprise-grade desktop applications using .NET and 
              WPF and web applications using Angular and ASP.NET. 
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={"mb-3 text-2xl font-semibold"}>
              Web Development
            </h2>
            <p className={"m-0 max-w-[100ch] text-sm text-gray-400"}>
              I&#39;ve used many different web technologies to create personal projects and maintain websites for various organizations, such as Ohio State&#39;s AI club. I&#39;m 
              most comfortable with Next.js/React, Django and Flask, but I&#39;m always open to learning new technologies.
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={"mb-3 text-2xl font-semibold"}>
              Education and Leadership
            </h2>
            <p className={"m-0 max-w-[100ch] text-sm text-gray-400"}>
              I&#39;ve lead groups in web development and tutored programming and math. My role as an AI club technology committee member is to help create lesson plans and
              assist in teaching deep learning to undergrad students.
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={"mb-3 text-2xl font-semibold"}>
              Languages and Technologies
            </h2>
            <div className="grid text-center grid-cols-6">
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faPython} className="p-2"/>
              </div>
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faJs} className="p-2"/>
              </div>
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faJava} className="p-2"/>
              </div>
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faMicrosoft} className="p-2"/>
              </div>
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faGit} className="p-2"/>
              </div>
              <div className="flex flex-row items-center justify-center p-4">
                <FontAwesomeIcon icon={faLinux} className="p-2"/>
              </div>
            </div>
            <p className={"m-0 max-w-[100ch] text-sm text-gray-400"}>
              A full set of technologies and software I have experience with is on my resume, linked on the top right.
            </p>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4 text-center lg:text-left">Career Interests</h2>
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Machine Learning Engineering
            </h2>
            <p className={"m-0 max-w-[50ch] text-sm text-gray-400"}>
              I have specific interests in both natural language processing and computer vision, and I&#39;m looking to deepen my understanding through research and coursework
              as part of my degree specialization at Ohio State. 
            </p>
          </div>
          <div className="group rounded-lg border border-transparent px-5 py-4" >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Fullstack Software Engineering
            </h2>
            <p className={"m-0 max-w-[50ch] text-sm text-gray-400"}>
              I have a passion for everything software, and I&#39;m always looking to learn new technologies. During my time in college, I&#39;m looking to deepen my understanding of computer systems and software architecture. 
            </p>
          </div>
          
        </div>
      </div>


      <div className="flex flex-col items-center p-24">
        <h2 className="text-3xl font-black mb-4 text-center lg:text-left">What I&#39;m Looking For</h2>
        <p className={"m-0 max-w-[80ch] text-md p-2"}>I&#39;m actively seeking full-time summer internship positions in both software engineering and machine learning. I&#39;m also open to part-time remote positions during the fall and spring semesters
        while I&#39;m taking classes full time. </p>
        <p className={"m-0 max-w-[80ch] text-md p-2"}>You can find my contact information on the top right. I&#39;m best reached by email, at either my personal gmail (ineshrloka@gmail.com) or my school email (loka.4@osu.edu).</p>
      </div>
    </main>
  )
}
