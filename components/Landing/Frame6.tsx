import Image from 'next/image'
import showNowIcon from '../../assets/png/showNow_icon.png'
import rewardProgram from '../../assets/png/rewardProgram.png'
import Link from 'next/link'



export default function Frame6() {
  return (
    <div className="bg-[#1E1E1E] w-full h-auto xl:px-[120px] px-6 md:py-[150px] py-[100px] gap-5">
        <span className="block w-full">
            <h3 className={`spaceMonoFont not-italic max-w-[777px] h-auto 
                font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                lg:text-7xl text-5xl pb-[50px]`}
            >
                JOIN OUR <br /> REWARDS PROGRAM
            </h3>
        </span>

        <div className="w-full flex sm:flex-row flex-col justify-center items-start gap-5">
            <span className="block sm:w-2/4 w-full grow">
                <h3 className="text-[#F2F2F2] text-base lg:mb-[100px] mb-[50px] md:pl-[40px] pl-0">
                    Sign up for our reward program and earn points with every purchase, 
                    which can be redeemed for exclusive discounts and special offers. 
                    As a member, you will also receive access to insider promotions 
                    and early access to new products.
                </h3>
                
                <Link href='#' legacyBehavior>
                    <a>
                        <span className="block max-w-full flex items-center justify-start gap-5">
                            <h3 className="spaceMonoFont not-italic font-normal text-[#F3F3F3] text-[20px]">Learn more</h3>

                            <Image src={showNowIcon} alt="" className='xl:w-[153.69px] w-[100px] h-auto' />
                        </span>
                    </a>
                </Link>
            </span>

            <span className="block sm:w-2/4 w-full grow">
                <Image src={rewardProgram} alt="" className='w-full h-auto' />
            </span>
        </div>
    </div>
  )
}