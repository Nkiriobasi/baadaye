import Image from 'next/image'
import Link from 'next/link'
import HeaderAsset from '../../assets/png/Header_asset.png' 
import Heart from '../../assets/png/heart.png' 
import Search from '../../assets/png/search.png' 
import Vector from '../../assets/png/Vector.png' 

export default function Navbar() {
  return (
    <div className="pt-[36px] max-w-[1196px] h-auto mx-auto flex items-center justify-between inline-block display_none">
      <span className="w-[254px] gap-5 flex items-center justify-center inline-block">
        <Link href='#shop' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer p-[10px]" >Shop</a>
        </Link>
        <Link href='#about' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer p-[10px]" >About</a>
        </Link>
        <Link href='#contact' legacyBehavior>
          <a className="not-italic font-semibold text-base leading-[22px] text-center text-[#F3F3F3] cursor-pointer p-[10px]" >Contacts</a>
        </Link>
      </span>

      <span className="w-[104px] inline-block">
        <Link href='#' legacyBehavior>
          <a>
            <Image src={HeaderAsset} alt="" className='w-full h-full' />
          </a>
        </Link>
      </span>

      <span className="w-[128px] flex items-center justify-center inline-block">
        <Image src={Search} alt="" className='w-full h-full cursor-pointer p-[10px]' />
        <Image src={Vector} alt="" className='w-full h-full cursor-pointer p-[10px]' />
        <Image src={Heart} alt="" className='w-full h-full cursor-pointer p-[10px]' />
      </span>
    </div>
  )
}
