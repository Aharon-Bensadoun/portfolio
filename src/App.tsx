import { Nav } from './components/layout/Nav'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Services } from './components/sections/Services'
import { Approach } from './components/sections/Approach'
import { FeaturedDemos } from './components/sections/FeaturedDemos'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'

export const App = () => (
  <>
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg focus:font-medium"
    >
      Skip to main content
    </a>
    <Nav />
    <main id="main">
      <Hero />
      <About />
      <Services />
      <Approach />
      <FeaturedDemos />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </>
)
