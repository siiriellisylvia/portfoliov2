import Icon from "./icon";

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="w-full relative z-3 flex flex-col justify-center items-center text-center h-screen px-[var(--spacing-page-mobile)] md:[var(--spacing-page)] bg-primary-pink"
      >
        <div>
          <h2 className="mt-0 text-4xl font-extrabold font-heading">
            Am I the colleague you're looking for?
          </h2>
          <p className="font-bold">
            I'm always happy to grab a coffee and talk about it!
            <br></br>You can also email me.
          </p>
        </div>
        <div className="flex flex-row gap-6">
          <Icon name="email" />
          <Icon name="phone" />
          <Icon name="linkedin" />
          <Icon name="github" />
        </div>
      </section>
    </>
  );
}
