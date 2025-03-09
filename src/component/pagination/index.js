'use client'
import { useEffect, useState } from 'react';
import { setPage } from '@/redux/slice/propertySlice'
import { useAppDispatch } from "@/redux/store";
import ArrowIcon from '../../../public/arrow.svg';

// -------------------------------------------------------

const Pagination = () => {
    const dispatch = useAppDispatch();
    const [selectedPage, setSelectedPage] = useState(1);
    const arr = Array.from({ length: 5 }, (_, i) => i + 1);

    const handlePagination = (type, val) => {
        if (type === 'page') {
            setSelectedPage(val);
        } else if (type === 'next') {
            if (selectedPage < 5) {
                setSelectedPage(selectedPage + 1)
            } else {
                setSelectedPage(1);
            }
        } else {
            if (selectedPage > 1) {
                setSelectedPage(selectedPage - 1)
            } else {
                setSelectedPage(5);
            }
        }
    }

    useEffect(() => {
        dispatch(setPage(selectedPage))
    }, [selectedPage])

    return (
        <div className='flex  flex-col sm:flex-row gap-4 items-center' >
            <div onClick={() => handlePagination('prev')} className='flex gap-2 border-2 border-border-color p-2 rounded-[4px] cursor-pointer' >
                <ArrowIcon className="rotate-180" />
                <p>Zurück</p>
            </div>

            <ul className='flex gap-4 items-center [&>li]:px-4 [&>li]:py-2 [&>li]:border-2 [&>li]:rounded-[4px] [&>li]:border-border-color' >
                {arr?.map((el, i) => (
                    <li
                        key={i}
                        onClick={() => handlePagination('page', el)}
                        className={`${selectedPage === el ? "bg-primary-color text-white " : 'bg-white'} cursor-pointer `}
                    >
                        {el === 6 ? `${el}+` : el}
                    </li>
                ))}
            </ul>

            <div onClick={() => handlePagination('next')} className='flex gap-2 border-2 border-border-color p-2 rounded-[4px] cursor-pointer' >
                <ArrowIcon />
                <p>Weiter</p>
            </div>
        </div>
    )
}

export default Pagination;