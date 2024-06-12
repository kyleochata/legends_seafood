import MainLayout from '@/components/layout/MainLayout'
import Head from 'next/head'

function LegendsRestaurant({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Legends Restaurant</title>
        {/* <link rel="icon" href="images/sm_legends_seafood_logo.jpg" /> */}
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  )
}
export default LegendsRestaurant
