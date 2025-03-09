'use client'
import { useState } from 'react'
import { CommonChild, PriceRange, AreaRange, RoomRange } from '@/component';
import { setCategory, setType } from "@/redux/slice/propertySlice";
import { useAppDispatch } from "@/redux/store";
import ArrowIcon from '../../../../public/arrow.svg'

// ----------------------------------------------

const SelectOptions = ({ data, defaultValue, type, open, setOpenTab }) => {
    const [selectedOption, setSelectedOption] = useState(defaultValue);
    const dispatch = useAppDispatch();

    const handleSelection = (e, val) => {
        e.stopPropagation();
        setSelectedOption(val);
        if (type === 'type') {
            dispatch(setType(val));
        } else if (type === 'category' && val !== 'Typ') {
            dispatch(setCategory(val));
        }
        if (val === 'Typ') {
            dispatch(setCategory(''));
        }
    }

    const handleTabs = (e) => {
        e.stopPropagation();
        if (open) {
            setOpenTab(false)
        } else {
            setOpenTab(type)
        }
    }

    return (
        <div onClick={handleTabs} className="[ h-fit w-full max-w-[500px] lg:max-w-[110px] min-h-10 ] flex flex-col relative">
            <div className='flex  justify-between [ border rounded-[4px] border-border-color ] [ p-2 ] [ shadow-2xl shadow-black/20 ] relative cursor-pointer overflow-hidden' >
                <div className='w-[120px] overflow-hidden' >{selectedOption}</div>
                <ArrowIcon className={`${open ? '-rotate-90' : 'rotate-90'}`} />
            </div>
            {open && (type === 'price' ?
                <PriceRange /> :
                type === 'area' ?
                    <AreaRange />
                    :
                    type === "room" ?
                        <RoomRange />
                        :
                        <CommonChild
                            key={type}
                            data={data}
                            handleSelection={handleSelection}
                            selectedOption={selectedOption}
                        />
            )}
        </div>

    )
}

export default SelectOptions;