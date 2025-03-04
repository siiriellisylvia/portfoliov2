import ContactSection from "~/components/contact";
import HeroSection from "~/components/hero";

export default function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HeroSection />
      <ContactSection />
    </main>
  );
}
