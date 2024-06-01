import Image from 'next/image';
import classnames from 'classnames';

import { Skill } from '@/types';

export interface SkillCardProps extends Skill {
  className?: string
}

const SkillCard: React.FC<SkillCardProps> = ({ src, skill, className }) => {
  return (
    <div
      className={classnames(
        className,
        "group py-3 px-4 w-full max-w-[17rem] min-h-[4.5rem] flex items-center space-x-2.5 border border-low hover:border-highBlue/30 rounded-lg hover:shadow-hoverSkillCard"
      )}
    >
      <div className="w-[2.625rem] h-[2.625rem] flex-none rounded-full">
        <Image
          className="rounded-full"
          alt={skill}
          src={src}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          priority
        />
      </div>
      <div className="text-base text-grey font-medium grow group-hover:text-dark">
        <span>{skill}</span>
      </div>
    </div>
  )
}

export default SkillCard;