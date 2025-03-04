import Icon from "./icon";

export default function HeroSection() {
  return (
    <section className="w-full relative z-3 flex flex-col h-screen">
      <div className="h-1/2 flex flex-col justify-end pb-5 px-[var(--spacing-page)]">
        <h2>Nice to meet you!</h2>
        <h1>I'm Siiri</h1>
      </div>
      <div className="h-1/2 py-5 bg-primary-green text-primary-pink px-[var(--spacing-page)]">
        <h2>a frontend developer.</h2>
        <p>
          I'm web development student looking for an internship for fall 2025.
        </p>
        <p className="mobile">I know a thing or two about all of these:</p>
        <div className="flex flex-row gap-2 my-5">
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
  );
}
