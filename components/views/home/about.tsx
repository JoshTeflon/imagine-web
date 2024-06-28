import Link from 'next/link';
import Image from 'next/image';

import { Button } from "@/components/interface";
import { ContactButton } from '@/components/global';
import { aboutDetails } from '@/lib';
import { AboutDetails } from '@/types';
import homeAbout from '@/assets/homeAbout.png';

const About: React.FC = () => {
  return (
    <section className='pb-12 lg:pb-24 px-2 lg:px-0'>
      <div className="mb-6 lg:mb-12 flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full lg:max-w-[30rem] mb-4 lg:mb-0">
          <h2 className="mb-4 text-base font-black text-secondary">About us</h2>
          <p className="text-base text-black/50 font-medium leading-6">
            {`${"We're passionate about helping individuals and businesses achieve their full potential in the ever-evolving IT landscape."}`}
          </p>
        </div>
        <ContactButton />
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-full lg:max-w-[30.375rem] space-y-6">
          {
            aboutDetails?.map((details: AboutDetails) => (
              <div
                key={details.header}
                className="group py-4 px-6 text-base border-l-2 border-grey hover:border-primary"
              >
                <h3 className="mb-2 text-dark font-medium">{details?.header}</h3>
                <p className="text-grey leading-6">{details?.paragraph}</p>
                <Button
                  variant="link"
                  className="mt-4 lg:mt-8 text-grey group-hover:text-primary border-b border-current"
                >
                  <Link
                    href={details.href}
                    aria-label={`Read more on ${details?.header}`}
                  >
                    Read more
                  </Link>
                </Button>
              </div>
            ))
          }
        </div>
        <div className='max-w-[40rem] lg:max-w-[30rem] xl:max-w-[40rem] h-auto mb-6 lg:mb-0 rounded-xl'>
          <Image
            alt="about us"
            src={homeAbout}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '12px'
            }}
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default About;