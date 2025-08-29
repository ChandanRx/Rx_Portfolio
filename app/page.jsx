import About from "@/components/About";
import Blogs from "@/components/Blogs";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";


export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Work/>
      <Blogs/>
      <Cta/>
    </main>
  );
}
