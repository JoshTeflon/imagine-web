import { Landing, About, Services } from "@/components/views/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Landing />
      <div className="width-balance my-12 lg:my-24 w-[95%] lg:w-4/5">
        <About />
        <Services />
      </div>
    </main>
  );
}
