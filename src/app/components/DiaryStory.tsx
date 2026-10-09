import "@fontsource/libre-caslon-display/400.css";
import "@fontsource/libre-caslon-text/400.css";
import "@fontsource/libre-caslon-text/400-italic.css";
import "@fontsource/courier-prime/400.css";
import SharedImage from "../class/SharedImage";
import Footer from "./Footer";

/**
 * "Diary" story template — a dated journal entry with photos
 * pinned onto the page like taped prints.
 */
export default function DiaryStory({
  meta,
  title,
  children,
}: Readonly<{
  meta: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <div className="t-diary min-h-screen bg-bg px-5 pt-20 font-text text-ink sm:px-12 sm:pt-26">
      <article className="mx-auto max-w-[640px]">
        <header>
          <p className="font-meta text-[15px] text-accent">{meta}</p>
          <h1 className="mt-5 font-display text-[clamp(42px,6.2vw,84px)] leading-none font-normal">
            {title}
          </h1>
          <div aria-hidden="true" className="mt-8 h-px w-16 bg-accent" />
        </header>

        <div className="story-body mt-14 text-[clamp(18px,1.4vw,20px)] leading-[1.85] text-body">
          {children}
        </div>

        <Footer className="mt-24 sm:mt-32" />
      </article>
    </div>
  );
}

const tilts = {
  left: "-rotate-[1.6deg]",
  right: "rotate-[1.8deg]",
  slight: "-rotate-[1.1deg]",
} as const;

const placements = {
  center: "mx-auto max-w-[520px]",
  right: "ml-auto max-w-[420px]",
  left: "mr-auto max-w-[420px]",
} as const;

const tapes = {
  center: "left-1/2 -ml-[55px] w-[110px] rotate-2",
  right: "left-6 w-24 -rotate-[4deg]",
  left: "right-7 w-24 rotate-[5deg]",
} as const;

/** A photo shown as a taped print. */
export function DiaryPhoto({
  src,
  alt,
  width,
  height,
  place = "center",
  tilt = "left",
  aspect,
  eager = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  place?: keyof typeof placements;
  tilt?: keyof typeof tilts;
  /** optional crop, e.g. "4 / 5" */
  aspect?: string;
  eager?: boolean;
}) {
  return (
    <figure
      className={`relative my-16 bg-paper p-3.5 pb-11 shadow-[0_1px_2px_var(--shadow),0_10px_28px_var(--shadow)] sm:my-18 ${placements[place]} ${tilts[tilt]}`}
    >
      <span
        aria-hidden="true"
        className={`absolute -top-3 h-6 bg-[var(--tape)] ${tapes[place]}`}
      />
      <SharedImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes="(min-width: 640px) 520px, 100vw"
        loading={eager ? "eager" : "lazy"}
        className="photo block h-auto w-full object-cover"
        style={aspect ? { aspectRatio: aspect } : undefined}
      />
    </figure>
  );
}
