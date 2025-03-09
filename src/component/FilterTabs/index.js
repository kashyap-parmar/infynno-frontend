'use client'
import MapIcon from '../../../public/map.svg'
import { useState } from 'react';
import { SearchBar, SelectOption } from '@/component';
import { useAppSelector } from '@/redux/store';
import { BuySelectList, FlächeSelectList, PriceSelectList, typeSelectList, ZimmerSelectList } from '@/staticData';

// ----------------------------------------------

const FilterTabs = () => {
    const [openTab, setOpenTab] = useState(false);
    const { type, category, price } = useAppSelector((state) => state.properyReducer);

    return (
        <div className='w-full xl:max-w-[1000px] 2xl:max-w-[1200px] 3xl:max-w-[1600px] flex flex-col gap-2 items-center lg:flex-row justify-between' >
            <SearchBar />
            <div className='flex flex-col lg:flex-row w-full lg:w-4/5 lg:flex gap-3 items-center justify-end lg:pl-4' >
                <SelectOption
                    type='type'
                    open={openTab === 'type'}
                    setOpenTab={setOpenTab}
                    data={BuySelectList}
                    defaultValue={type || ''}
                />
                <SelectOption
                    type='category'
                    open={openTab === 'category'}
                    setOpenTab={setOpenTab}
                    data={typeSelectList}
                    defaultValue={category || 'Typ'}

                />
                <SelectOption
                    type='price'
                    open={openTab === 'price'}
                    setOpenTab={setOpenTab}
                    data={PriceSelectList}
                    defaultValue={PriceSelectList[0]?.name}
                />
                <SelectOption
                    type='area'
                    open={openTab === 'area'}
                    setOpenTab={setOpenTab}
                    data={FlächeSelectList}
                    defaultValue={FlächeSelectList[0]?.name}
                />
                <SelectOption
                    type='room'
                    open={openTab === 'room'}
                    setOpenTab={setOpenTab}
                    data={ZimmerSelectList}
                    defaultValue={ZimmerSelectList[0]?.name}
                />
                <div className='w-full max-w-[500px] lg:w-fit min-h-10 border rounded-[4px] [ border-border-color ] [ shadow shadow-black/20 ] p-2' >
                    <MapIcon />
                </div>
            </div>
        </div>
    )
}

export default FilterTabs;