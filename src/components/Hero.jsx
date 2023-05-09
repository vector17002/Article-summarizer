import React from 'react'
import { logo } from '../assets'
const Hero = () => {
  return (
    <header className='w-full flex flex-col justify-center items-center'>
      <nav className='flex flex-row justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='logo' className='w-28 object-contain'/>
        <button type='button' onClick={()=>{
            window.open('https://github.com/vector17002/Article-summarizer')
        }} className='black_btn'>
            Github
        </button>
      </nav>
      <h1 className='head_text'>
        Summarize Articles with <br className='max-md:hidden'/> <span className='orange_gradient'> OpenAI API</span>
      </h1>
    <h2 className='desc'>
      Simplify your readings with the help of <span className='orange_gradient'>Sumz</span> which will give you summary of the content that you were reading. Just copy the link and let this tool summarize it for you.
    </h2>
    </header>
  )
}

export default Hero
