import style from "../styles/components/MainSectionContainer.module.css";
import cn from "classnames";

const MainSectionContainer = ({ children, reverse }) => {
  return (
    <div
      className={`${style.container} ${reverse ? style.containerReverse : ""}`}
    >
      {children}
    </div>
  );
};

export default MainSectionContainer;
