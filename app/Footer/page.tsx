import { FavouriteIcon } from "hugeicons-react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-muted w-full border-t py-4 text-center text-xs">
      <div className="flex flex-col">
        <span>
          &copy; {currentYear} <strong>Cornelius Motanya</strong>.
        </span>
        <span>
          Designed & built with{" "}
          <FavouriteIcon className="stroke-error fill-error inline-block size-4" />{" "}
          using Next.js.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
