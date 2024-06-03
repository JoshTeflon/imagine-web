import Image from 'next/image';
import classnames from 'classnames';

import { Service } from '@/types';

export interface ServiceCardProps extends Service {
  className?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ src, title, className }) => {
  return (
    <div className={classnames(className, "w-full max-w-[21.375rem] md:max-w-[16.875rem]")}>
      <div className="mx-auto max-w-[16.875rem] w-full h-[13.5rem] rounded-t-2xl">
        <Image
          className="rounded-t-2xl"
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
      <div className="py-4 px-6 w-full min-h-[5.75rem] md:bg-white text-center border-t border-grey/40 md:rounded-b-2xl">
        <span className="text-xl text-black font-semibold">
          {title}
        </span>
      </div>
    </div>
  )
}

export default ServiceCard;