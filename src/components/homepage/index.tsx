import { Suspense } from 'react'

import NavBar from '../navbar'
import Hero from './hero'
import Collection from './collection'
import Roadmap from './roadmap'
import About from './about'
import Benefit from './benefit'
import Faq from './faq'
import Footer from '@/components/footer'

export default function HomepageComponent() {
  return (
    <div id="container" className="relative">
      <nav className="bg-khaki-90">
        <Suspense>
          <NavBar />
        </Suspense>
      </nav>

      <main className="relative z-10">
        <section className="m-auto w-full bg-khaki-90">
          <Suspense>
            <Hero />
          </Suspense>
        </section>
        <div className="m-auto w-[calc(100%-32px)] tablet:w-[calc(100%-64px)] desktop:max-w-[1440px]">
          <section
            id="collection"
            className="pb-10 pt-20 tablet:pb-[60px] tablet:pt-[120px]"
          >
            <Suspense>
              <Collection />
            </Suspense>
          </section>
          <section id="benefit" className="py-10 tablet:py-[60px]">
            <Suspense>
              <Benefit />
            </Suspense>
          </section>
          <section id="about" className="py-10 tablet:py-[60px]">
            <Suspense>
              <About />
            </Suspense>
          </section>
          <section id="roadmap" className="py-10 tablet:py-[60px]">
            <Suspense>
              <Roadmap />
            </Suspense>
          </section>
          <section id="faq" className="pt-10 tablet:pt-[60px]">
            <Suspense>
              <Faq />
            </Suspense>
          </section>
        </div>
      </main>

      <footer className="absolute left-0 right-0 top-[calc(100%-40px)] z-0 tablet:top-[calc(100%-80px)]">
        <Suspense>
          <Footer />
        </Suspense>
      </footer>
    </div>
  )
}
