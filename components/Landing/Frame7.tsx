import Image from 'next/image'
import Link from 'next/link'
import showNowIcon from '../../assets/png/showNow_icon.png'
import visitUs from '../../assets/png/visitUs.png'



export default function Frame7() {
  return (
    <div className="bg-[#121212] w-full h-auto xl:px-[120px] px-6 py-[40px] gap-5">
        <span className="block w-full">
            <h3 className={`spaceMonoFont not-italic max-w-[777px] h-auto 
                font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                lg:text-7xl text-5xl pb-[50px]`}
            >
                VISIT US IN <br /> A STORE NEAR YOU
            </h3>
        </span>

        <div className="w-full flex sm:flex-row flex-col justify-center items-start gap-5">
            <span className="block sm:w-2/4 w-full grow">
                <Image src={visitUs} alt="" className='w-full h-auto' />
            </span>

            <span className="block sm:w-2/4 w-full grow">
                <h3 className="text-[#F2F2F2] text-base lg:mb-[100px] mb-[50px]">
                    Come visit us in person at one of our conveniently located stores to see 
                    our products up close and receive personalized assistance from our knowledgeable 
                    staff. Our friendly team is dedicated to providing exceptional service and helping 
                    you find the perfect product to meet your needs.
                </h3>
                
                <Link href='#' legacyBehavior>
                    <a>
                        <span className="block max-w-full flex items-center justify-start gap-5">
                            <h3 className="spaceMonoFont not-italic font-normal text-[#F3F3F3] text-[20px]">Find store</h3>

                            <Image src={showNowIcon} alt="" className='xl:w-[153.69px] w-[100px] h-auto' />
                        </span>
                    </a>
                </Link>
            </span>
        </div>
    </div>
  )
}