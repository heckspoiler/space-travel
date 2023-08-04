import { useState } from "react";
import style from "../styles/Crew.module.css";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";

const members = [
  {
    role: "commander",
    name: "Doug Hurley",
    image: "/assets/crew/image-douglas-hurley.png",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },

  {
    role: "Mission Specialist",
    name: "mark shuttleworth",
    image: "/assets/crew/image-mark-shuttleworth.png",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },

  {
    role: "pilot",
    name: "Victor Glover",
    image: "/assets/crew/image-victor-glover.png",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },

  {
    role: "flight engineer",
    name: "anousheh ansari",
    image: "/assets/crew/image-anousheh-ansari.png",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
];

function Crew() {
  const [selectedMember, setSelectedMember] = useState(members[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMemberClick = (member, index) => {
    setSelectedMember(member);
    setSelectedIndex(index);
  };
  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer>
        <h2 className={style.sectionTitle}>Meet your crew</h2>
        <section className={style.sectionLeft}>
          <h3>{selectedMember.role}</h3>
          <h2>{selectedMember.name}</h2>
          <p>{selectedMember.description}</p>
          <ul className={style.memberList}>
            {members.map((member, index) => (
              <li
                key={member.name}
                className={`${style.listobject} ${
                  index === selectedIndex ? style.listobjectActive : ""
                }`}
                onClick={() => handleMemberClick(member, index)}
              ></li>
            ))}
          </ul>
        </section>

        <section className={style.sectionRight}>
          <img src={selectedMember.image} alt={`image of ${members.name}`} />
        </section>
      </MainSectionContainer>
    </div>
  );
}

export default Crew;
