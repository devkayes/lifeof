import Link from "next/link";
import "@fontsource-variable/cormorant-garamond/wght.css";
import "@fontsource-variable/cormorant-garamond/wght-italic.css";
import "@fontsource-variable/newsreader/opsz.css";
import "@fontsource-variable/newsreader/opsz-italic.css";
import SharedImage from "./class/SharedImage";
import Footer from "./components/Footer";

type Post = {
  title: string;
  slug: string;
  description: string;
  /** date line, taken from the story page itself */
  meta?: string;
  italic?: boolean;
};

const numerals = ["i.", "ii.", "iii.", "iv.", "v.", "vi.", "vii.", "viii."];

export default function Home() {
  const posts: Post[] = [
    {
      title: "In loving of my village...",
      slug: "village",
      description:
        "A nostalgic look back at my childhood in a small village, where I spent endless afternoons riding my bicycle and swimming in the village pond with friends, discovering the simple joys of life.",
      meta: "Since 2001 - Infinity",
    },
    {
      title: "To erase of memories...",
      slug: "sylhet",
      description:
        "A heartfelt journey through the silence of hidden pain, and the need to let go in order to breathe freely and heal the soul.",
      meta: "Sylhet, In 2023",
    },
    {
      title: "A Journey of Relaxation",
      slug: "kuakata",
      description:
        "Relax on Kuakata’s serene beaches, enjoy fresh seafood, and soak in beautiful sunrises and sunsets.",
      meta: "Kuakata, In 2024",
    },
    {
      title: "I Tried – Story of a Bird",
      slug: "story-of-a-bird",
      description: "The moment I still can’t let go • many years ago",
      italic: true,
    },
  ];

  return (
    <div className="t-journal min-h-screen bg-bg font-text text-ink">
      <div className="mx-auto max-w-[1120px] px-5 pt-16 sm:px-12 sm:pt-26">
        <div className="flex flex-wrap items-start gap-10 sm:gap-16 lg:gap-24">
          <figure className="m-0 w-full max-w-[440px] flex-[1_1_360px] lg:flex-[0_0_440px]">
            <SharedImage
              src="/images/panjabi.jpg"
              alt="Gym picture"
              width={2396}
              height={3194}
              preload
              sizes="(min-width: 768px) 440px, 100vw"
              className="photo block aspect-[3/4] h-auto w-full rounded-sm object-cover"
            />
            <figcaption className="mt-3.5 text-[13px] leading-relaxed text-muted italic">
              {"*"} Contents of this website is clearly rewritten by an AI tool,
              yet it perfectly expresses what I truly wanted to share from my
              heart.
            </figcaption>
          </figure>

          <ul className="m-0 min-w-0 flex-[999_1_420px] list-none border-t border-rule p-0">
            {posts.map((post, i) => (
              <li key={post.slug} className="border-b border-rule">
                <Link
                  href={`/${post.slug}`}
                  className="group flex gap-5 py-8 sm:gap-6"
                >
                  <span
                    aria-hidden="true"
                    className="w-7 flex-none pt-2.5 font-display text-xl text-accent italic"
                  >
                    {numerals[i]}
                  </span>
                  <span className="flex min-w-0 flex-col gap-2.5">
                    {post.meta && (
                      <span className="text-xs tracking-[0.16em] text-muted uppercase">
                        {post.meta}
                      </span>
                    )}
                    <span className="font-display text-[clamp(30px,3.4vw,42px)] leading-[1.1] font-medium transition-colors group-hover:text-accent">
                      {post.title}
                    </span>
                    <span
                      className={`max-w-[520px] text-[17px] leading-[1.65] text-body ${post.italic ? "italic" : ""}`}
                    >
                      {post.description}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <Footer className="mt-20 sm:mt-28" />
      </div>
    </div>
  );
}
