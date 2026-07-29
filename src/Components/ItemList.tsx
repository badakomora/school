/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { listTypes } from "../types";
import { Classroom } from "./Classroom";
import { GoBack } from "./GoBack";

const styles = {
  list: css`
    font-family: math !important;

    @media (max-width: 768px) {
      margin-top: 70px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    a {
      text-decoration: none;
      color: #000;
      display: flex;
      flex-direction: column;
      padding: 10px;
      box-shadow: 0px 2px 10px lavender;
      margin-bottom: 10px;
      background: #fff;
      border-left: 4px solid #1061b7;
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      transition: 0.3s;
      cursor: pointer;

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: linear-gradient(90deg, #fff 0%, #1f56c6 30%);
        transition: width 0.5s;
        z-index: 1;
      }

      &:hover {
        color: white;

        &:after {
          width: 100%;
        }
      }

      span {
        z-index: 2;
      }

      span:first-of-type {
        font-size: 17px;
        font-weight: bold;
      }

      span:last-of-type {
        font-size: 13px;
      }
    }
  `,
};

type Props = {
  topics: listTypes[];
  currentPage: number;
  itemsPerPage: number;
};

const ItemList: React.FC<Props> = ({ topics, currentPage, itemsPerPage }) => {
  const [component, setComponent] = useState("");
  const [lessons, setLessons] = useState<listTypes[]>([]);

  const fetchedLessons = [
    {
      title: "Lesson 1",
      desc: "Video, Worksheet, Quiz",
    },
    {
      title: "Lesson 2",
      desc: "Video, Worksheet",
    },
  ];

  const paginatedTopics = topics.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const paginatedLessons = lessons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleLessons = (e: React.MouseEvent) => {
    e.preventDefault();
    setLessons(fetchedLessons);
  };

  const handleGoBack = () => {
    if (component === "classroom") {
      setComponent("");
      return;
    }

    setLessons([]);
  };

  const handleClass = (e: React.MouseEvent) => {
    e.preventDefault();
    setComponent("classroom");
  };

  if (component === "classroom") {
    return <Classroom onGoBack={handleGoBack} />;
  }

  return (
    <div css={styles.list}>
      <div className="header">
        <h1>{lessons.length ? "Lessons" : "Topics"}</h1>

        {lessons.length > 0 && <GoBack onGoBack={handleGoBack} />}
      </div>

      {lessons.length === 0
        ? paginatedTopics.map((topic, index) => (
            <a href="." key={index} onClick={handleLessons}>
              <span>{topic.title}</span>
              <span>{topic.desc}</span>
            </a>
          ))
        : paginatedLessons.map((lesson, index) => (
            <a href="." key={index} onClick={handleClass}>
              <span>{lesson.title}</span>
              <span>{lesson.desc}</span>
            </a>
          ))}
    </div>
  );
};

export default ItemList;
