import Head from 'next/head'

import Header from '../component/Header'
import Logos from '../component/Logos'
import Product from '../component/Product'
import Info from '../component/Info'
import Contact from '../component/Contact'
import Products from '../component/Products'
export default function Home() {
  return (
    <div className="root">
      <Head>
        <title>Sealjet</title>
        <link rel="shortcut icon" href="./img/logo.jpg" type="image/x-icon"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous"></link>
      </Head>
      <div >
        <Header />
        <Logos />
        <Product />
        <Products />
        <Info />
        <Contact />
      </div>
    </div>
  )
}
