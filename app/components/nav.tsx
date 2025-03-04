import Button from "./button";
import CVFile from "../../public/assets/siirilietu-cv.pdf";

export default function Nav() {
  return (
    <div className="absolute top-0 w-full bg-transparent z-10 px-[var(--spacing-page)] py-5">
      <nav className="flex justify-end gap-4">
        <Button link="#contact" label="Contact" />
        <Button link={CVFile} label="CV" />
      </nav>
    </div>
  );
}
