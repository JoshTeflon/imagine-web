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
    <div className={classnames(className, "group flex flex-col justify-center bg-low/10 hover:bg-card/20 border-[0.5px] border-card p-2.5 rounded-lg")}>
      <Qoute className="w-6 lg:w-8" />
      <div className={classnames(poppins.className, "my-2 lg:my-4 group-hover:text-dark text-xl text-start font-medium line-clamp-4")}>
        {comment}
      </div>
      <div className="flex items-center space-x-2">
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
        <div className="text-sm text-start hover:opacity-90">
          <h6 className="text-dark/80 font-bold">{name}</h6>
          <p className="text-grey font-medium">{role}</p>
        </div>
      </div>
    </div>
  )
}

export default ReviewCard;