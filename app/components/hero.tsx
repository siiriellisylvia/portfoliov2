import heroImage from "../../public/assets/portrait.png";
import Stars from "./stars";
import IconContainer from "./iconContainer";

export default function HeroSection() {
  return (
    <main className="w-full relative min-h-screen top-0">
      {/* Portrait image - adjusted for bottom alignment and size */}
      <div className="absolute bottom-0 right-0 md:right-[2rem] lg:right-[5rem] h-[50vh] md:h-[70vh] lg:h-[80vh] z-10">
        <img
          src={heroImage}
          alt="Siiri Lietu"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <section className="relative z-3 flex flex-col min-h-screen">
        <div className="grow shrink min-h-[40vh] md:min-h-[50vh] flex flex-row justify-between relative bg-primary-green text-primary-pink">
          <Stars />
          <div className="py-20 flex flex-col mt-auto pl-[var(--spacing-page-mobile)] md:pl-[var(--spacing-page)]">
            <h2>Hi, nice to see you here!</h2>
            <h1>I'm Siiri,</h1>
          </div>
        </div>

        <div className="shrink-0 h-auto md:w-2/3 py-5 z-6 bg-primary-pink text-primary-green px-[var(--spacing-page-mobile)] md:px-[var(--spacing-page)]">
          <h2>a frontend developer.</h2>
          <p>
            I'm a web development student looking for an internship for fall
            2025.
          </p>
          <p className="mt-6">
            This portfolio is made with React Router v7, TypeScript, Tailwind
            CSS and MongoDB. It's a constant work in progress, as it should be!
          </p>
          {/* Icon carousel that flows behind the portrait*/}
          <div className="mt-6">
            <IconContainer className="w-full" />
          </div>
        </div>
      </section>
    </main>
  );
}

