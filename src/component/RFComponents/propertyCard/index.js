import TruncateText from '@/component/truncate';
import Image from 'next/image';
import EyeIcon from '../../../../public/eye.svg'
import HeartIcon from '../../../../public/heart.svg'
import { PropertyImg } from '../../../../public/img';

// ----------------------------------------------------------------

const PropertyCard = ({ data }) => {
    return (
        <div className='w-full max-w-[400px] 2xl:max-w-[368px] 3xl:max-w-[364px] rounded-[8px] overflow-hidden relative' >
            <HeartIcon className="absolute top-4 right-4 z-10 text-white " />
            <div className='z-0' >
                <Image
                    src={PropertyImg}
                    width={360}
                    height={240}
                    className="!w-full h-auto"
                    alt='PropertyImg'
                />
            </div>
            <div className='py-5 px-6 bg-primary-bg-color flex flex-col justify-end gap-4' >
                <div className='font-bold uppercase text-base 2xl:' >
                    <TruncateText text={data?.title} length={45} />
                </div>
                <div className='text-xs' >
                    <div className='flex'>
                        <p className='mr-1' >ID: {data?.ID || ''} | {data?.category || ''} |</p>
                        <TruncateText text={data?.address} length={30} />
                    </div>
                    <p>{data?.room || ''} Zimmer | {data?.bathroom || ''} Bad | {data?.area || ''} m² | {data?.type || ''}</p>
                </div>
                <div className='flex justify-between' >
                    <p className='text-2xl font-medium' >{data?.price || ''} €</p>
                    <div className='flex items-center gap-2' >
                        <span className='text-base text-border-color font-normal' >{data?.viewer || ''}</span>
                        <span>
                            <EyeIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard;
