'use client'
import React, { useState } from 'react'
import { setMaxArea, setMinArea } from "@/redux/slice/propertySlice";
import { useAppDispatch } from "@/redux/store";

// -----------------------------------------------------------------------------

const AreaRange = () => {
    const dispatch = useAppDispatch();
    const [minVal, setMin] = useState('');
    const [maxVal, setMax] = useState('');

    const handleSelection = (type, e) => {
        e.stopPropagation();
        const value = e.target.value;

        if (/^\d*\.?\d*$/.test(value)) {
            if (type === 'min') {
                dispatch(setMinArea(value));
                setMin(value);
            } else {
                dispatch(setMaxArea(value))
                setMax(value);
            }
        }
    };

    return (
        <div className='[ lg:absolute z-50 top-12 left-0 ] bg-white flex gap-2 rounded-[4px] pt-2'>
            <div className='w-[100px] h-10 bg-white flex items-center border border-border-color rounded-[4px] px-2' >
                <input
                    type='string'
                    value={minVal}
                    onChange={(e) => handleSelection('min', e)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full outline-0"
                    placeholder='von'
                />
                <p className='text-border-color'>m²</p>
            </div>
            <div className='w-[100px] h-10  bg-white flex items-center border border-border-color rounded-[4px] px-2' >
                <input
                    type='string'
                    value={maxVal}
                    onChange={(e) => handleSelection('max', e)}
                    onClick={(e) => e.stopPropagation()}
                    className="w-full outline-0"
                    placeholder='bis'
                />
                <p className='text-border-color'>m²</p>
            </div>
        </div>
    )
}

export default AreaRange;
