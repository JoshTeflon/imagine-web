import { AboutUs, OurGallery, ProfessionalSkills } from "@/components/views/about";

export default function About() {
  return (
    <main className="min-h-screen mt-[6.125rem] lg:mt-[11rem]">
      <AboutUs />
      <ProfessionalSkills />
      <OurGallery />
    </main>
  );
}
