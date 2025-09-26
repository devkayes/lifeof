import Image from "next/image";
import StoryWrapper from "../components/StoryWrapper";

export default function Village() {
  return (
    <StoryWrapper>
      <p className="text-[20px]"> In loving of my village...</p>
      <p className="text-[12px] mt-2"> Since 2001 - Infinity</p>

      <div className="my-10">
        <Image
          src="/images/kayes-in-bicycle.jpg"
          alt="Riding bicycle"
          width={600}
          height={400}
          className="rounded-lg shadow-md filter grayscale-[0.85]"
          priority
        />
      </div>
      <p>
        I grew up in a small village where life was slow and peaceful. Every
        morning, the sun would spill over the fields, and the air smelled fresh
        and earthy. Life was simple, and I loved it that way.
      </p>

      <br />
      <p>
        The thing I remember most from my childhood was my bicycle. It wasn’t
        fancy—just an old bike with a few scratches and a crooked bell—but it
        was mine. After school and chores, I would ride it everywhere, exploring
        the village. <br /> <br /> The dirt paths, little streams, and open
        fields became my playground. I loved the feeling of the wind on my face,
        the sound of the wheels spinning, and the excitement of going fast down
        slopes. Sometimes, I would just drift along, enjoying the quiet and the
        freedom.
      </p>

      <Image
        src="/images/kayes-in-boat.jpg"
        alt="Kayes in a boat"
        width={600}
        height={400}
        className="rounded-lg shadow-md filter grayscale-[0.85] my-10 max-h-[370px]"
        priority
      />

      <p>
        Another favorite memory was swimming in the village pond with friends
        and other people from the village. On hot afternoons, we would all jump
        into the water, splashing, laughing, and racing each other. The pond
        became our little world of fun and adventure, and those moments made the
        village feel alive.
      </p>
      <br />
      <p>
        Riding my bike and swimming in the pond taught me more than just skills.
        I learned to notice small things—the sunlight on the leaves, the smell
        of wet earth, the laughter of friends—and to enjoy simple pleasures.
        <br />
        <br />
        Even now, whenever I see a bicycle or a pond, it takes me back to those
        carefree afternoons. Growing up in that village shaped who I am, and
        those simple moments still bring me joy.
      </p>
    </StoryWrapper>
  );
}
