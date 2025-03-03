import Contact from "~/components/contact";

export default function Welcome() {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center font-heading h-screen">
        Hello
      </h1>
      <Contact />
    </main>
  );
}
