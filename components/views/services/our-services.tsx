import { ServiceCard } from "@/components/interface"
import { services } from "@/lib"
import { Service } from "@/types"

const OurServices: React.FC = () => {
  return (
    <section className="w-full pb-12 lg:pb-24">
      <div className="mb-[4.75rem] lg:mb-24 px-6 lg:px-0 mx-auto w-full max-w-[59.75rem] text-center">
        <h1 className="mb-6 text-[2rem] lg:text-[4rem] text-black font-bold leading-[38.4px] lg:leading-[76.8px]">
          Our services
        </h1>
        <p className="text-base lg:text-2xl text-serviceText font-medium leading-[26px] lg:leading-10">
          At Imagine Integrated System, we believe technology shouldn&apos;t be a hurdle, but a catalyst for growth. That&apos;s why we offer a comprehensive suite of IT services designed to empower individuals and businesses at all stages of their IT journey.
        </p>
      </div>
      <div
        className="mx-auto max-w-[72rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-4 md:gap-y-8 md:gap-x-6"
      >
        {
          services?.map((service: Service) => (
            <ServiceCard
              key={service?.title}
              src={service?.src}
              title={service?.title}
            />
          ))
        }
      </div>
    </section>
  )
}

export default OurServices;