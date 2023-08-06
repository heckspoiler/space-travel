import style from "../styles/Technology.module.css";
import { useState, useEffect } from "react";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";

const technologies = [
  {
    subtitle: "the terminology...",
    title: "Launch Vehicle",
    image: "assets/technology/image-launch-vehicle-portrait.jpg",
    imageTablet: "assets/technology/image-launch-vehicle-landscape.jpg",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },

  {
    subtitle: "the terminology...",
    title: "spacereport",
    image: "assets/technology/image-spaceport-portrait.jpg",
    imageTablet: "assets/technology/image-spaceport-landscape.jpg",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },

  {
    subtitle: "the terminology...",
    title: "space capsule",
    image: "assets/technology/image-space-capsule-portrait.jpg",
    imageTablet: "assets/technology/image-space-capsule-landscape.jpg",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  const [selectedTechnology, setSelectedTechnology] = useState(technologies[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(selectedTechnology.image);

  const handleTechnologyClick = (technology, index) => {
    setSelectedTechnology(technology);
    setSelectedIndex(index);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 850) {
        setSelectedImage(selectedTechnology.imageTablet);
      } else {
        setSelectedImage(selectedTechnology.image);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [selectedTechnology]);

  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer reverse={true}>
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
          style={{ backgroundImage: `url(${selectedImage})` }}
        ></section>
      </MainSectionContainer>
    </div>
  );
}

export default Technology;
