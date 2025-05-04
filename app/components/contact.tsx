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
          <div className="flex flex-col items-center">
            <Link to="mailto:siiri.lietu@gmail.com">
              <Icon name="email" className="h-16 w-16 md:w-24 md:h-24 fill-primary-pink bg-primary-green p-2 rounded" hideLabel={true} />
            </Link>
            <p className="text-sm mt-2">siiri.lietu@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <Icon name="phone" className="h-16 w-16 md:w-24 md:h-24 fill-primary-pink bg-primary-green p-2 rounded" hideLabel={true} />
            <p className="text-sm mt-2">42464737</p>
          </div>
          <div className="flex flex-col items-center">
            <Link to="https://www.linkedin.com/in/siiri-lietu-b3375387/">
              <Icon name="linkedin" className="h-16 w-16 md:w-24 md:h-24 fill-primary-green bg-primary-green p-2 rounded" hideLabel={true} />
            </Link>
            <p className="text-sm mt-2">LinkedIn</p>
          </div>
          <div className="flex flex-col items-center">
            <Link to="https://github.com/siiriellisylvia">
              <Icon name="github" className="h-16 w-16 md:w-24 md:h-24 fill-primary-pink bg-primary-green p-2 rounded" hideLabel={true} />
            </Link>
            <p className="text-sm mt-2">Github</p>
          </div>
        </div>
      </section>
    </>
  );
}
