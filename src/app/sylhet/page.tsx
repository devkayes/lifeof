import DiaryStory, { DiaryPhoto } from "../components/DiaryStory";

export default function Sylhet() {
  return (
    <DiaryStory title="To erase of memories..." meta="Sylhet, In 2023">
      <p>
        For me, this trip wasn’t just about travel. I had been carrying pain
        inside me for a long time—memories, worries, feelings I couldn’t let go
        of. I needed a break. Sylhet was that break. I wanted to step away from
        everything, to meet new people, to experience a new culture, and to
        remind myself that life still had so much to offer.
      </p>
      <p>
        Before the Sylhet tour, I was in a difficult place in life. I had been
        carrying a kind of pain that didn’t go away easily. It was a mix of
        things—disappointments, people I had lost touch with, broken trust, and
        the weight of expectations I couldn’t always meet. Those memories stayed
        with me, quietly pulling me down even when I tried to move forward. I
        felt stuck. Every day seemed the same, and even though I smiled and kept
        going, inside I was tired. I wanted to let go of that heaviness, but
        it’s not easy when the same routines and the same places keep reminding
        you of what you’re trying to forget.
      </p>
      <p>
        That was my first visit to Sylhet, and I can still remember how it felt
        the moment I arrived. The city looked so fresh and alive, surrounded by
        green hills, tea gardens stretching as far as the eye could see, and
        rivers that seemed to flow endlessly. There was something peaceful in
        the air, something that immediately made me feel lighter.
      </p>

      <DiaryPhoto
        src="/images/sylhet-without-tshirt.jpg"
        alt="Sylhet without T-shirt"
        width={4032}
        height={3024}
        place="center"
        tilt="left"
      />

      <p>
        I was with four of my closest friends, and being with them made it even
        better. We laughed, we explored, we shared stories late into the night.
        We visited tea estates, sat by the riversides, and watched the sun fade
        behind the hills. Each place we went had its own charm—whether it was
        the busy city streets or the quiet corners of nature.
      </p>

      <DiaryPhoto
        src="/images/sylhet-with-friends.jpg"
        alt="Sylhet without T-shirt"
        width={4032}
        height={3024}
        place="left"
        tilt="slight"
      />

      <p>
        One of my favorite parts of the trip was simply meeting people along the
        way. Sylhetis are warm and welcoming, and even small conversations made
        me feel connected. Tasting the local food, learning little things about
        their traditions, and just soaking in the rhythm of the city gave me a
        new kind of energy.
      </p>
      <p>
        That tour gave me more than memories. It gave me peace. It gave me the
        courage to let go of some of the pain I was holding onto. Looking back,
        I realize it wasn’t just a tour—it was a healing journey, one I deeply
        needed at that point in my life. In Sylhet, surrounded by green hills,
        rivers, and strangers who welcomed us, I found what I was searching for:
        a way to release the pain, even if only for a while. It wasn’t about
        erasing the past, but about reminding myself that there is still joy,
        still peace, still life worth experiencing.
      </p>
      <p className="italic">
        It truly was a once-in-a-lifetime experience, and Sylhet will always
        hold a special place in my heart.
      </p>
    </DiaryStory>
  );
}
