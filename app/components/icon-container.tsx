import Icon from './icon';

export default function IconContainer() {
    return (
        <>
         <p>I know a thing or two about all of these:</p>
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
          </>
    );
};