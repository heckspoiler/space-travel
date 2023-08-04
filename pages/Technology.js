import style from "../styles/Technology.module.css";
import { useState } from "react";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";

const technologies = [
  {
    subtitle: "the terminology...",
    title: "Launch Vehicle",
    image: "assets/technology/image-launch-vehicle-portrait.jpg",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.",
  },

  {
    subtitle: "the terminology...",
    title: "spacereport",
    image: "assets/technology/image-spaceport-portrait.jpg",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },

  {
    subtitle: "the terminology...",
    title: "space capsule",
    image: "assets/technology/image-space-capsule-portrait.jpg",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTechnologyClick = (technology, index) => {
    setSelectedTechnology(technology);
    setSelectedIndex(index);
  };

  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer>
        <h2 className={style.sectionTitle}>Space Launch 101</h2>
        <section className={style.sectionLeft}>
          <ul className={style.list}>
            {technologies.map((technology, index) => (
              <li
                key={technology.title}
                className={`${style.listelement} ${
                  index === selectedIndex ? style.listelementActive : ""
                }`}
                onClick={() => handleTechnologyClick(technology, index)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <section className={style.subsectionLeft}>
            <h4 className={style.subtitleLeft}>
              {selectedTechnology.subtitle}
            </h4>
            <h3 className={style.titleMain}>{selectedTechnology.title}</h3>
            <p className={style.paragraph}>{selectedTechnology.description}</p>
          </section>
        </section>
        <section
          className={style.sectionRight}
          style={{ backgroundImage: `url(${selectedTechnology.image})` }}
        ></section>
      </MainSectionContainer>
    </div>
  );
}

export default Technology;
