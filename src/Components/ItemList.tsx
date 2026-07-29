/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { listTypes } from "../types";
import { Classroom } from "./Classroom";
import { GoBack } from "./GoBack";
import { MdAdd, MdEdit, MdDelete, MdClose } from "react-icons/md";

const styles = {
  list: css`
    font-family: math;
    @media (max-width: 768px) {
      margin-top: 70px;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 32px;
      padding: 0 4px;

      h1 {
        margin: 0;
        font-size: 28px;
        font-weight: 600;
        color: #1a1a1a;
      }

      .header-left {
        display: flex;
        align-items: center;
        gap: 16px;
      }
    }

    .add-button-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .add-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #1061b7;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
    }

    .items-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .item-wrapper {
      display: flex;
      align-items: stretch;
      gap: 12px;
      transition: all 0.2s ease;

      &:hover {
        .item-content {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
      }
    }

    .item-content {
      text-decoration: none;
      color: rgb(0, 0, 0);
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 5px;
      box-shadow: lavender 0px 2px 10px;
      margin-bottom: 10px;
      background: rgb(255, 255, 255);
      border-left: 4px solid rgb(16, 97, 183);
      position: relative;
      border-radius: 4px;
      overflow: hidden;
      transition: 0.3s;
      cursor: pointer;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background: linear-gradient(90deg, #1f56c6 0%, #fff 100%);
        transition: width 0.5s;
        z-index: 1;
      }

      &:hover {
        color: white;

        &::after {
          width: 100%;
        }
      }

      .item-title {
        font-size: 16px;
        font-weight: 600;
        color: inherit;
        margin: 0 0 6px 0;
        line-height: 1.4;
        position: relative;
        z-index: 2;
      }

      .item-description {
        font-size: 14px;
        color: inherit;
        margin: 0;
        line-height: 1.4;
        position: relative;
        z-index: 2;
      }
    }

    .actions {
      display: flex;
      gap: 8px;
      align-items: center;
      padding: 0 4px;

      .edit-btn {
        color: #1061b7;
      }

      .delete-btn {
        color: #d32f2f;
      }
    }
  `,
  modal: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;

    .modal-content {
      background: white;
      padding: 32px;
      border-radius: 12px;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
      max-width: 450px;
      width: 90%;

      .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 24px;

        h2 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          color: #1a1a1a;
        }

        button {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 24px;
          color: #999;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;

          &:hover {
            color: #1a1a1a;
            transform: rotate(90deg);
          }
        }
      }

      .form-group {
        margin-bottom: 20px;

        label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: 14px;
          color: #1a1a1a;
        }

        input,
        textarea {
          width: 100%;
          padding: 12px;
          border: 1px solid #ddd;
          border-radius: 6px;
          font-family: inherit;
          font-size: 14px;
          transition: all 0.2s ease;
          box-sizing: border-box;

          &:focus {
            outline: none;
            border-color: #1061b7;
            box-shadow: 0 0 0 4px rgba(16, 97, 183, 0.1);
          }
        }

        textarea {
          resize: vertical;
          min-height: 80px;
        }
      }

      .modal-actions {
        display: flex;
        gap: 12px;
        justify-content: flex-end;
        margin-top: 28px;

        button {
          padding: 10px 20px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;

          &.cancel-btn {
            background: #f5f5f5;
            color: #1a1a1a;
            border: 1px solid #e0e0e0;

            &:hover {
              background: #f0f0f0;
              border-color: #d0d0d0;
            }
          }

          &.submit-btn {
            background: #1061b7;
            color: white;

            &:hover {
              background: #0a4a94;
              transform: translateY(-1px);
              box-shadow: 0 4px 12px rgba(16, 97, 183, 0.2);
            }

            &:active {
              transform: translateY(0);
            }
          }
        }
      }
    }
  `,
};

type Props = {
  topics: listTypes[];
  currentPage: number;
  itemsPerPage: number;
};

interface ModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  type: "topic" | "lesson";
  currentItem?: listTypes;
  formData: { title: string; desc: string };
}

const ItemList: React.FC<Props> = ({ topics, currentPage, itemsPerPage }) => {
  const [component, setComponent] = useState("");
  const [topicsList, setTopicsList] = useState<listTypes[]>(topics);
  const [lessons, setLessons] = useState<listTypes[]>([]);
  const [modal, setModal] = useState<ModalState>({
    isOpen: false,
    mode: "add",
    type: "topic",
    formData: { title: "", desc: "" },
  });

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

  const paginatedTopics = topicsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const paginatedLessons = lessons.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const openModal = (
    type: "topic" | "lesson",
    mode: "add" | "edit" = "add",
    item?: listTypes,
  ) => {
    setModal({
      isOpen: true,
      mode,
      type,
      currentItem: item,
      formData: item
        ? { title: item.title, desc: item.desc }
        : { title: "", desc: "" },
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      type: "topic",
      formData: { title: "", desc: "" },
    });
  };

  const handleModalSubmit = () => {
    if (!modal.formData.title.trim()) {
      alert("Please enter a title");
      return;
    }

    if (modal.type === "topic") {
      if (modal.mode === "add") {
        setTopicsList([...topicsList, modal.formData]);
      } else if (modal.currentItem) {
        setTopicsList(
          topicsList.map((t) =>
            t.title === modal.currentItem?.title ? modal.formData : t,
          ),
        );
      }
    } else {
      if (modal.mode === "add") {
        setLessons([...lessons, modal.formData]);
      } else if (modal.currentItem) {
        setLessons(
          lessons.map((l) =>
            l.title === modal.currentItem?.title ? modal.formData : l,
          ),
        );
      }
    }

    closeModal();
  };

  const handleDelete = (item: listTypes, type: "topic" | "lesson") => {
    if (window.confirm(`Are you sure you want to delete "${item.title}"?`)) {
      if (type === "topic") {
        setTopicsList((prev) => prev.filter((t) => t.title !== item.title));
      } else {
        setLessons((prev) => prev.filter((l) => l.title !== item.title));
      }
    }
  };

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

  const isTopicView = lessons.length === 0;

  return (
    <div css={styles.list}>
      <div className="header">
        <div className="header-left">
          <div className="add-button-wrapper">
            <MdAdd
              className="add-button"
              onClick={() => openModal(isTopicView ? "topic" : "lesson", "add")}
              title={`Add new ${isTopicView ? "topic" : "lesson"}`}
              size={24}
            />
          </div>
          <h1>{lessons.length ? "Lessons" : "Topics"}</h1>
        </div>

        {lessons.length > 0 && <GoBack onGoBack={handleGoBack} />}
      </div>

      <div className="items-container">
        {lessons.length === 0
          ? paginatedTopics.map((topic, index) => (
              <div className="item-wrapper" key={index}>
                <a href="." className="item-content" onClick={handleLessons}>
                  <p className="item-title">{topic.title}</p>
                  <p className="item-description">{topic.desc}</p>
                </a>
                <div className="actions" onClick={(e) => e.stopPropagation()}>
                  <MdEdit
                    className="edit-btn"
                    onClick={() => openModal("topic", "edit", topic)}
                    title="Edit topic"
                    size={18}
                  />
                  <MdDelete
                    className="delete-btn"
                    onClick={() => handleDelete(topic, "topic")}
                    title="Delete topic"
                    size={18}
                  />
                </div>
              </div>
            ))
          : paginatedLessons.map((lesson, index) => (
              <div className="item-wrapper" key={index}>
                <a href="." className="item-content" onClick={handleClass}>
                  <p className="item-title">{lesson.title}</p>
                  <p className="item-description">{lesson.desc}</p>
                </a>
                <div className="actions" onClick={(e) => e.stopPropagation()}>
                  <MdEdit
                    className="edit-btn"
                    onClick={() => openModal("lesson", "edit", lesson)}
                    title="Edit lesson"
                    size={18}
                  />

                  <MdDelete
                    className="delete-btn"
                    onClick={() => handleDelete(lesson, "lesson")}
                    title="Delete lesson"
                    size={18}
                  />
                </div>
              </div>
            ))}
      </div>

      {modal.isOpen && (
        <div css={styles.modal}>
          <div className="modal-content">
            <div className="modal-header">
              <h2>
                {modal.mode === "add" ? "Add New" : "Edit"}{" "}
                {modal.type === "topic" ? "Topic" : "Lesson"}
              </h2>
              <button onClick={closeModal}>
                <MdClose size={20} />
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                type="text"
                placeholder={`Enter ${modal.type} title`}
                value={modal.formData.title}
                onChange={(e) =>
                  setModal({
                    ...modal,
                    formData: { ...modal.formData, title: e.target.value },
                  })
                }
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea
                id="desc"
                placeholder={`Enter ${modal.type} description`}
                value={modal.formData.desc}
                onChange={(e) =>
                  setModal({
                    ...modal,
                    formData: { ...modal.formData, desc: e.target.value },
                  })
                }
              />
            </div>

            <div className="modal-actions">
              <button className="cancel-btn" onClick={closeModal}>
                Cancel
              </button>
              <button className="submit-btn" onClick={handleModalSubmit}>
                {modal.mode === "add" ? "Add" : "Update"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemList;
