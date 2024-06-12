import Hero from '@/components/layout/Hero'
import Container from '@/components/layout/MaxWContainer'

import '@/styles/globals.css'
import '../styles/globals.css'
import { lazy, Suspense } from 'react'
const HomePage = () => {
  const Location = lazy(() => import('@/components/layout/Location'))
  return (
    <>
      <div className="z-0 w-screen">
        <Hero />
      </div>
      <Container>
        <section style={{ background: 'red' }}>Menu</section>
        <Suspense fallback={<div>Loading...</div>}>
          <Location />
        </Suspense>
        <section style={{ background: 'green' }}>
          Banquets & Private Dining
        </section>
        <section style={{ background: 'yellow' }}></section>
      </Container>
    </>
  )
}
export default HomePage
