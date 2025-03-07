'use client'

// ---------------------------------------------------------

const Header = () => {
    return (
        <div className='w-full [ flex justify-center ] [ border border-red-600 ] [ pt-16 pb-2 ] ' >
            <div className='w-full max-w-[1600px] [ flex justify-between ]' >
                <div>
                    <p className='uppercase tracking-wider font-semibold' >Immobilien Suche</p>
                </div>
                <div>
                    <ul className='flex items-center gap-7 [&>li]:font-normal  ' >
                        <li>Kaufen</li>
                        <li>Mieten</li>
                        <li>Inserat schalten</li>
                        <li className='px-4 py-2 bg-[#31393D] rounded-[4px] text-white ' >Sign in</li>
                        <li>ENG</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;