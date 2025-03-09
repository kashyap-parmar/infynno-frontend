import React from 'react'

const CommonChild = ({ data, selectedOption, handleSelection }) => {
    return (
        <div className='[ lg:absolute z-50 top-12 left-0 ] [ h-fit w-full lg:w-fit ] [ flex flex-col ] [ shadow-2xl shadow-black/20 ] rounded-[4px] overflow-hidden bg-white' >
            {data?.map((el) => (
                <span
                    key={el?.id}
                    className={`px-4 py-2 ${el?.name === selectedOption && 'bg-border-color text-white'} cursor-pointer`}
                    onClick={(e) => handleSelection(e, el?.name)}
                >
                    {el.name || ''}
                </span>
            ))}
        </div>
    )
}

export default CommonChild;
