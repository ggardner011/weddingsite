import PictureCard from "@/components/picturecard";

const About: React.FC = () => {
  return (
    <div>
      <h1>About!</h1>
      <p>
        It&apos;s us Graeson and Elena -- you know us, and if you don&apos;t you
        probably shouldn&apos;t be here!
      </p>
      <p>
        Graeson and Elena met on the internet (hint: rhymes with “Cinder”) in
        October 2018 after Elena was shocked to find someone with the same name
        and spelling as one of her best friends and roommate. This unique
        coincidence sparked an immediate flame, and they were quick to kindle a
        relationship. Graeson stole Elenan&apos;s heart after he unexpectedly
        dressed up as Ben Wyatt for their first Halloween together, and Elena
        was supposed to dress up as Leslie Knope but decide to be Blossom from
        the Powerpuff Girls instead. Through brief residences in Portland and
        Houston, COVID-19, and becoming lizard parents, the couplen&apos;s
        relationship blossomed with each passing day.
      </p>
      <p>
        Graeson decided to pop the question in 2023 (Graeson is of the opinion
        that he proposed 3 times - please ask him about it) and Elena
        emphatically said yes! They knew that they wanted to get married in
        Yosemite, as they both hold the park near and dear to their hearts. They
        could not be more thrilled for this next chapter of their lives to
        begin, and are so excited to celebrate their love with family and
        friends in a beautiful place!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
        <PictureCard
          src="/images/gallery/caadventure.jpeg"
          alt=""
          caption="Disneyland"
        />
        <PictureCard
          src="/images/gallery/falls.jpeg"
          alt=""
          caption="Vernal Falls"
        />
        <PictureCard
          src="/images/gallery/glacier.jpeg"
          alt=""
          caption="Glacier National Park"
        />
        <PictureCard
          src="/images/gallery/christmas.jpeg"
          alt=""
          caption="Academy of Sciences"
        />
      </div>
    </div>
  );
};

export default About;
