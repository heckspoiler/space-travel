import style from "../styles/Technology.module.css";
import { useState } from "react";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";

const technolgies = [
  {
    subtitle: "the terminology...",
    title: "Launch Vehicle",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. A launch system includes the launch vehicle, launch pad, vehicle assembly and fuelling systems, range safety, and other related infrastructure.",
  },

  {
    subtitle: "the terminology...",
    name: "spacereport",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },

  {
    subtitle: "the terminology...",
    name: "space capsule",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer>
        <h2 className={style.sectionTitle}>Space Launch 101</h2>
        <section className={style.sectionLeft}>
          <ul className={style.list}>
            <li className={style.listelement}>1</li>
            <li className={style.listelement}>2</li>
            <li className={style.listelement}>3</li>
          </ul>
          <section className={style.subsectionLeft}>
            <h4 className={style.subtitleLeft}></h4>
            <h3 className={style.titleMain}></h3>
            <p className={style.paragraph}></p>
          </section>
        </section>
        <section className={style.sectionRight}></section>
      </MainSectionContainer>
    </div>
  );
}

export default Technology;
