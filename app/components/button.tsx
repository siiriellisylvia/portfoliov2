type ButtonProps = {
  label: string;
  link: string;
};

export default function Button({ label, link }: ButtonProps) {
  const isPDF = link.endsWith(".pdf");

  return isPDF ? (
    // If the link is a PDF, use <a> with download attribute
    <a
      href={link}
      download
      className="bg-primary-pink text-primary-green text-sm font-bold py-1 px-5 rounded-full cursor-pointer"
    >
      {label}
    </a>
  ) : (
    // If not, scroll smoothly to the section
    <button
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
      }}
      className="bg-primary-pink text-primary-green text-sm font-bold py-1 px-5 rounded-full cursor-pointer"
    >
      {label}
    </button>
  );
}
