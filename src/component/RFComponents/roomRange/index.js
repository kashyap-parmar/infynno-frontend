'use client'
import { useState } from "react";
import { setRoom } from "@/redux/slice/propertySlice";
import { useAppDispatch } from "@/redux/store";

// -------------------------------------------------------

const RoomRange = () => {
    const dispatch = useAppDispatch();
    const [selectedRoom, setSelectedRoom] = useState(1);
    const arr = Array.from({ length: 6 }, (_, i) => i + 1);

    const handleRoom = (e, val) => {
        e.stopPropagation();
        setSelectedRoom(val)
        dispatch(setRoom(val));
    }

    return (
        <div className='[ lg:absolute z-50 top-12 left-0 ] bg-white flex gap-2 rounded-[4px] pt-2' >
            <ul className="flex gap-2 [&>li]:px-4 [&>li]:py-2 [&>li]:rounded-[2px] [&>li]:border [&>li]:border-border-color [&>li]:flex [&>li]:cursor-pointer justify-center items-center" >
                {arr?.map((el, i) => (
                    <li
                        key={i}
                        onClick={(e) => handleRoom(e, el)}
                        className={`${selectedRoom === el ? "bg-border-color text-white " : 'bg-white'}`}
                    >
                        {el === 6 ? `${el}+` : el}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RoomRange;