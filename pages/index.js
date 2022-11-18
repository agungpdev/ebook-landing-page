import Head from "next/head";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Everyone from "@components/Everyone";
import Benefits from "@components/Benefits";
import Pricing from "@components/Pricing";
import Testimonials from "@components/Testimonials";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <>
      <header id="top">
        <section className="w-full bg-hero-pattern bg-no-repeat bg-cover pb-[200px] lg:pb-[0]">
          <div className="container mx-auto w-full">
            <Navbar />
          </div>
          <div className="container mx-auto w-full mt-[90px] pt-10 lg:pt-5">
            <Hero />
          </div>
        </section>
      </header>
      <main>
        <Everyone />
        <Benefits />
        <Pricing />
        <Testimonials />
      </main>
      <footer className="bg-primary rounded-tr-3xl">
        <Footer />
      </footer>
    </>
  );
}
