import Image from 'next/image';
import classnames from 'classnames';

import { Service } from '@/types';

export interface ServiceCardProps extends Service {
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ src, title, body, className }) => {
  return (
    <div
      className={classnames(className, "relative w-full max-w-[23rem] min-h-[23.125rem] rounded-xl shadow-serviceCard hover:shadow-hoverServiceCard")}
    >
      <div className="absolute top-0 left-0 right-0 w-full min-h-[11.375rem] bg-card rounded-xl">
        <Image
          alt={title}
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 xl:py-6 2xl:py-0 px-6 w-full min-h-[13.5rem] bg-white flex items-center justify-center rounded-xl"
      >
        <div>
          <h4 className="mb-3 text-base text-black font-black leading-[19.2px]">
            {title}
          </h4>
          <p className="text-base text-black/50 font-medium">
            {body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ServiceCard;