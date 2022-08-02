/* eslint-disable */

import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBehanceSquare, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  const router = useRouter()
  const [menuheight, setmenuheight] = useState('scale-y-0')

  const [eibl, setEibl] = useState(false)
  const [ig, setIg] = useState(false)

  return (
    <div className='w-11/12 mx-auto'>
      <Head>
        <title>Home</title>
        <meta name="description" content="The official website of the Entertainment Sports Agency" />
        <link rel="icon" href="/favicon.ico" sizes="24x24" />
      </Head>
      <nav className='relative'>
        <div className="flex flex-row items-center justify-between py-5 border-b-2 border-[#312e36] text-slate-300">
          <div className='flex flex-col justify-center'>
            <Link href="/"><img src="/ESA-Word-Logo.png" className='h-6 md:h-7 lg:h-9'></img></Link>
          </div>
          <div className='hidden md:flex md:flex-row md:gap-5'>
            <Link href="#"><span className='font-semibold text-sm  hover:text-sky-500 transition-all'>Gallery</span></Link>
            <Link href="/contact"><span className='font-semibold text-sm hover:text-sky-500 transition-all'>Contact</span></Link>
            <Link href="/news"><span className='font-semibold text-sm hover:text-sky-500 transition-all'>News</span></Link>
          </div>
          <div className='flex flex-col gap-1.5 md:gap-2 md:hidden group hover:cursor-pointer' onClick={() => { menuheight === 'scale-y-100' ? setmenuheight('scale-y-0') : setmenuheight('scale-y-100') }}>
            <span className="block h-0.5 w-6 bg-white group-hover:bg-purple-400 rounded-lg"></span>
            <span className="block h-0.5 w-6 bg-white group-hover:bg-purple-400 rounded-lg"></span>
            <span className="block h-0.5 w-6 bg-white group-hover:bg-purple-400 rounded-lg"></span>

          </div>
        </div>
        <div className={`absolute bg-[#131215] border-none z-30 w-full overflow-hidden duration-500 flex flex-col gap-3 md:hidden text-slate-50 font-semibold text-3xl py-5 h-fit ${menuheight}  origin-top`}>
          <Link href="#"><span className='font-semibold text-base  hover:text-sky-500 transition-all'>Gallery</span></Link>
          <Link href="/contact"><span className='font-semibold text-base hover:text-sky-500 transition-all'>Contact</span></Link>
          <Link href="/news"><span className='font-semibold text-base hover:text-sky-500 transition-all'>News</span></Link>
        </div>
      </nav>
      <main className='relative'>
        <div className="mx-auto py-40 relative flex flex-col justify-center items-center bg-[url('../public/gradients.png')] bg-cover h-[80vh]">
          <h1 className='text-slate-50 text-3xl sm:text-4xl md:text-5xl text-center tacking-tight font-extrabold pb-10 z-10'>We're coming back...</h1>
          <h2 className='text-slate-50 text-xl sm:text-2xl md:text-3xl text-center tacking-tight font-extrabold pb-3 z-10'>Entertainment Sports Association</h2>
          <p className='text-slate-300 text-sm sm:text-base md:text-lg text-center font-light z-10'>The premier sports and entertainment social network in Southern California</p>

          <div className='flex flex-row w-full justify-center items-center pt-10 gap-5 z-10'>
            <button onClick={() => router.push('/contact')} className='bg-slate-50 text-slate-700 text-sm md:text-base p-1 px-2 rounded-sm hover:scale-105 transition'>Contact Us</button>
            <Link href='#'><span className='hover:translate-x-2 transition text-slate-200 text-sm md:text-base'>View Gallery</span></Link>
          </div>
        </div>
        <div className='mx-auto max-w-6x'>
          <img src="/wave-tournament-1.jpeg" className='w-full h-[30vh] sm:h-[35vh] md:h-[40vh] lg:h-[90vh] drop-shadow-lg'></img>
          <h2 className=' text-2xl sm:text-3xl md:text-4xl font-bold text-slate-50 w-full text-center pt-32'>Our Leagues</h2>
          <div className='w-full flex flex-col md:flex-row justify-between min-h-[60vh] h-fit my-16 text-left flex-nowrap md:flex-wrap gap-10'>
            <div className='rounded-sm w-full md:w-[45%] min-h-[225px] h-[30vh] shadow-lg relative flex flex-col justify-end border-2 border-[#312e36] border-b-[#28282B] hover:border-slate-200 hover:border-b-2 transition duration-300 group hover:-translate-y-3 hover:duration-400'>
              <div className='bg-transparent group-hover:bg-[#28282B]/75 rounded-b-sm w-full h-full flex flex-col justify-end transition-all duration-300 relative z-20 group'>
                <div className='h-full p-4 flex flex-col justify-between relative'>
                  <img src='Softball-Industry-Logo.png' className='absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-40 transition-all duration-300'></img>
                  <p className='font-light text-slate-50 z-20 opacity-0 group-hover:opacity-100 duration-300'>The league comprised of entertainers, directors, producers, politicians, business professionals, Ex NBA, NFL, NBL and collegiate athletes. Games are scheduled to be played every Saturday at Woodland Hills Park in Woodland Hills, CA. </p>
                  <button className='p-1 px-2 text-black bg-slate-50 w-fit z-20 opacity-0 group-hover:opacity-100 duration-300'>See More</button>
                </div>
                <div className='p-2 bg-[#28282B]  z-20'>
                  <h1 className='font-semibold text-slate-200 rounded-sm'>Industry Softball League</h1>
                </div>
              </div>
            </div>
            <div className='rounded-sm w-full md:w-[45%] min-h-[250px] h-[30vh] shadow-lg relative flex flex-col justify-end border-2 border-[#312e36] border-b-[#28282B] hover:border-slate-200 hover:border-b-2 transition duration-300 group hover:-translate-y-3 hover:duration-400'>
              <div className='bg-transparent group-hover:bg-[#28282B]/75 rounded-b-sm w-full h-full flex flex-col justify-end transition-all duration-300 relative z-20 group'>
                <div className='h-full p-4 flex flex-col justify-between relative'>
                  <img src='EBA Logo.png' className='absolute w-[50%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 group-hover:opacity-40 transition-all duration-300'></img>
                  <p className='font-light text-slate-50 z-20 opacity-0 group-hover:opacity-100 duration-300'>The Entertainment Basketball Association, started in 2008 and is a highly competitive sports and entertainment basketball league comprised of entertainers, directors, producers, politicians, business professionals, Ex NBA, NFL, NBL and collegiate athletes.</p>
                  <button className='p-1 px-2 text-black bg-slate-50 w-fit z-20 opacity-0 group-hover:opacity-100 duration-300'>See More</button>
                </div>
                <div className='p-2 bg-[#28282B]  z-20'>
                  <h1 className='font-semibold text-slate-200 rounded-sm'>Entertainment Basketball Association</h1>
                </div>
              </div>
            </div>
            <div className='rounded-sm w-full md:w-[45%] min-h-[250px] h-[30vh] shadow-lg relative bg-[url("../public/wave-tournament-1.jpeg")] flex flex-col justify-end'>
              <div onMouseEnter={() => setEibl(true)} onMouseLeave={() => setEibl(false)} className='bg-transparent hover:bg-[#28282B]/75 rounded-b-sm w-full h-full flex flex-col justify-end transition-all duration-300'>
                <div className='h-full p-4 flex flex-col justify-between'>
                  {eibl ? <>
                    <p className='font-light text-slate-50'>The Entertainment Industry Bowling League provides competitive bowling set in a lively social environment that includes a Dj, Dominoes,  Board and Card games along with food and lots of fun and excitement.</p>
                    <button className='p-1 px-2 text-black bg-slate-50 w-fit'>See More</button>
                  </>
                    : null}
                </div>
                <div className='p-2 bg-[#28282B]'>
                  <h1 className='font-semibold text-slate-200 rounded-sm'>Entertainment Industry Bowling League</h1>
                </div>
              </div>
            </div>
            <div className='rounded-sm w-full md:w-[45%] min-h-[250px] h-[30vh] shadow-lg relative bg-[url("../public/wave-tournament-1.jpeg")] flex flex-col justify-end'>
              <div onMouseEnter={() => setIg(true)} onMouseLeave={() => setIg(false)} className='bg-transparent hover:bg-[#28282B]/75 rounded-b-sm w-full h-full flex flex-col justify-end transition-all duration-300'>
                <div className='h-full p-4 flex flex-col justify-between'>
                  {ig ? <>
                    <p className='font-light text-slate-50'>Industry Golf is an annual celebrity charity golf tournament, created by the ESA Founders to establish who may be the best golfer(s)in the industry.</p>
                    <button className='p-1 px-2 text-black bg-slate-50 w-fit'>See More</button>
                  </>
                    : null}
                </div>
                <div className='p-2 bg-[#28282B]'>
                  <h1 className='font-semibold text-slate-200 rounded-sm'>Industry Golf</h1>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
      <footer className='h-fit py-6 sm:py-8 md:py-10 mt-20 small:mt-30 md:mt-40 border-t-2 border-[#312e36] w-full mx-auto flex flex-row justify-between'>
        <h4 className='text-slate-50 font-light text-sm md:text-base'>Copy Right © ESA 2022 </h4>
        <div>
          <div className='flex flex-row gap-4 text-slate-50 text-2xl items-center'>
            <Link href='#'><FontAwesomeIcon icon={faInstagram} className='text-base md:text-2xl' /></Link>
            <Link href='#'><FontAwesomeIcon icon={faTwitter} className='text-base md:text-2xl' /></Link>
            <Link href='#'><FontAwesomeIcon icon={faYoutube} className='text-base md:text-2xl' /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
