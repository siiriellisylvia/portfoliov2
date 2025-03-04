import heroImage from "../assets/portfolio-nobg.webp";
import Stars from "./stars";

export default function HeroSection() {
  return (
    <main className="w-full relative h-screen">
      <div className="absolute bottom-0 right-[5rem] h-6/7 w-1/3 z-5">
        <img
          src={heroImage}
          alt="Siiri Lietu"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <section className=" relative z-3 flex flex-col h-screen ">
        <div className="h-3/5 flex flex-row justify-between relative overflow-hidden  bg-primary-green text-primary-pink ">
          <Stars />
          <div className="pb-5 flex flex-col mt-auto pl-[var(--spacing-page)]">
            <h2>Nice to meet you!</h2>
            <h1>I'm Siiri,</h1>
          </div>
        </div>

        <div className="h-2/5 w-2/3 py-5 bg-primary-pink text-primary-green px-[var(--spacing-page)] ">
          <h2>a frontend developer.</h2>
          <p>
            I'm web development student looking for an internship for fall 2025.
          </p>
         
        </div>
      </section>
    </main>
  );
}
