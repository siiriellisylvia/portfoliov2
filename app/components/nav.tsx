import Button from "./button";
import CVFile from "../../public/assets/siirilietu-cv.pdf";

export default function Nav() {
  return (
    <div className="bg-primary-green absolute top-2 right-[var(--spacing-page-mobile)] z-50 rounded-full px-2 py-2 md:right-[var(--spacing-page)]">
      <nav className="flex justify-end gap-4">
        <Button link="#contact" label="Contact" />
        <Button link={CVFile} label="CV" />
      </nav>
    </div>
  );
}
