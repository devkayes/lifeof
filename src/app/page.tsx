import Link from "next/link";

export default function Home() {
  const posts = [
    {
      id: 1,
      title: "In loving of my village...",
      slug: "village",
      description:
        "A nostalgic look back at my childhood in a small village, where I spent endless afternoons riding my bicycle and swimming in the village pond with friends, discovering the simple joys of life.",
    },
    {
      id: 2,
      title: "To erase of memories...",
      slug: "sylhet",
      description:
        "A heartfelt journey through the silence of hidden pain, and the need to let go in order to breathe freely and heal the soul.",
    },
    {
      id: 3,
      title: "Lessons Learned",
      slug: "uttara",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ullam sint molestias enim eveniet minima laboriosam cupiditate eum at quis!",
    },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen">
      <ul className="text-center px-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="my-10 font-cardo text-start hover:text-[#727182]"
          >
            <Link href={`/${post.slug}`}>
              <h3 className="text-[22px]">{post.title}</h3>
              <p className="text-[12px] max-w-[400px] text-justify">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
