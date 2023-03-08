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


export default function Landing() {

  return (
    <div className='bg-[#1E1E1E]'>
      <Frame1 />

      <div 
        className="w-full h-auto frames_bg_np_sm_wwr frames_bg"
        style={{ backgroundImage: `url(${backgroundVector.src})` }}
      >
        <Frame2 />
        <Frame3 />

        <div 
          className="frames_bg_wwr__jorp frames_bg"
          style={{ backgroundImage: `url(${backgroundVector.src})` }}
        >
          <Frame4 />
          <Frame5 />

          <div 
            className="frames_bg_jorp_vuiasnu frames_bg"
            style={{ backgroundImage: `url(${backgroundVector.src})` }}
          >
            <Frame6 />
            <Frame7 />
            <Frame8 />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
