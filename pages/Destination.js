import style from "../styles/Destination.module.css";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";
import { Main } from "next/document";

const planets = [
  {
    alt: "moon",
    src: "/assets/destination/image-moon.webp",
    title: "Moon",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    alt: "mars",
    src: "/assets/destination/image-mars.webp",
    title: "Mars",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 Months",
  },
  {
    alt: "europa",
    src: "/assets/destination/image-europa.webp",
    title: "Europa",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 Mil. km",
    travel: "3 years",
  },
  {
    alt: "titan",
    src: "/assets/destination/image-titan.webp",
    title: "Titan",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a very cold place with surface temperatures of around -179.2 °C. Pack accordingly!",
    distance: "1.6 Bil. km",
    travel: "7 years",
  },
];

function Destination() {
  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer>
        <h2 className={style.sectionTitle}>Pick Your Destination</h2>
        <section className={style.sectionLeft}>
          <img src={planets[0].src} alt={planets[0].alt} />
        </section>
        <section className={style.sectionRight}>
          <nav className={style.planetNav}>
            <ul onClick={() => handlePlanetClick(planets[0])}>
              <a>moon</a>
            </ul>
            <ul onClick={() => handlePlanetClick(planets[1])}>
              <a>mars</a>
            </ul>
            <ul onClick={() => handlePlanetClick(planets[2])}>
              <a>europa</a>
            </ul>
            <ul onClick={() => handlePlanetClick(planets[3])}>
              <a>titan</a>
            </ul>
          </nav>
          <h3>{planets[0].title}</h3>
          <p>{planets[0].description}</p>
          <div className={style.stroke}></div>
          <section className={style.bottomSection}>
            <div className={style.distance}>
              <p>Avg. Distance</p>
              <h4>{planets[0].distance}</h4>
            </div>
            <div className={style.travel}>
              <p>Est. Travel Time</p>
              <h4>{planets[0].travel}</h4>
            </div>
          </section>
        </section>
      </MainSectionContainer>
    </div>
  );
}

export default Destination;
