import { Suspense } from 'react'
import Layout from './layout'
import HomepageComponent from '@/components/homepage'

export default function Home() {
  return (
    <Layout>
      <main>
        <section>
          <Suspense>
            <HomepageComponent />
          </Suspense>
        </section>
      </main>
    </Layout>
  )
}
