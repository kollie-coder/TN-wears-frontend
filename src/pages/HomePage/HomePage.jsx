import React from 'react'
import { DonateNow, Header, NewArrivals, PageLayout, PopularCat, PriceCat, StylesCat, TrendingSearch } from '../../components'

const HomePage = () => {
  return (
    <PageLayout>
      <Header />
      <StylesCat />
      <TrendingSearch />
      <PriceCat />
      <PopularCat />
      <NewArrivals />
      <DonateNow />
    </PageLayout>
   
  )
}

export default HomePage