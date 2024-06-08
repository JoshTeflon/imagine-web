import Image from 'next/image';

import { Button } from '@/components/interface';
import homeBg from '@/assets/homeBg.png';

const Landing: React.FC = () => {
  return (
    <div className="relative w-full h-screen max-h-[40rem]">
      <Image
        className="absolute top-0 left-0 right-0 bottom-0 z-0"
        alt="home background"
        src={homeBg}
        sizes="100vw"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        priority
      />
      <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 z-10 bg-[#243754]/50"></div>
      <div className="relative z-20 mx-auto pt-[11.5rem] px-6 lg:px-8 max-w-[68rem] h-full text-center">
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[4rem] text-white font-bold leading-[38.4px] md:leading-[57.6px] lg:leading-[76.8px]">
          All-in-One IT Training, Consulting & Certification Solutions
        </h1>
        <p className='mt-4 mb-8 text-base lg:text-2xl text-low leading-[19px] lg:leading-10'>
          We are dedicated to Empowering Individuals Businesses & Professionals to olve Business Challenges & Achieve Success
        </p>
        <Button>Contact us</Button>
      </div>
    </div>
  )
}

export default Landing;