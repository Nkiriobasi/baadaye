import Navbar from "../Navbar/Navbar";
import Image from 'next/image'
import showNowIcon from '../../assets/png/showNow_icon.png'
import Link from "next/link";
import Header_image from '../../assets/png/Header_image.png'


export default function Frame1() {
    // <style jsx>{`
    //   .frame1_bg {
    //     position: relative;
    //     background-position: center center;
    //     background-repeat: no-repeat;
    //     background-size: cover;
    //     background-image: url(${Header_image});
    //   }
    // `}
    // </style>

  return (
    <div 
      className="frame1_bg w-full h-auto xl:px-0 px-6"
      style={{ backgroundImage: `url(${Header_image.src})` }}
    >
      <Navbar />

      <span className="block w-full pb-[100px] pt-40">
        <h3 className={`spaceMonoFont not-italic max-w-[470px] h-auto 
          mx-auto font-bold text-center uppercase text-[#F3F3F3] tracking-tighter lg:text-7xl sm:text-6xl text-5xl`}
        >
          Embrace a Positive Future
        </h3>
      </span>

      <div className="w-full pb-[60px]">
        <Link href='#' legacyBehavior>
          <a>
            <span className="block max-w-full mx-auto flex items-center justify-center gap-5">
              <h3 className="spaceMonoFont not-italic font-normal text-[#F3F3F3] text-[20px]">Show Now</h3>

              <Image src={showNowIcon} alt="" className='xl:w-[153.69px] w-[100px] h-auto' />
            </span>
          </a>
        </Link>
      </div>
    </div>
  )
}