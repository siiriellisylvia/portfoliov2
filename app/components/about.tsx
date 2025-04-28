import IconContainer from "./iconContainer";

export default function AboutSection() {
  return (
    <section className="w-full relative z-3 flex flex-col md:h-screen px-[var(--spacing-page-mobile)] md:px-[var(--spacing-page)] bg-primary-green text-white">
      <div className="pt-20">
        <h2 className="mt-0 pb-5 text-4xl font-extrabold font-heading text-primary-pink mb-10">About me</h2>
        <div>
          <p>
            After spending the last 10 years <span className="font-bold "> living and working in 3 different countries</span> around Europe,
            I've now found my home in Aarhus with my Danish boyfriend.
          </p>
          <p>
            I'm 34, and would call myself a lifetime learner. I
            have a degree in clothing design and business, and I enjoy
            developing new skills in general. I have tried figure skating, boxing and
            wakeboarding among others - with mixed results. My domain is called
            "That and those" for the same reason - it's a place where everything
            is welcome. It is also the brand name of my ceramics!
          </p>
          <p>
            After trying many things, I have found my <span className="font-bold">childhood passion</span> again in frontend development. I was scribbling HTML and CSS in a
            notebook when I was around 10 years old, and making websites in
            Geocities. I'm now studying web development at Business Academy Aarhus
          </p>
          <p>
            During my years abroad, I've gained experience in <span className="font-bold">working in multicultural environments</span>, communication, and
            collaboration with teams and customers all over the world.
          </p>
          <p>
            <span className="font-bold">Creativity and helping others</span> are a central part of my life -
            I'm the happiest when I can see the results of my work and the
            positive impact it can have. Be it a script that finally cooperates,
            working together with a colleague to find a good solution to a
            problem, or volunteering with animals (though I would probably pay
            money to hang out with kittens).
          </p>
          <p>
            Dad jokes and bad jokes in general are close to my heart, and I
            think I must have heard all the Apple “Hey Siri” jokes known to man,
            and I don't even mind.
          </p>
        </div>
      </div>
    </section>
  );
}
