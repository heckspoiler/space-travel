import style from "../styles/IndexBody.module.css";

function IndexBody() {
  return (
    <section className={style.container}>
      <section className={style.sectionLeft}>
        <h5 className={style.subheadingLeft}>so, you want to travel to</h5>
        <h1 className={style.headingLeft}>space</h1>
        <p className={style.paragraphLeft}>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </section>
      <section className={style.sectionRight}>
        <div className={style.circleRight}>Explore</div>
      </section>
    </section>
  );
}

export default IndexBody;
