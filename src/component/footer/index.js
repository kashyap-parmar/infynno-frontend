import YoutubeIcon from '../../../public/youtube.svg'

// ------------------------------------------------------

const Footer = () => {
    return (
        <div className='w-full p-4' >
            <div className='bg-secondary-color w-full flex flex-col rounded-[8px] px-4 py-12 md:px-8 lg:px-12 xl:p-16  2xl:p-32 text-white' >
                <div className='flex flex-col xl:flex-row gap-20 justify-between w-full border-b-2 pb-20 xl:pb-10 2xl:pb-20 mb-10' >
                    <div>
                        <div className='flex flex-col gap-6' >
                            <div className='flex flex-col' >
                                <p>Fylpi Immo-online GmbH </p>
                                <p>Forchheimergasse 3/13, 1230 Wien, Österreich</p>
                            </div>
                            <p>office@fylpi.at | www.fylpi.at</p>

                            <div className='flex gap-3 items-center' >
                                <span>
                                    <YoutubeIcon />
                                </span>
                                <p>YouTube</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-16 items-center xl:items-start justify-between w-full xl:w-[50%]' >
                        <ul className='flex flex-col gap-4 w-full ' >
                            <li>Über uns</li>
                            <li>Kontaktieren Sie uns</li>
                            <li>Mein Konto</li>
                            <li>Kaufen</li>
                            <li>Mieten</li>
                        </ul>
                        <ul className='flex flex-col gap-4 w-full ' >
                            <li>FAQ</li>
                            <li>Service rund um die Immobilie</li>
                            <li>Praktische Anleitungen</li>
                            <li>Wissen rund um die Immobilie</li>
                            <li>Beratungsdienste</li>
                        </ul>
                    </div>
                </div>
                <div className='flex flex-col-reverse sm:flex-row gap-8 justify-between opacity-[0.6]' >
                    <div>
                        <p>© 2024 Fylpi. Alle Rechte vorbehalten.</p>
                    </div>
                    <div className='flex gap-8 3xl:gap-12' >
                        <p>Impressum</p>
                        <p>Nutzungsbedingungen</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
