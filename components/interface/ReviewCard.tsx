import { Poppins } from "next/font/google";
import Image from "next/image";
import classnames from "classnames";

import { Qoute } from "@/components/icons";
import { Review } from "@/types";

interface ReviewCardProps extends Review {
  className?: string
}

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

const ReviewCard: React.FC<ReviewCardProps> = ({ className, imageUrl, name, role, comment }) => {
  return (
    <div className={classnames(
      className,
      "group flex flex-col bg-low/10 hover:bg-card/20 border-[1.5px] border-card hover:border-darkBlue py-2.5 px-2.5 lg:px-4 rounded-lg"
    )}>
      <Qoute className="w-6 lg:w-8 text-highBlue group-hover:text-primary" />
      <div className={classnames(poppins.className, "my-2 lg:my-3 text-dark/85 group-hover:text-dark text-lg text-start font-medium line-clamp-6")}>
        {comment}
      </div>
      <div className="mt-auto flex items-center space-x-2">
        <div className="w-8 h-8 lg:w-9 lg:h-9 bg-card flex-none rounded-full">
          <Image
            className="rounded-full"
            alt={name}
            src={`https://api.dicebear.com/8.x/adventurer/svg?seed=${imageUrl}`}
            width={40}
            height={40}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            priority
          />
        </div>
        <div className="text-start opacity-85 group-hover:opacity-100">
          <h6 className="text-sm text-overlay font-bold">{name}</h6>
          <p className="text-[0.625rem] text-grey font-medium uppercase">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;