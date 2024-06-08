import { Landing, About, Services, Reviews } from "@/components/views/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <div className="width-balance my-12 lg:my-24 px-4 lg:px-0 w-full lg:w-4/5">
        <About />
        <Services />
        <Reviews />
      </div>
    </main>
  );
}
