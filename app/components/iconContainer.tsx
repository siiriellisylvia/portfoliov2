import Icon from "./icon";

export default function IconContainer() {
  return (
    <div className="relative w-full overflow-hidden my-10">
      <p>I know a thing or two about all of these:</p>
      <div className="icon-carousel flex w-max animate-scroll gap-6">
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

        {/* Duplicate icons to create an infinite effect*/}
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
  );
}
