'use client'
import { useState } from 'react';
import Location from '../../../../public/location.svg';
import { setSearch } from "@/redux/slice/propertySlice";
import { useAppDispatch } from "@/redux/store";

// ---------------------------------------------------

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [searchData, setSearchData] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchData(e.target.value);
        dispatch(setSearch(e.target.value));
    }

    return (
        <div className='[ h-10 w-full max-w-[500px] lg:max-w-[300px] ] [ p-4 ] [ flex items-center gap-1 ] [ border rounded-[4px] border-border-color ] shadow shadow-black/20 ' >
            <Location />
            <input value={searchData} onChange={(e) => handleSearch(e)} className='outline-0 w-full' placeholder='Bundesland, Ort oder Postleitzahl' />
        </div>
    )
}

export default SearchBar;