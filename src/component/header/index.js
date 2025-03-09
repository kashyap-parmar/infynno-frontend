'use client'
import { useState } from 'react'
import Hamburger from '../../../public/hamburger.svg'
import Cross from '../../../public/cross.svg'

// ---------------------------------------------------------

const Header = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='w-full [ flex justify-center ] [ shadow-black/20 ] [ pt-12 lg:pt-16 pb-2 ] ' >
            <div className='w-full max-w-[500px] lg:max-w-[900px] xl:max-w-[1000px] 2xl:max-w-[1200px] 3xl:max-w-[1600px] [ flex justify-between ]' >
                <div className='px-4 sm:px-0' >
                    <p className='uppercase tracking-wider font-semibold' >Immobilien Suche</p>
                </div>
                <div onClick={() => setOpen(true)} className='block lg:hidden px-4 sm:px-0' >
                    <Hamburger />
                </div>
                <div className={`${open ? 'h-fit p-4 ' : 'h-0'} lg:hidden fixed left-0 top-0 z-50 bg-white w-full flex items-end flex-col overflow-hidden shadow-2xl shadow-black/20 `} >
                    <Cross onClick={() => setOpen(false)} />
                    <ul className='flex flex-col items-center gap-7 [&>li]:font-normal  w-full' >
                        <li>Kaufen</li>
                        <li>Mieten</li>
                        <li>Inserat schalten</li>
                        <li className='px-4 py-2 bg-primary-color rounded-[4px] text-white ' >Sign in</li>
                        <li>ENG</li>
                    </ul>
                </div>
                <div className='hidden lg:block' >
                    <ul className='flex items-center gap-7 [&>li]:font-normal  ' >
                        <li>Kaufen</li>
                        <li>Mieten</li>
                        <li>Inserat schalten</li>
                        <li className='px-4 py-2 bg-primary-color rounded-[4px] text-white ' >Sign in</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;