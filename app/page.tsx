import Banner from "@/components/Banner";
import Dreams from "@/components/Dreams";
import Hero from "@/components/Hero";
import HomeBuilds from "@/components/HomeBuilds";
import Project from "@/components/Project";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import CrewForm from "@/components/form/CrewForm";
import Form from "@/components/form/Form";

export default function Home() {
  return (
    <main className="flex flex-col gap-y-14">
      <Hero />
      <Services />
      <Dreams />
      <Banner />
      <Slider />
      <Project/>
      <CrewForm/>
      <HomeBuilds/>
    </main>
  );
}
