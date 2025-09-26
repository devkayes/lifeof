import Link from "next/link";
import RightArrowIcon from "../icons/RightArrowIcon";
import LeftArrowIcon from "../icons/LeftArrowIcon";

export default function Footer() {
  return (
    <footer className="w-ful mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center text-sm">
        <p className="mb-2 md:mb-0"> hello@kayes.dev</p>

        <div className="space-x-4">
          <Link href="/" className=" flex items-center gap-2">
            <LeftArrowIcon className="w-5 h-5 hover:text-[#727182]" />
            <RightArrowIcon className="w-5 h-5 hover:text-[#727182]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
