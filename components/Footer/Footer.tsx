import Image from 'next/image'
import Link from 'next/link'
import HeaderAsset from '../../assets/png/Header_asset.png' 



export default function Footer() {
    return (
      <div className="bg-[#121212] w-full h-auto xl:px-[120px] px-6 pt-[24px] pb-[34px]">
  
          <div className="w-full flex sm:flex-row flex-col items-start gap-10">
                <span className="block sm:w-1/3 w-full grow">
                    <span className="w-[104px] block">
                        <Link href='#' legacyBehavior>
                            <a>
                                <Image src={HeaderAsset} alt="" className='w-full h-full' />
                            </a>
                        </Link>
                    </span>
  
                    <p className="spaceMonoFont font-normal not-italic text-[#F2F2F2] text-base mt-[16px] mb-[77px]">
                        info@baa.daye
                    </p>

                    <span className="block flex items-center justify-start gap-2.5">
                        <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >FACEBOOK</a>
                        <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >INSTAGRAM</a>
                        <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >TWITTER</a>
                    </span>
                </span>
  
                <span className="block sm:w-1/3 w-full grow">
                    <span className="w-auto gap-2.5 flex flex-col items-start justify-start block">
                        <Link href='#shop' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >Shop</a>
                        </Link>
                        <Link href='#about' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >About</a>
                        </Link>
                        <Link href='#contact' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >Contacts</a>
                        </Link>
                    </span>
                </span>
  
                <span className="block sm:w-1/3 w-full grow">
                    <span className="w-auto gap-2.5 flex flex-col items-start justify-start block">
                        <Link href='#' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >Track your order</a>
                        </Link>
                        <Link href='#' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >Shipping & Refunds</a>
                        </Link>
                        <Link href='#' legacyBehavior>
                            <a className="not-italic font-semibold text-base leading-[22px] text-left text-[#F3F3F3] cursor-pointer" >Frequently asked questions</a>
                        </Link>
                    </span>
                </span>
          </div>
      </div>
    )
  }