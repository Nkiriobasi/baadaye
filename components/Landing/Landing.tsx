import Frame1 from './Frame1'
import Frame2 from './Frame2'
import Frame3 from './Frame3'
import Frame4 from './Frame4'
import Frame5 from './Frame5'
import Frame6 from './Frame6'
import Frame7 from './Frame7'
import Frame8 from './Frame8'
import Footer from '../Footer/Footer'
import backgroundVector from '../../assets/png/backgroundVector.svg'
import Image from 'next/image'



export default function Landing() {
  return (
    <div className='bg-[#1E1E1E]'>
      <Frame1 />

      <div className="relative">
        <Frame2 />
        <Frame3 />
        <Frame4 />
        <Frame5 />
        <Frame6 />
        <Frame7 />
        <Frame8 />
        <Footer />

        {/* <Image src={backgroundVector} alt='' className='fill-black z-0 absolute top-80 left-0' /> */}
      </div>
    </div>
  )
}
