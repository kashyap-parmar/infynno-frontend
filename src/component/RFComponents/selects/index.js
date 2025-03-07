'use client'
import React, { useState } from 'react'

// ----------------------------------------------

const SelectOptions = ({ data, defaultValue }) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(defaultValue);

    const handleSelection = (e, val) => {
        e.stopPropagation();
        setSelectedOption(val);
    }

    return (
        <div onClick={() => setOpen(!open)} className='[ w-full max-w-[130px] h-10 ] border rounded-[4px] border-[#748790]  [ shadow shadow-black/20 ] relative cursor-pointer' >
            {open &&
                <div className='absolute -bottom-24 left-0 h-fit flex flex-col rounded-[4px] overflow-hidden' >
                    {data?.map((el) => (
                        <span
                            key={el?.id}
                            className={`w-[200px] px-4 py-2 ${el?.name === selectedOption && 'bg-[#748790] text-white'}`}
                            onClick={(e) => handleSelection(e, el?.name)}
                        >
                            {el.name || ''}
                        </span>
                    ))}
                </div>}
        </div>
    )
}

export default SelectOptions;