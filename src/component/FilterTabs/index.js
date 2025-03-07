'use client'
import { SearchBar, SelectOption } from '@/component';
import { BuySelectList } from '@/staticData';

// ----------------------------------------------

const FilterTabs = () => {
    return (
        <div className='w-full max-w-[1600px] flex gap-4' >
            <SearchBar />
            <SelectOption
                data={BuySelectList}
                defaultValue={BuySelectList[0]?.name}
            />
        </div>
    )
}

export default FilterTabs;