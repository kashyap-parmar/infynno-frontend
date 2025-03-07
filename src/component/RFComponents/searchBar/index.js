'use client'
import Location from '../../../../public/location.svg';

// ---------------------------------------------------

const SearchBar = () => {
    return (
        <div className='[ h-10 w-[400px] ] [ p-4 ] [ flex items-center gap-1 ] [ border rounded-[4px] border-[#748790] ] shadow shadow-black/20 ' >
            <Location />
            <input className='outline-0 w-full' placeholder='Bundesland, Ort oder Postleitzahl' />
        </div>
    )
}

export default SearchBar;