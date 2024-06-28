import Image from 'next/image';

import { ContactButton } from '@/components/global';
import takeStepBg from "@/assets/takeStep.png";

const TakeStep = () => {
  return (
    <section className="pb-12 lg:pb-24 bg-stepBg">
      <div className="mx-auto w-full max-w-[72rem] flex flex-col lg:flex-row items-center">
        <div className='max-w-[35.25rem] bg-card h-auto mb-6 lg:mb-0'>
          <Image
            alt="about us"
            src={takeStepBg}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            priority
          />
        </div>
        <div className="px-6 lg:px-0 lg:mx-6 w-full max-w-[35.25rem]">
          <h3 className="text-[2rem] lg:text-5xl text-white font-bold leading-[38.4px] lg:leading-[57.6px]">
            Ready to take a step into your IT success today?
          </h3>
          <p className="mt-2 mb-4 text-base text-white/60 leading-[30px]">
            Equip yourself and your team with the skills and knowledge to thrive in the IT landscape.
          </p>
          <ContactButton />
        </div>
      </div>
    </section>
  )
}

export default TakeStep;