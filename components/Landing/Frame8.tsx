import smallBackgroundVector from '../../assets/png/smallBackgroundVector.svg'

export default function Frame8() {

  return (
    <div 
        className="w-full h-auto frame8_bg"
        style={{ backgroundImage: `url(${smallBackgroundVector.src})` }}
    >
        <div className="opacity_bg xl:px-[120px] px-6 md:py-[160px] py-[100px]">
            <span className="block w-full">
                <h3 className={`spaceMonoFont not-italic max-w-[675px] h-auto 
                    font-bold text-left uppercase text-[#F2F2F2] tracking-tighter 
                    lg:text-7xl text-5xl pb-[50px]`}
                >
                    be part of <br /> our community
                </h3>
            </span>

            <div className="max-w-[586px] h-[55px] flex items-center border border-white border-solid">
                <input type="text" name="address" className='w-full h-full py-2 px-4 bg-inherit text-[#F2F2F2]' placeholder='Enter your address' />
                <button 
                    type="submit" 
                    className='placeholder:spaceMonoFont inline-block bg-[#F2F2F2] w-[65px] h-full font-normal text-[#111111] text-[20px] spaceMonoFont'
                >
                        OK
                </button>
            </div>
        </div>
    </div>
  )
}