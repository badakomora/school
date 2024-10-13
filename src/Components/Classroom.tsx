/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  wrap: css`
    width: 100%;
    margin: 0px;
    padding: 0px;

    > div {
      display: flex;
      flex-direction: row;
      margin: 0px;
      padding: 0px;

      > div {
        margin: 0px;
        padding: 0px;

        > h1 {
          color: #1f56c6;
          font-size: 3em;
        }

        > p {
          color: black;
          font-size: 1.2em;
        }
      }
    }
  `,
};

export const Classroom = () => {
  return (
    <section className="hero" css={styles.wrap}>
      <div>
        <div>
          <h1>Asili ya Lugha ya Kiswahili.</h1>
          <p>Description</p>
          <p>
            Lugha ya Kiswahili ina historia ndefu inayohusisha mwingiliano wa
            tamaduni mbalimbali katika eneo la Pwani ya Afrika Mashariki. Hapa
            ni baadhi ya vipengele vya asili ya Kiswahili: ?Lugha ya Kiswahili
            ina historia ndefu inayohusisha mwingiliano wa tamaduni mbalimbali
            katika eneo la Pwani ya Afrika Mashariki. Hapa ni baadhi ya
            vipengele vya asili ya Kiswahili: ?
          </p>
          <hr />
          <p>Watch the video</p>
          <video width="100%" height="360" controls>
            <source
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
              type="video/mp4"
            ></source>
            Your browser does not support the video tag.
          </video>
          <hr />
          <p>Presentation material for the lesson</p>
          <iframe
            width="100%"
            height="360"
            src="https://docs.google.com/document/d/1qvyNhtGQQLX6DNXyCxsLpv8z4tGBwPkq/edit"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <hr />
          <a className="cta" href=".">
            <span> Go to Lesson Worksheet</span>
            <span>Practice exercises</span>
          </a>
          <hr />
          <span>
            <a className="cta" href=".">
              <span>Start Quiz</span>
              <span>Test your knowledge</span>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};
