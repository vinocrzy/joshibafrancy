import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import shape15 from "@/images/slider/shape15.svg";
import cover from "@/images/cover.jpg";
import invitationbg from "@/images/slider/bsbg.jpg";
import corner1 from "@/images/slider/corner1.svg";
import corner2 from "@/images/slider/corner2.svg";
import corner3 from "@/images/slider/corner3.svg";
import corner4 from "@/images/slider/corner4.svg";
import shape13 from "@/images/slider/shape13.svg";
import shape14 from "@/images/slider/shape14.svg";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const countdown = () => {
      const eventDate = new Date(2025, 4, 4, 10, 30, 0); // May 4, 2025, 10:30:00 AM
      const now = new Date();
      const difference = eventDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft("The event has started!");
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    const timerId = setInterval(countdown, 1000);
    return () => clearInterval(timerId);
  }, []);

  const handleAddToCalendar = () => {
      const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Baby+Shower+Celebration&dates=20250504T103000Z/20250504T120000Z&details=Join+us+for+the+baby+shower+celebration.&location=Copper+Kitchen+Sembakkam&sf=true&output=xml`;
      window.open(calendarUrl, "_blank");
  };

  return (
    <>
      <Head>
        <title>Baby Shower Celebration</title>
        <meta
          name="description"
          content="With love and joy in our hearts, we invite you to celebrate the upcoming arrival of our little one."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon" />

        {/* Open Graph metadata */}
        <meta
          property="og:title"
          content="Baby Shower Celebration"
        />
        <meta
          property="og:description"
          content="With love and joy in our hearts, we invite you to celebrate the upcoming arrival of our little one."
        />
        <meta property="og:image" content={`${cover.src}`} />
        <meta property="og:url" content="https://vinocrazy.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Baby Shower Celebration"
        />
        <meta
          name="twitter:description"
          content="With love and joy in our hearts, we invite you to celebrate the upcoming arrival of our little one."
        />
        <meta name="twitter:image" content={`${cover.src}`} />
        <meta name="twitter:url" content="https://x.com/itsvinocrazy" />
      </Head>
      <main>
        <section
          className="wpo-invitation-area-s2"
          style={{
            background: `url(${invitationbg.src}) no-repeat center center`,
            backgroundSize: "cover",
          }}
        >
          <div className="hero-container">
            <div className="hero-inner">
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-12">
                    <div className="wpo-event-wrap">
                      <div className="wpo-event-item">
                        <div className="wpo-event-text">
                          <h2>Joshiba Francy S</h2>
                          <p>Baby Shower Celebration on May 04, 2025</p>
                          <div className="inner-shape">
                            <Image src={shape15} alt="Shape 15" />
                          </div>
                          <ul>
                            <li>
                              Sunday, 04 May 2025 <br />
                              10:30 AM – 12:00 PM
                            </li>
                            <li>
                              <a
                                className="popup-gmaps"
                                href="#"
                                onClick={handleAddToCalendar}
                              >
                                Add to Calendar
                              </a>
                            </li>
                            <li>
                            Copper Kitchen
                            Velachery Rd, Sembakkam, Chennai, Tamil Nadu 600073
                            </li>
                            <li>
                              <strong>Countdown: {timeLeft}</strong>
                            </li>
                            {/* <li>+1 234-567-8910</li> */}
                            <li>
                              <a
                                className="popup-gmaps"
                                href="https://maps.app.goo.gl/FEoCefWbpRUiSAKB6"
                              >
                                See Location
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="shape-1">
                          <Image src={corner1} alt="Corner 1" />
                        </div>
                        <div className="shape-2">
                          <Image src={corner2} alt="Corner 2" />
                        </div>
                        <div className="shape-3">
                          <Image src={corner3} alt="Corner 3" />
                        </div>
                        <div className="shape-4">
                          <Image src={corner4} alt="Corner 4" />
                        </div>
                      </div>
                      <div className="frame-shape-1">
                        <Image src={shape13} alt="Shape 13" />
                      </div>
                      <div className="frame-shape-2">
                        <Image src={shape14} alt="Shape 14" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}