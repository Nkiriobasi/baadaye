import Image from 'next/image'
import showNowIcon from '../../assets/png/showNow_icon.png'
import checkersTees from '../../assets/png/checkers_tees.png'
import creativeTees from '../../assets/png/creative_tees.png'
import hoodie from '../../assets/png/hoodie.png'
import toteBag from '../../assets/png/tote_bag.png'



export default function Frame2() {
  return (
    <div className="opacity_bg xl:pl-[120px] pl-6 pb-[190px]">
        <span className="block w-full">
            <h3 className={`spaceMonoFont not-italic max-w-[470px] h-auto 
                font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                lg:text-7xl text-5xl py-[50px]`}
            >
                new products
            </h3>
        </span>

        <div className="w-full lg:h-[550px] h-full flex lg:flex-row flex-col justify-center items-start gap-5">
            <div className="lg:w-1/3 w-full h-full flex sm:flex-row flex-col items-start gap-5 grow lg:pr-0 pr-6">
                <span className="block w-full">
                    <Image src={checkersTees} alt="" className='w-full h-auto mb-[18px]' />

                    <span className="mb-[40px] flex justify-between items-start">
                        <h3 className="spaceMonoFont uppercase max-w-[100px] tracking-wide text-[#F2F2F2] text-base font-normal">
                            checkers tees
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n20,000
                        </h3>
                    </span>
                </span>

                <span className="block w-full h-full flex flex-col justify-end">
                    <Image src={toteBag} alt="" className='w-full md:h-[420px] h-auto mb-[18px] object-cover' />

                    <span className="flex justify-between items-center">
                        <h3 className="spaceMonoFont uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            tote bag
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n5,000
                        </h3>
                    </span>
                </span>
            </div>
            
            <div className="lg:w-1/3 w-full h-full flex sm:flex-row flex-col lg:items-end items-center gap-5 grow lg:pr-0 pr-6">
                <span className="block w-full lg:mb-0 mb-[40px]">
                    <Image src={creativeTees} alt="" className='w-full md:h-[420px] h-auto mb-[18px] object-cover' />

                    <span className="flex justify-between items-start">
                        <h3 className="spaceMonoFont max-w-[100px] uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            creative tees
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n20,000
                        </h3>
                    </span>
                </span>


                <span className="block w-full">
                    <Image src={hoodie} alt="" className='w-full h-[420px] mb-[18px] object-cover' />

                    <span className="flex justify-between items-start">
                        <h3 className="spaceMonoFont uppercase tracking-wide text-[#F2F2F2] text-base font-normal">
                            hoodie
                        </h3>

                        <h3 className="spaceMonoFont font-normal text-base uppercase text-[#F2F2F2]">
                            n14,000
                        </h3>
                    </span>
                </span>
            </div>
        </div>
    </div>
  )
}