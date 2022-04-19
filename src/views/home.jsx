import React from 'react'
import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'
import AppWorks from '../components/home/works'
import AppFeq from '../components/home/faq'
import AppPricing from '../components/home/pricing'

const AppHome = () => {
  return (
    <div className='main'>
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFeq/>
      <AppPricing/>
    </div>
  )
}

export default AppHome