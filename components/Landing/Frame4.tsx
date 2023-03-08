import Image from 'next/image'
import Link from 'next/link'
import showNowIcon from '../../assets/png/showNow_icon.png'
import whoWeAre1 from '../../assets/png/whoWeAre1.png'
import whoWeAre2 from '../../assets/png/whoWeAre2.png'



export default function Frame4() {
  return (
    <div className="opacity_bg flex sm:flex-row flex-col justify-center items-start w-full h-auto xl:px-[120px] px-6 md:py-[150px] py-[100px] gap-5">
        <div className="grow w-full">
            <span className="block w-full">
                <h3 className={`spaceMonoFont not-italic lg:max-w-[300px] max-w-[200px] h-auto 
                    font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                    lg:text-7xl text-5xl pb-[40px]`}
                >
                    who we are
                </h3>
            </span>

            <span className="sm:pl-[40px] pl-0 pb-[40px] block">
                <h3 className="spaceMonoFont uppercase text-[#F2F2F2] mb-[16px] lg:text-2xl text-base font-normal max-w-[402.94px] h-auto">
                    CLOTHING COLLECTION WITH EMPHASIS ON “HOPE” AND “POSITIVITY”
                </h3>

                <p className="spaceMonoFont text-[#F2F2F2] font-normal lg:text-lg text-base max-w-[385px] h-auto">
                    We strive to empower our customers with the confidence to 
                    express their identity and aspirations through fashion.
                </p>
            </span>

            <span className="block w-full flex justify-end items-center md:pl-[125px] pl-0">
                <Image src={whoWeAre2} alt='' className='w-full h-auto' />
            </span>
        </div>

        <div className="grow w-full flex sm:flex-col flex-col-reverse">
            <span className="block w-full flex justify-end items-center">
                <Image src={whoWeAre1} alt='' className='w-full h-auto' />
            </span>

            <span className="md:pt-[40px] sm:pt-[25px] pt-[40px] sm:pl-[40px] pl-0 md:pb-[80px] sm:pb-[60px] pb-[40px] block">
                <h3 className="spaceMonoFont uppercase text-[#F2F2F2] mb-[16px] lg:text-2xl text-base font-normal max-w-[402.94px] h-auto">
                    we envision a future where African fashion is celebrated and embraced on a global scale
                </h3>

                <p className="spaceMonoFont text-[#F2F2F2] font-normal lg:text-lg text-base max-w-[385px] h-auto">
                    We aspire to be a leading brand that inspires hope and positivity through our designs, 
                    while also making a positive impact on the African fashion industry.
                </p>
            </span>
            
            <Link href='#' legacyBehavior>
                <a>
                    <span className="block max-w-full flex items-center justify-end gap-5 sm:mt-0 mt-[20px]">
                        <h3 className="spaceMonoFont not-italic font-normal text-[#F3F3F3] text-[20px]">Read more</h3>

                        <Image src={showNowIcon} alt="" className='xl:w-[153.69px] w-[100px] h-auto' />
                    </span>
                </a>
            </Link>
        </div>
    </div>
  )
}