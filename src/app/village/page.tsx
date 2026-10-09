import DiaryStory, { DiaryPhoto } from "../components/DiaryStory";

export default function Village() {
  return (
    <DiaryStory title="In loving of my village..." meta="Since 2001 - Infinity">
      <DiaryPhoto
        src="/images/kayes-in-bicycle.jpg"
        alt="Riding bicycle"
        width={4208}
        height={1892}
        place="center"
        tilt="left"
        eager
      />

      <p>
        I grew up in a small village where life was slow and peaceful. Every
        morning, the sun would spill over the fields, and the air smelled fresh
        and earthy. Life was simple, and I loved it that way.
      </p>
      <p>
        The thing I remember most from my childhood was my bicycle. It wasn’t
        fancy—just an old bike with a few scratches and a crooked bell—but it
        was mine. After school and chores, I would ride it everywhere, exploring
        the village.
      </p>
      <p>
        The dirt paths, little streams, and open fields became my playground. I
        loved the feeling of the wind on my face, the sound of the wheels
        spinning, and the excitement of going fast down slopes. Sometimes, I
        would just drift along, enjoying the quiet and the freedom.
      </p>

      <DiaryPhoto
        src="/images/kayes-in-boat.jpg"
        alt="Kayes in a boat"
        width={4032}
        height={3024}
        place="right"
        tilt="right"
      />

      <p>
        Another favorite memory was swimming in the village pond with friends
        and other people from the village. On hot afternoons, we would all jump
        into the water, splashing, laughing, and racing each other. The pond
        became our little world of fun and adventure, and those moments made the
        village feel alive.
      </p>
      <p>
        Riding my bike and swimming in the pond taught me more than just skills.
        I learned to notice small things—the sunlight on the leaves, the smell
        of wet earth, the laughter of friends—and to enjoy simple pleasures.
      </p>
      <p className="italic">
        Even now, whenever I see a bicycle or a pond, it takes me back to those
        carefree afternoons. Growing up in that village shaped who I am, and
        those simple moments still bring me joy.
      </p>
    </DiaryStory>
  );
}
