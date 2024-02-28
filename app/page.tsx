import Banner from "@/components/Banner";
import Dreams from "@/components/Dreams";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-14">
      <Hero />
      <Services />
      <Dreams />
      <Banner />
    </main>
  );
}
