import { SkillCard } from "@/components/interface";
import { skills } from "@/lib";
import { Skill } from "@/types";

const ProfessionalSkills: React.FC = () => {
  return (
    <section className="w-full mb-12 lg:mb-24">
      <div className="px-6 lg:px-0 mx-auto w-full lg:max-w-[72rem]">
        <h2 className="mb-6 lg:mb-8 text-2xl lg:text-[2rem] text-secondary font-bold text-center leading-[28.8px] lg:leading-[38.4px]">
          Our Professional Skills
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-4 md:gap-y-8 md:gap-x-6"
        >
          {
            skills?.map((skill: Skill) => (
              <SkillCard
                key={skill?.skill}
                {...skill}
              />
            )) 
          }
        </div>
      </div>
    </section>
  )
}

export default ProfessionalSkills;