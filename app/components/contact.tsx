import { Link } from "react-router";
import Icon from "./icon";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="w-full relative z-3 gap-6 flex flex-col justify-center items-center text-center h-screen px-[var(--spacing-page-mobile)] md:[var(--spacing-page)] bg-primary-pink"
      >
        <div>
          <h2>Am I the colleague you're looking for?</h2>
          <p className="font-bold">
            I'm always happy to grab a coffee and talk about it!
          </p>
        </div>
        <div className="flex flex-row gap-12">
          <Link to="mailto:siiri.lietu@gmail.com" className="text-sm">
            <Icon name="email" />
            siiri.lietu@gmail.com
          </Link>
          <div>
            <Icon name="phone" />
            <p className="text-sm!">42464737</p>
          </div>
          <Link to="https://www.linkedin.com/in/siiri-lietu-b3375387/">
            <Icon name="linkedin" />
          </Link>
          <Link to="https://github.com/siiriellisylvia">
            <Icon name="github" />
          </Link>
        </div>
      </section>
    </>
  );
}
