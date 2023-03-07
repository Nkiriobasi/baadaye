import Image from 'next/image'
import Link from 'next/link'
import HeaderAsset from '../../assets/png/Header_asset.png' 
import Heart from '../../assets/png/heart.png' 
import Search from '../../assets/png/search.png' 
import Vector from '../../assets/png/Vector.png' 

export default function Navbar() {
  return (
    <div className="pt-[36px] pb-40 max-w-[1196px] h-auto mx-auto flex items-center justify-between">
      <span className="w-[254px] p-[10px] gap-10 flex items-center justify-center block">
        <Link href='#shop' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer" >Shop</a>
        </Link>
        <Link href='#about' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer" >About</a>
        </Link>
        <Link href='#contact' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer" >Contacts</a>
        </Link>
      </span>

      <span className="w-[104px] block">
        <Link href='#' legacyBehavior>
          <a>
            <Image src={HeaderAsset} alt="" className='w-full h-full' />
          </a>
        </Link>
      </span>

      <span className="w-[128px] p-[10px] gap-5 flex items-center justify-center block">
        <Image src={Search} alt="" className='w-full h-full cursor-pointer' />
        <Image src={Vector} alt="" className='w-full h-full cursor-pointer' />
        <Image src={Heart} alt="" className='w-full h-full cursor-pointer' />
      </span>
    </div>
  )
}
