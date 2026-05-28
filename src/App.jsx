import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import OngoingProjects from './components/sections/OngoingProjects'
import Dashboard from './components/sections/Dashboard'
import Certificates from './components/sections/Certificates'
import Contact from './components/sections/Contact'
import { usePortfolio } from './hooks/usePortfolio'

function App() {
  const data = usePortfolio()

  return (
    <div className="min-h-screen">
      <Navbar name={data.profile.name} />
      <main>
        <Hero profile={data.profile} cv={data.cv} />
        <About profile={data.profile} />
        <Skills skills={data.skills} />
        <Projects projects={data.projects} />
        <OngoingProjects projects={data.projects} />
        <Dashboard skills={data.skills} projects={data.projects} />
        <Certificates certificates={data.certificates} />
        <Contact contact={data.contact} profile={data.profile} />
      </main>
      <Footer profile={data.profile} />
    </div>
  )
}

export default App
