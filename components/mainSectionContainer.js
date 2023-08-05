import style from "../styles/components/MainSectionContainer.module.css";
import cn from "classnames";

const MainSectionContainer = ({ children, reverse, reverseSmall }) => {
  return (
    <div
      className={`${style.container} ${reverse ? style.containerReverse : ""} ${
        reverseSmall ? style.containerReverseSmall : ""
      }`}
    >
      {children}
    </div>
  );
};

export default MainSectionContainer;
