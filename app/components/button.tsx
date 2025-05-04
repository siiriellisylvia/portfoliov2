type ButtonProps = {
  label: string;
  link: string;
  isExternal?: boolean;
  className?: string;
};

export default function Button({ label, link, isExternal = false, className = "" }: ButtonProps) {
  const defaultStyle = "text-sm font-bold py-2 px-5 rounded-full cursor-pointer";
  
  // If className is not provided, use a default style with pink background
  const buttonStyle = className 
    ? `${defaultStyle} ${className}`
    : `${defaultStyle} bg-primary-pink text-primary-green`;
  
  // For PDF downloads
  if (link.endsWith(".pdf")) {
    return (
      <a
        href={link}
        download
        className={buttonStyle}
      >
        {label}
      </a>
    );
  }
  
  // For external links (like project live links)
  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={buttonStyle}
      >
        {label}
      </a>
    );
  }
  
  // For internal page navigation with smooth scroll
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
      }}
      className={buttonStyle}
    >
      {label}
    </button>
  );
}
