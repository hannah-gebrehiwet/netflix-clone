import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner from '../../components/banner/Banner'
import Rowlist from '../../components/rows/Rowlist/Rowlist'
function Home () {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Rowlist />
      <Footer/>
    </div>
  )
}

export default Home
