import { useState } from 'react'
import Hero from './components/Hero';
import Article from './components/Article';
function App() {

  return (
   <main>
    <div className='main'>
      <div className='gradient'/>
    </div>
    <div className='app'>
      <Hero/>
      <Article/>
    </div>
   </main>
  )
}

export default App
