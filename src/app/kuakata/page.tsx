import Image from "next/image";
import StoryWrapper from "../components/StoryWrapper";

export default function Kuakata() {
  return (
    <StoryWrapper>
      <p className="text-[20px]">A Journey of Relaxation!!</p>
      <p className="text-[12px] mt-2">Kuakata, In 2024</p>
      <p>
        <Image
          src="/images/kuakata-horse.jpg"
          alt="Kuakata horse riding"
          width={600}
          height={300}
          className="rounded-lg shadow-md my-10 filter grayscale-[0.85]"
          priority
        />
        I had the opportunity to visit to Kuakata Sea Beach many time
        {" ("}Allahmdulliya{")"}, and it felt nothing short of magical. Kuakata,
        often called the "Daughter of the Sea," is one of the rare places in the
        world where you can watch both the sunrise and sunset over the horizon
        of the sea. Standing there, I felt as if the ocean was whispering its
        eternal secrets in the language of waves.
        <br />
        <br />
        The first morning, I woke up early, long before the sun rose. The beach
        was quiet, except for the soothing sound of the waves crashing
        endlessly. Slowly, the sky began to change color—from dark blue to
        shades of pink, orange, and finally golden. Watching the sun rise out of
        the sea, painting everything in light, I felt a deep calmness inside me.
        It was one of those moments when time seems to pause, and you simply
        breathe, grateful to be alive.
        <Image
          src="/images/kuakata-1.jpg"
          alt="Kuakata sea beach"
          width={600}
          height={400}
          className="rounded-lg shadow-md filter grayscale-[0.85] my-10"
          priority
        />
        Later that day, I walked along the beach with my friends. The sand
        stretched endlessly, soft under our feet, and the salty wind played with
        our hair. Local fishermen were returning with their morning catch, their
        nets filled with fresh fish. They smiled warmly at us, their sun-burned
        faces full of stories of the sea. Some even invited us to see their
        boats, proudly showing the nets and the fish they had caught.
        <br />
        <br />
        While walking along the sand when I noticed something really interesting
        — thousands of tiny red crabs, called “Lal Kakra,” were moving across
        the beach. They were so small and fast! Every time I got closer, they
        disappeared into their little holes in the sand. It was amazing to see
        them all together, like the beach was alive. I just stood there watching
        them, feeling really lucky to see something so simple but so special.
        <br />
        <br />
        <Image
          src="/images/kuakata-sea-food.jpg"
          alt="Kuakata sea food"
          width={600}
          height={600}
          className="rounded-lg shadow-md filter grayscale-[0.85] my-10"
          priority
        />
        Kuakata’s seafood is something I’ll never forget. Fresh crabs, prawns,
        and fish cooked with local spices tasted heavenly after a long walk on
        the beach. Each meal felt like a celebration of the ocean itself.
        Sitting at a small local stall, eating with my friends while the waves
        roared in the background, I realized how food and place together can
        create memories that last forever.
        <br />
        <br />
        One of the most exciting parts of the tour was horse riding by the sea.
        As the sun started to set, I got on a horse and rode along the wide
        stretch of sand. The cool breeze brushed against my face, the horse’s
        hooves splashed against the shallow water, and the golden sky melted
        into the sea. For those few minutes, I felt free—like a child again,
        living only in the moment.
        <br />
        <br /> The sunset at Kuakata was even more breathtaking than the
        sunrise. The whole sky turned red and orange, and the waves reflected
        that fiery glow. Standing there, watching the sun slowly disappear into
        the ocean, I felt an overwhelming sense of peace. It was as if the sea
        itself was taking away every worry, every hidden pain, and leaving me
        with nothing but gratitude.
        <br />
        <br />
        Kuakata wasn’t just a trip. It was an experience of beauty, culture, and
        healing. The kindness of the local people, the taste of fresh seafood,
        the thrill of horse riding, and the endless sea—everything came together
        to remind me that life still holds so much joy to discover.
      </p>
    </StoryWrapper>
  );
}
