import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";

export default function Footer({
  className = "",
  bordered = true,
}: {
  className?: string;
  bordered?: boolean;
}) {
  return (
    <footer
      className={`flex flex-wrap items-center justify-between gap-4 py-7 font-meta text-sm ${bordered ? "border-t border-rule" : ""} ${className}`}
    >
      <a
        href="mailto:hello@kayes.dev"
        className="transition-colors hover:text-accent"
      >
        hello@kayes.dev
      </a>

      <Link
        href="/"
        aria-label="Home"
        className="flex h-11 items-center gap-1 rounded-full px-2 transition-colors hover:text-accent"
      >
        <LeftArrowIcon className="h-5 w-5" />
        <RightArrowIcon className="h-5 w-5" />
      </Link>
    </footer>
  );
}
