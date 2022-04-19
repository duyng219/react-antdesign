import React from 'react'
import AppHero from '../components/home/hero'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'

const AppHome = () => {
  return (
    <div className='main'>
      <AppHero/>
      <AppAbout/>
      <AppFeature/>
    </div>
  )
}

export default AppHome