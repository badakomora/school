/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  wrap: css`
    width: 100%;
    background: #fff;
    font-family: math;

    > div {
      max-width: 100%;
      margin: 20px auto;

      > div {
        background: #fff;

        > h1 {
          margin: 0;
          color: #1f56c6;
          font-size: 2.6rem;
          font-weight: 700;
          line-height: 1.3;
          font-family: math;
        }

        > p:first-of-type {
          margin-top: 15px;
          margin-bottom: 15px;
          display: inline-block;
          padding: 6px 14px;
          border-radius: 30px;
          background: #eef4ff;
          color: #1f56c6;
          font-weight: 600;
          font-size: 0.95rem;
        }

        > p:nth-of-type(2) {
          color: #555;
          line-height: 1.9;
          font-size: 1.05rem;
          text-align: justify;
          margin-bottom: 30px;
        }

        hr {
          border: none;
          border-top: 1px solid #ececec;
          margin: 35px 0;
        }

        > p:not(:first-of-type):not(:nth-of-type(2)) {
          font-size: 1.25rem;
          font-weight: 600;
          color: #222;
          margin-bottom: 20px;
        }

        video,
        iframe {
          width: 100%;
          height: 500px;
          border: none;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
        }

        /* ---------- Simple Professional Action Cards ---------- */

        .actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        div.cta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-decoration: none;
          padding: 15px 18px;
          border: 1px solid #dbe3f0;
          border-left: 4px solid #1f56c6;
          border-radius: 8px;
          background: #fff;
          transition: all 0.25s ease;
          color: inherit;

          &:hover {
            background: #f8fbff;
            border-color: #1f56c6;
            box-shadow: 0 4px 12px rgba(31, 86, 198, 0.08);
          }

          > div {
            display: flex;
            flex-direction: column;
          }

          h3 {
            margin: 0;
            color: #1f56c6;
            font-size: 1rem;
            font-weight: 600;
          }

          p {
            margin: 0;
            color: #6b7280;
            font-size: 0.9rem;
          }

          .arrow {
            font-size: 1.2rem;
            color: #9ca3af;
            transition: transform 0.2s;
          }

          &:hover .arrow {
            transform: translateX(4px);
          }
        }

        a.quiz {
          border-left-color: #16a34a;

          h3 {
            color: #16a34a;
          }

          &:hover {
            background: #f7fff8;
            border-color: #16a34a;
            box-shadow: 0 4px 12px rgba(22, 163, 74, 0.08);
          }
        }
      }
    }

    @media (max-width: 768px) {
      padding: 15px 0;

      > div {
        padding: 0 12px;

        > div {
          font-family: math;

          > h1 {
            font-size: 2rem;
            font-family: math;
          }

          > p:nth-of-type(2) {
            font-size: 1rem;
            line-height: 1.8;
          }

          video,
          iframe {
            height: 230px;
          }

          a.cta {
            padding: 14px;

            h3 {
              font-size: 0.95rem;
            }

            p {
              font-size: 0.85rem;
            }
          }
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
            ni baadhi ya vipengele vya asili ya Kiswahili. Lugha hii imekua
            kupitia mawasiliano ya muda mrefu kati ya jamii za pwani na wageni
            kutoka maeneo mbalimbali ya dunia, na leo ni mojawapo ya lugha
            muhimu zaidi barani Afrika.
          </p>

          <p>🎥 Watch the Lesson Video</p>

          <video width="100%" height="360" controls>
            <source
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <p>📄 Presentation Material</p>

          <iframe
            width="100%"
            height="360"
            src="https://docs.google.com/document/d/1qvyNhtGQQLX6DNXyCxsLpv8z4tGBwPkq/edit"
            title="Lesson Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <p>Learning Activities</p>

          <div className="actions">
            <div className="cta">
              <div>
                <h3>📝 Lesson Worksheet</h3>
                <p>Practice today's lesson with guided exercises.</p>
              </div>

              <span className="arrow">→</span>
            </div>

            <div className="cta quiz">
              <div>
                <h3>✅ Lesson Quiz</h3>
                <p>Test your understanding and monitor your progress.</p>
              </div>

              <span className="arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
