import style from "../styles/components/MainSectionContainer.module.css";

const MainSectionContainer = ({ children }) => {
  return <div className={style.container}>{children}</div>;
};

export default MainSectionContainer;
