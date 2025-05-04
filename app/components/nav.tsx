import Button from "./button";
import CVFile from "../../public/assets/siirilietu-cv.pdf";

export default function Nav() {
  return (
    <div className="absolute top-2 right-[var(--spacing-page-mobile)] md:right-[var(--spacing-page)] bg-primary-green z-50 py-2 px-2 rounded-full">
      <nav className="flex justify-end gap-4">
        <Button link="#contact" label="Contact"/>
        <Button link={CVFile} label="CV" />
      </nav>
    </div>
  );
}
