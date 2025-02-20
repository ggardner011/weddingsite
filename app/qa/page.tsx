const QA: React.FC = () => {
  return (
    <div>
      <h1>Q&A</h1>
      <div>
        {/* RSVP Deadline */}
        <section>
          <h2>When is the RSVP deadline?</h2>
          <p>
            We kindly ask that you RSVP by <strong>January 1, 2026</strong>. If
            you have any questions about the RSVP process, please contact Elena
            or Graeson.
          </p>
        </section>

        {/* Lodging */}
        <section>
          <h2>Where can I stay?</h2>

          <div>
            <a
              href="https://www.rushcreeklodge.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="underline">Rush Creek Lodge & Spa</h3>
            </a>
            <div className="pl-4">
              <p className="pt-0">
                Come stay where the magic happens! We have a room block at this
                hotel, but you must book by <strong>December 20, 2025</strong>.
                Guests may book online or call{" "}
                <a href="tel:+12093792373"> (209) 379-2373</a> and provide the
                group code, <strong>GARDNER</strong>. There is a{" "}
                <strong>two-night minimum stay</strong>, so we recommend booking
                from <strong>April 24-26, 2026</strong>.
                <br />
                34001 Highway 120, Groveland, California 95321 <br />
                <strong>Check-in:</strong> 4:00 PM | <strong>Check-out:</strong>{" "}
                11:00 AM
              </p>
            </div>
          </div>

          <div>
            <a
              href="www.evergreenlodge.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="underline">Evergreen Lodge at Yosemite</h3>
            </a>
            <div className="pl-4">
              <p className="pt-0">
                Rush Creek&apos;s sister property, roughly an 18 minute drive
                from Rush Creek
                <br />
                33160 Evergreen Road Groveland, California 95321
              </p>
            </div>
          </div>

          <div>
            <a
              href="www.theserenite.com/the-groveland-hotel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className=" underline">The Groveland Hotel</h3>
            </a>
            <div className="pl-4">
              <p className="pt-0">
                Roughly a 28 minute drive from Rush Creek.
                <br />
                18767 Main Street, Groveland, CA 95321
              </p>
            </div>
          </div>

          <div>
            <a
              href="www.travelyosemite.com/lodging/curry-village/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className=" underline">Curry Village</h3>
            </a>
            <div className="pl-4">
              <p className="pt-0">
                Tent cabin camping! If you choose Curry Village for your
                lodging, please keep abreast of Yosemite closures closer to the
                event date to ensure that Curry Village will be open. Roughly a
                45 minute drive from Rush Creek.
                <br />
                9010 Curry Village Dr, Yosemite Valley, CA 95389
              </p>
            </div>
          </div>

          <p>
            Please don&apos;st be confined to these lodging options! Late April
            in Yosemite can still be quite cold for camping, so plan
            accordingly.
          </p>
        </section>

        {/* Directions */}
        <section>
          <h2>How do I get to Rush Creek Lodge?</h2>
          <p>
            <strong>Driving directions from San Francisco Bay Area:</strong> (3
            - 3.5 hours)
          </p>
          <p>
            From downtown San Francisco, take <strong>I-80 East</strong> across
            the Bay Bridge, then merge onto <strong>I-580 East</strong>.
            Continue for 45 miles, then merge onto <strong>I-205 East</strong>{" "}
            towards Tracy/Stockton.
          </p>
          <p>
            Follow signs to <strong>CA-120 East</strong> through Manteca,
            Oakdale, and Groveland.{" "}
            <strong>Rush Creek Lodge is on the right-hand side</strong>, ½ mile
            before the Yosemite entrance.
          </p>
          <p>
            For more directions, visit{" "}
            <strong>
              <a
                className="underline bold"
                href="https://www.rushcreeklodge.com/plan/directions-and-transportation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this link
              </a>
            </strong>
            .
          </p>

          <p>
            <strong>For our out-of-state guests:</strong> We recommend flying
            into any of the major Northern California airports (**SFO, OAK, SJC,
            SAC**) and renting a car. You may also fly into Mammoth Yosemite
            Airport (**MMH**), Merced Regional Airport (**MCE**), or
            Fresno-Yosemite International Airport (**FAT**), but these smaller
            airports have fewer flights.
          </p>

          <p>
            <strong>Driving warning:</strong> There is a stretch of **Hwy 120
            into Groveland** called **Priest Grade**, which has several
            switchbacks and limited nighttime visibility. While both **New
            Priest Grade and Old Priest Grade** are relatively short, they can
            be dangerous for unfamiliar drivers. Please keep this in mind for
            travel and lodging plans.
          </p>
        </section>

        {/* Event Schedule */}
        <section>
          <h2>What time do all of the events begin and end?</h2>
          <p>
            Our ceremony begins on **April 25, 2026, at 3:30 PM** at the **Cedar
            View Ceremony Site**. The reception starts at **4:00 PM** at the
            Event Center near the Rush Creek Tavern and ends at **10:00 PM**. We
            will also host a **farewell breakfast** at the Tavern on **April 26,
            2026, from 8:30 AM - 10:30 AM**.
          </p>
        </section>

        {/* Plus Ones and Children */}
        <section>
          <h2>Can I bring a plus one or my children?</h2>
          <p>
            We ask that your party only brings guests included on your
            invitation. If you have any questions, please contact Elena or
            Graeson.
          </p>
        </section>
      </div>
    </div>
  );
};

export default QA;
