import heroImage from "../../public/assets/portrait.png";
import Stars from "./stars";
import IconContainer from "./iconContainer";

export default function HeroSection() {
  return (
    <main className="w-full relative h-screen top-0">
      <div className="absolute bottom-[50%] md:bottom-0 right-[1rem] md:right-[5rem] h-[19rem] md:h-[48rem] md:w-1/3 z-5">
        <img
          src={heroImage}
          alt="Siiri Lietu"
          className="w-full h-full object-cover object-top"
        />
      </div>
      <section className="relative z-3 flex flex-col h-screen">
        <div className="h-1/2 md:h-3/5 flex flex-row justify-between relative overflow-hidden bg-primary-green text-primary-pink">
          <Stars />
          <div className="py-20 flex flex-col mt-auto pl-[var(--spacing-page-mobile)] md:pl-[var(--spacing-page)]">
            <h2>Nice to meet you!</h2>
            <h1>I'm Siiri,</h1>
          </div>
        </div>

        <div className="h-2/5 w-full md:w-2/3 py-5 z-6 bg-primary-pink text-primary-green px-[var(--spacing-page-mobile)] md:px-[var(--spacing-page)]">
          <h2>a frontend developer.</h2>
          <p>
            I'm a web development student looking for an internship for fall
            2025.
          </p>
          <p className="mt-6">This portfolio is made with React Router v7, TypeScript, Tailwind CSS and MongoDB. It's a constant work in progress, as it should be!</p>
          
          <IconContainer />
        </div>
      </section>
    </main>
  );
}