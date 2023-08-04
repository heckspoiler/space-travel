import { useState } from "react";
import style from "../styles/Crew.module.css";
import Header from "../components/Header";
import MainSectionContainer from "../components/mainSectionContainer";

function Crew() {
  return (
    <div className={style.container}>
      <Header />
      <MainSectionContainer>
        <h2>Crew</h2>
      </MainSectionContainer>
    </div>
  );
}

export default Crew;
