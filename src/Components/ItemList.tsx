/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { listTypes } from "../types";

const styles = {
  list: css`
    a {
      text-decoration: none;
      color: #000;
      display: flex;
      flex-direction: column;
      padding: 15px;
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
        font-size: 20px;
        z-index: 2;
      }

      span:last-of-type {
        font-size: 15px;
        z-index: 2;
      }
    }
  `,
};

const ItemList: React.FC<listTypes> = () => {
  const [lessons, setLessons] = useState<listTypes[]>([]);
  const [topics, setTopics] = useState<listTypes[]>([]);

  useEffect(() => {
    const fetchedtopics = [
      {
        title: "A Journey through Greek Myths, Reading.",
        desc: "5 lessons",
      },
      {
        title: "A Journey through Greek Myths, Reading.",
        desc: "5 lessons",
      },
      {
        title: "A Journey through Greek Myths, Reading.",
        desc: "5 lessons",
      },
      {
        title: "A Journey through Greek Myths, Reading.",
        desc: "5 lessons",
      },
      {
        title: "A Journey through Greek Myths, Reading.",
        desc: "5 lessons",
      },
    ];
    setTopics(fetchedtopics);
  }, []);

  const fetchedLessons = [
    {
      title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      desc: "video, worksheet",
    },
  ];
  const handleLessons = (e: React.MouseEvent) => {
    e.preventDefault();
    setLessons(fetchedLessons);
    setTopics([]);
  };

  return (
    <>
      <div css={styles.list}>
        <h1>
          {topics.length > 0
            ? "Year 1 Topics"
            : lessons.length > 0
            ? "Topic 1"
            : ""}
        </h1>
        {topics.map((topic, index) => (
          <a href="." key={index} onClick={handleLessons}>
            <span>{topic.title}</span>
            <span>{topic.desc}</span>
          </a>
        ))}
        {lessons.map((lesson, index) => (
          <a href="." key={index}>
            <span>{lesson.title}</span>
            <span>{lesson.desc}</span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ItemList;
