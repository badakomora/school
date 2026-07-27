/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const styles = {
  wrap: css`
    width: 100%;
    background: #fff;
    font-family: math !important;

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
          > h1 {
            font-size: 2rem;
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

type Lesson = {
  title: string;
  descriptionTitle: string;
  description: string;
  video: string;
  presentation: string;
  activities: {
    title: string;
    description: string;
    type: "worksheet" | "quiz";
  }[];
};

export const Classroom = () => {
  // Dummy Data
  const lesson: Lesson = {
    title: "Asili ya Lugha ya Kiswahili.",
    descriptionTitle: "Description",
    description:
      "Lugha ya Kiswahili ina historia ndefu inayohusisha mwingiliano wa tamaduni mbalimbali katika eneo la Pwani ya Afrika Mashariki. Hapa ni baadhi ya vipengele vya asili ya Kiswahili. Lugha hii imekua kupitia mawasiliano ya muda mrefu kati ya jamii za pwani na wageni kutoka maeneo mbalimbali ya dunia, na leo ni mojawapo ya lugha muhimu zaidi barani Afrika.",

    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",

    presentation:
      "https://docs.google.com/document/d/1qvyNhtGQQLX6DNXyCxsLpv8z4tGBwPkq/edit",

    activities: [
      {
        title: "📝 Lesson Worksheet",
        description: "Practice today's lesson with guided exercises.",
        type: "worksheet",
      },
      {
        title: "✅ Lesson Quiz",
        description: "Test your understanding and monitor your progress.",
        type: "quiz",
      },
    ],
  };

  return (
    <div className="hero" css={styles.wrap}>
      <div>
        <div>
          <h1>{lesson.title}</h1>

          <p>{lesson.descriptionTitle}</p>

          <p>{lesson.description}</p>

          <p>🎥 Watch the Lesson Video</p>

          <iframe
            src={lesson.video}
            title={lesson.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <p>📄 Presentation Material</p>

          <iframe
            src={lesson.presentation}
            title="Lesson Presentation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          <p>Learning Activities</p>

          <div className="actions">
            {lesson.activities.map((activity, index) => (
              <div
                key={index}
                className={`cta ${activity.type === "quiz" ? "quiz" : ""}`}
              >
                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>

                <span className="arrow">→</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
