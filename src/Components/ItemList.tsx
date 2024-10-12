/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { listTypes } from "../types";
import { Classroom } from "./Classroom";

const styles = {
  list: css`
    a {
      text-decoration: none;
      color: #000;
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-shadow: 0px 2px 10px lavender;
      margin-bottom: 10px;
      background-color: #fff;
      border-left: 4px solid #1061b7;
      position: relative;
      cursor: pointer;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.3s ease;
      &:after {
        background: linear-gradient(90deg, #fff 0%, #1f56c6 30%);
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        transition: width 0.5s ease;
        z-index: 1;
      }
      &:hover {
        color: #fff;
        background-color: inherit;
        &:after {
          width: 100%;
        }
      }

      span:first-of-type {
        font-weight: bold;
        font-size: 17px;
        z-index: 2;
      }

      span:last-of-type {
        font-size: 13px;
        z-index: 2;
      }
    }
  `,
};

const ItemList: React.FC<listTypes> = () => {
  const [lessons, setLessons] = useState<listTypes[]>([]);
  const [topics, setTopics] = useState<listTypes[]>([]);
  const [component, setComponent] = useState("");

  useEffect(() => {
    const fetchedtopics = [
      {
        title: "Historia ya Kiswahili.",
        desc: "5 lessons",
      },
      {
        title: "Sarufi ya Kiswahili.",
        desc: "5 lessons",
      },
      {
        title: "Fasihi ya Kiswahili.",
        desc: "5 lessons",
      },
      {
        title: "Utamaduni wa Waswahili.",
        desc: "5 lessons",
      },
      {
        title: "Mbinu za Mawasiliano.",
        desc: "5 lessons",
      },
      {
        title: "Mbinu za Mawasiliano.",
        desc: "5 lessons",
      },
    ];
    setTopics(fetchedtopics);
  }, []);

  const fetchedLessons = [
    {
      title: "Asili ya lugha ya Kiswahili.",
      desc: "video, worksheet",
    },
    {
      title: "Maeneo yanayozungumza Kiswahili.",
      desc: "video, worksheet",
    },
  ];
  const handleLessons = (e: React.MouseEvent) => {
    e.preventDefault();
    setLessons(fetchedLessons);
    setTopics([]);
  };

  const handleClass = (e: React.MouseEvent) => {
    e.preventDefault();
    setComponent("classroom");
    setLessons([]);
    setTopics([]);
  };

  return (
    <>
      <div css={styles.list}>
        {component === "classroom" ? (
          <Classroom />
        ) : (
          <>
            <h1>
              {topics.length > 0
                ? "Year 1 Topics"
                : lessons.length > 0
                ? "Topic 1"
                : ""}
            </h1>
            {topics.map((topic, index) => (
              <a href="." key={index} onClick={handleLessons}>
                <span>
                  {index + 1}. {topic.title}
                </span>
                <span>{topic.desc}</span>
              </a>
            ))}
            {lessons.map((lesson, index) => (
              <a href="." key={index} onClick={handleClass}>
                <span>
                  {index + 1}. {lesson.title}
                </span>
                <span>{lesson.desc}</span>
              </a>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default ItemList;
