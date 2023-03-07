import Image from 'next/image'
import showNowIcon from '../../assets/png/showNow_icon.png'
import toteCap from '../../assets/png/tote&CapCombo.png'
import surpriseBox from '../../assets/png/surpriseBox.png'
import unrestrictedCombo from '../../assets/png/unrestrictedCombo.png'
import waterBottle from '../../assets/png/waterBottle.png'
import Link from 'next/link'



export default function Frame3() {
  return (
    <div className="bg-[#121212] w-full h-auto xl:px-[120px] px-6 pb-[40px] z-30">
        <span className="block w-full">
            <h3 className={`spaceMonoFont not-italic max-w-[470px] h-auto 
                font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                lg:text-7xl text-5xl py-[50px]`}
            >
                statement makers
            </h3>
        </span>

        <div className="w-full flex sm:flex-row flex-col items-start gap-5">
            <div className="sm:w-1/3 w-full grow">
                <span className="block max-w-full">
                    <Image src={surpriseBox} alt="" className='w-full h-auto mb-[18px]' />

                    <span className="mb-[40px] flex justify-between items-center">
                        <h3 className="spaceMonoFont uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            surprise box
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n20,000
                        </h3>
                    </span>
                </span>

                <span className="block max-w-full">
                    <Image src={waterBottle} alt="" className='w-full h-auto mb-[18px]' />

                    <span className="flex justify-between items-center">
                        <h3 className="spaceMonoFont uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            water bottle
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n5,000
                        </h3>
                    </span>
                </span>
            </div>
            
            <div className="lg:w-2/3 sm:w-1/3 w-full flex lg:flex-row flex-col items-start gap-5 grow">
                <span className="block w-full lg:mb-0 mb-[40px]">
                    <Image src={toteCap} alt="" className='w-full h-auto mb-[18px]' />

                    <span className="flex justify-between items-start">
                        <h3 className="spaceMonoFont max-w-[160px] uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            tote & cap combo
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n14,000
                        </h3>
                    </span>
                </span>


                <span className="block w-full flex flex-col justify-end">
                    <span className="block max-w-full mb-[99px]">
                        <Image src={unrestrictedCombo} alt="" className='w-full h-auto mb-[18px]' />

                        <span className="flex justify-between items-start">
                            <h3 className="spaceMonoFont max-w-[200px] uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                                unrestricted combo
                            </h3>

                            <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                                n14,000
                            </h3>
                        </span>
                    </span>
                    
                    <Link href='#' legacyBehavior>
                        <a>
                            <span className="block max-w-full flex items-center justify-end gap-5">
                                <h3 className="spaceMonoFont not-italic font-normal text-[#F3F3F3] text-[20px]">View Others</h3>

                                <Image src={showNowIcon} alt="" className='xl:w-[153.69px] w-[100px] h-auto' />
                            </span>
                        </a>
                    </Link>
                </span>
            </div>
        </div>
    </div>
  )
}