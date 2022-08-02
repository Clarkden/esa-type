/* eslint-disable */

import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {

    const router = useRouter()
    const [menuheight, setmenuheight] = useState('scale-y-0')

    return (
        <div className='w-11/12 mx-auto'>
            <Head>
                <title>Contact</title>
                <meta name="description" content="Get in Contact with ESA" />
                {/* <link rel="icon" href="/favicon.ico" /> */}
            </Head>
            <nav className='relative'>
                <div className="flex flex-row items-center justify-between py-5 border-b-2 border-[#312e36] text-slate-300">
                    <div className='flex flex-row items-center gap-3'>
                        <Link href="/"><Image src="/ESA-Word-Logo.png" className='h-8' width={70} height={32}></Image></Link>
                    </div>
                    <div className='hidden md:flex md:flex-row md:gap-5'>
                        <Link href="/"><span className='font-semibold text-sm hover:text-sky-500 transition-all'>Home</span></Link>
                        <Link href="#"><span className='font-semibold text-sm  hover:text-sky-500 transition-all'>Gallery</span></Link>
                        <Link href="/news"><span className='font-semibold text-sm hover:text-sky-500 transition-all'>News</span></Link>
                    </div>
                    <div className='flex flex-col gap-2 md:hidden group hover:cursor-pointer' onClick={() => { menuheight === 'scale-y-100' ? setmenuheight('scale-y-0') : setmenuheight('scale-y-100') }}>
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
                <div className="mx-auto gap-5 md:gap-0 py-10 sm:py-15 md:py-20 relative flex flex-col md:flex-row justify-around items-center h-fit ">
                    <div className='w-full md:w-2/6 border-2 border-[#312e36] rounded-md p-5 flex flex-col h-fit md:h-[70vh]'>
                        <h1 className='text-slate-50 tracking-tight font-extrabold text-4xl w-full pb-2 mb-3 border-b-2 border-[#312e36]'>Get Started With Us</h1>
                        <p className='text-slate-200'>We want to create the best relationships with our partners and community leaders to create a network of entertainment and sporting events that will empower the community. <br></br><br></br> Contact us to to begin discussing your partnership with us.</p>
                    </div>
                    <div className='border-2 border-[#312e36] text-slate-100 w-full md:w-3/5 rounded-md flex flex-row justify-between h-fit md:h-[70vh] px-2'>
                        <form className='flex flex-col items-left p-5 gap-2 w-full md:w-1/2'>
                            <h1 className='text-slate-50 tracking-tight font-extrabold text-4xl w-full pb-2 mb-3 border-b-2 border-[#312e36]'>Contact</h1>
                            <div className='flex flex-col'>
                                <label htmlFor='name' className='bg-transparent font-semibold'>Name</label>
                                <input type='text' id='name' name='name' placeholder='Your Name' className='rounded-md p-1 pl-2 bg-[#3a393b] outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='email' className='bg-transparent font-semibold'>Email</label>
                                <input type='text' id='email' name='email' placeholder='Your Email' className='rounded-md p-1 pl-2 bg-[#3a393b] outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='phone' className='bg-transparent font-semibold'>Phone Number</label>
                                <input type='text' id='phone' name='phone' placeholder='Your Phone Numer' className='rounded-md p-1 pl-2 bg-[#3a393b] outline-none' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='subject' className='bg-transparent font-semibold'>Subject</label>
                                <textarea id='subject' name='subject' placeholder='Your Subject' className='rounded-md p-1 pl-2 bg-[#3a393b] outline-none resize-none' />
                            </div>
                            <button className='w-full p-1 bg-green-300 rounded-lg text-slate-900 mt-5 mb-2'>Send</button>
                        </form>
                        <div className='h-[60vh] hidden md:block'>
                            <Image src="clipboard.png" layout='fill'></Image>
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
        </div >
    )
}
