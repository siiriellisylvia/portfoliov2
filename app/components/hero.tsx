import Icon from "./icon";
import heroImage from "../assets/hero-image.webp";
import Stars from "./stars";

export default function HeroSection() {
  return (
    <main className="w-full relative z-3 flex flex-row h-screen">
      <section className="w-2/3 relative z-3 flex flex-col h-screen  bg-primary-green text-primary-pink">
        <div className="h-3/5 flex flex-col justify-end pb-5 px-[var(--spacing-page)] relative overflow-hidden">
          <Stars />
          <h2>Nice to meet you!</h2>
          <h1>I'm Siiri,</h1>
        </div>
        <div className="h-2/5 py-5 bg-primary-pink text-primary-green px-[var(--spacing-page)]">
          <h2>a frontend developer.</h2>
          <p>
            I'm web development student looking for an internship for fall 2025.
          </p>
          <p className="mobile">I know a thing or two about all of these:</p>
          <div className="flex flex-wrap gap-2 my-5">
            <Icon name="CSS" />
            <Icon name="javaScript" />
            <Icon name="react" />
            <Icon name="react-router" />
            <Icon name="typescript" />
            <Icon name="tailwind-CSS" />
            <Icon name="mongoDB" />
            <Icon name="mySQL" />
            <Icon name="next.js" />
            <Icon name="node" />
            <Icon name="php" />
            <Icon name="webflow" />
            <Icon name="wordpress" />
            <Icon name="git" />
            <Icon name="jira" />
            <Icon name="figma" />
          </div>
        </div>
      </section>
      <section className="w-1/3 relative z-3 flex flex-col h-full ">
        <img
          src={heroImage}
          alt="Siiri Lietu"
          className="object-cover h-full"
        />
      </section>
    </main>
  );
}
