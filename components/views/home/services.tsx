import { Poppins } from "next/font/google";
import classnames from "classnames";

import { TrainingCard } from "@/components/interface";
import { trainings } from "@/lib";
import { Training } from "@/types";

const poppins = Poppins({ weight: ["500"], subsets: ["latin"] });

const Services: React.FC = () => {
  return (
    <section className="pb-12 lg:pb-24 w-full">
      <div className="mx-auto w-full lg:max-w-[47rem] mb-6 lg:mb-12 text-center">
        <h2 className="mb-4 text-base font-black text-secondary">Our services</h2>
        <p className={classnames(poppins.className, 'text-base text-black/50 font-medium leading-6')}>
          We offer a comprehensive suite of IT solutions from entry-level certifications to advanced technical training to empower your success.
        </p>
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center gap-y-4 md:gap-y-8 md:gap-x-6"
      >
        {
          trainings?.map((training: Training) => (
            <TrainingCard
              key={training?.title}
              {...training}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Services;