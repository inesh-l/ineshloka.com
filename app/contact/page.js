import { Navbar } from '../components/nav/navbar.js'
import {ContactCard} from '../components/contact/contactCard.js';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <main className="">
      <Navbar currentPage="Contact" />

      
      <div className="flex flex-col items-center p-24">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
          <ContactCard icon={faEnvelope} text={"Email"} link={"mailto:ineshrloka@gmail.com"}/>
          <ContactCard icon={faGithub} text={"GitHub"} link={"https://github.com/inesh-l"}/>
          <ContactCard icon={faLinkedin} text={"LinkedIn"} link={"https://www.linkedin.com/in/inesh-l"}/>
        </div>
      </div>
    </main>
  )
}
