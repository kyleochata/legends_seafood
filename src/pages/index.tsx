import MainLayout from '@/components/layout/MainLayout'
import Hero from '@/components/layout/Hero'
import '@/styles/globals.css'
import { useTheme } from 'next-themes'

const HomePage = () => {
  return (
    <MainLayout>
      <Hero />

      <h1 className="text-center">Legends Seafood Restaurant</h1>
      <section className="bg-orange-100 dark:bg-yellow-500 dark:text-black w-1/3 flex flex-col items-center justify-between p-3 gap-3">
        <h1 className="text-4xl font-bold text-center">
          Legend Seafood Restaurant
        </h1>
        <p>
          Proudly serving Honolulu's Chinese cultural center since: 200000.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur reprehenderit corporis illum veniam! Quam nulla dolorem
          culpa, commodi alias itaque! Consequatur suscipit a eum reprehenderit,
          doloribus eius. Maiores, culpa? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum labore est ducimus explicabo quam, cupiditate
          quae nam assumenda soluta odio rem vero debitis ab voluptatem incidunt
          iste expedita reprehenderit nobis!
        </p>
        <p>
          Proudly serving Honolulu's Chinese cultural center since: 200000.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur reprehenderit corporis illum veniam! Quam nulla dolorem
          culpa, commodi alias itaque! Consequatur suscipit a eum reprehenderit,
          doloribus eius. Maiores, culpa? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum labore est ducimus explicabo quam, cupiditate
          quae nam assumenda soluta odio rem vero debitis ab voluptatem incidunt
          iste expedita reprehenderit nobis!
        </p>
        <p>
          Proudly serving Honolulu's Chinese cultural center since: 200000.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur reprehenderit corporis illum veniam! Quam nulla dolorem
          culpa, commodi alias itaque! Consequatur suscipit a eum reprehenderit,
          doloribus eius. Maiores, culpa? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Earum labore est ducimus explicabo quam, cupiditate
          quae nam assumenda soluta odio rem vero debitis ab voluptatem incidunt
          iste expedita reprehenderit nobis!
        </p>
      </section>
    </MainLayout>
  )
}
export default HomePage
