import Image from "next/image";

import { gallery } from "@/lib";
import { GalleryInterface } from "@/types";

const OurGallery: React.FC = () => {
  return (
    <section className="w-full mb-12 lg:mb-24">
      <div className="px-6 xl:px-0 mx-auto w-full lg:max-w-[72rem]">
        <h2 className="mb-6 lg:mb-8 text-2xl lg:text-[2rem] text-secondary font-bold text-center leading-[28.8px] lg:leading-[38.4px]">
          Our Gallery
        </h2>
        <div
          className="flex flex-wrap items-center justify-center gap-y-8 md:gap-x-[1.625rem]"
        >
          {
            gallery?.map((item: GalleryInterface, idx: number) => (
              <div
                key={item?.label ?? `gallery-${idx}`}
                className="max-w-[22.9rem] w-full h-[13.75rem] bg-card"
              >
                <Image
                  alt={item?.label ?? `gallery-${idx}`}
                  src={item.src}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  priority
                />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default OurGallery;