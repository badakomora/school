/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  wrap: css({
    width: "100%",
    margin: "0px",
    padding: "0px",
    "> div": {
      display: "flex",
      flexDirection: "row",
      margin: "0px",
      padding: "0px",
      "> div": {
        margin: "0px",
        padding: "0px",
        "> h1": {
          color: "#1f56c6",
          fontSize: "3em",
        },
        "> p": {
          color: "black",
          fontSize: "1.2em",
          "@media (max-width: 768px)": {
            fontSize: "1em",
          },
        },
        "> a": {
          color: "#1f56c6",
          textDecoration: "none",
          fontWeight: "bold",
          "@media (max-width: 768px)": {
            fontSize: "1em",
          },
        },
      },
    },
  }),
};

export const Classroom = () => {
  return (
    <section className="hero" css={styles.wrap}>
      <div>
        <div>
          <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
            aliquam ipsam laboriosam facilis. Nisi sint nam adipisci. Ab sunt,
            sint ullam nemo quis sit ad consequuntur quae placeat eaque ipsa?
          </p>
          <a className="cta" href=".">
            Slide deck
          </a>
          <a className="cta" href=".">
            Lesson Video
          </a>
          <a className="cta" href=".">
            Lesson Worksheet
          </a>
          <a className="cta" href=".">
            Start Quiz
          </a>
        </div>
      </div>
    </section>
  );
};
