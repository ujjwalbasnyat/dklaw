import React from 'react'
import Animation from '../components/animatedText'
import Services from './services'
import Lawyers from './lawyers'

const Home = () => {
  return (
    <div className='min-h-screen'>
        <Animation/>
        <Services/>
        <Lawyers/>
    </div>
  )
}

export default Home