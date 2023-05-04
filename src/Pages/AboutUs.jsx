import React from 'react'
import '../index.css'

const AboutUs = () => {
  return (
    <div className='text-white mx-[.5rem] mb-[2rem]'>
      <h1 className='font-Robot text-[2rem] font-bold text-center mb-[2rem] text-first_color'>About Digital World</h1>

      <section className='grid grid-cols-2 grid-row-2 mb-[1.5rem]'>
        <img className='w-[8rem] my-auto' src="/Navbar-img/LOGO.png" alt="" />

        <p className='font-Roboto overflow-auto mb-[1rem]'>Digital World was founded by a group of tech savvy investors from various places of Argentina, Brazil and Uruguay, with the objective of bringing the best 
          online buying experience for all gamer-related items.
        </p>

        <p className='col-span-full font-Roboto'>We proud ourselves of our friendly user experience and unmatched customer service. Our team here at Digital World is very highly motivated group of individuals, 
          striving to bring the best to the table!
        </p>
      </section>
      <h2 className='text-center text-first_color text-[2em] font-500 mb-[1rem] font-Roboto'>Our Staff</h2>

      <div className='grid grid-cols-1 grid-row-7 place-items-center'>
        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Rosmi.jpg" alt="" />
          <div>
            <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Rosmildo Lopez, <span className='text-first_color font-bold'>CEO</span></h3>
            <p className='font-Roboto italic text-center'>“We cannot solve problems with the kind of thinking we employed when we came up with them”</p>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Ariel.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Ariel Rivarola, <span className='text-first_color font-bold'>CFO</span></h3>
              <p className='font-Roboto italic text-center'>“Learn as if you will live forever, live like you will die tomorrow”</p>
            </div>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Dario-Manuel.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Darío Manuel, <span className='text-first_color font-bold'>CTO</span></h3>
              <p className='font-Roboto italic text-center'>"Success is not final; failure is not fatal: It is the courage to continue that counts"</p>
            </div>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Leo.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Leonardo Techera, <span className='text-first_color font-bold'>Chief Software Engineer</span></h3>
              <p className='font-Roboto italic text-center'>"It is better to fail in originality than to succeed in imitation"</p>
            </div>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Mauro.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Mauro Biassi, <span className='text-first_color font-bold'>General Manager</span></h3>
              <p className='font-Roboto italic text-center'>"The road to success and the road to failure are almost exactly the same"</p>
            </div>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Rocío.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Rocío Vivanco, <span className='text-first_color font-bold'>General UX/UI Manager</span></h3>
              <p className='font-Roboto italic text-center'>“Success usually comes to those who are too busy looking for it”</p>
            </div>
          </div>
        </div>

        <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
          <div className='w-[20rem] bg-zinc-800 mb-[1rem] p-[.5rem] rounded-2xl flex flex-col items-center justify-center'>
            <img className='w-[9rem] rounded-full mb-[.5rem]' src="/About-us-img/Cachi.jpg" alt="" />
            <div>
              <h3 className='font-Roboto text-[1.3rem] mb-[1rem] text-center'>Ezequiel Cachi, <span className='text-first_color font-bold'>Chief Business Analyst</span></h3>
              <p className='font-Roboto italic text-center'>“The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty"</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs