/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { MdArrowBack } from "react-icons/md";

const styles = {
  button: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 18px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #1061b7, #1f56c6);
    color: #fff;
    font-family: math !important;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 3px 10px rgba(16, 97, 183, 0.2);

    svg {
      font-size: 20px;
      flex-shrink: 0;
    }

    &:hover {
      background: linear-gradient(135deg, #0b4d94, #1849b4);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(16, 97, 183, 0.3);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(16, 97, 183, 0.2);
    }

    &:focus-visible {
      outline: 3px solid rgba(16, 97, 183, 0.25);
      outline-offset: 2px;
    }

    @media (max-width: 768px) {
      padding: 8px 14px;
      font-size: 14px;

      svg {
        font-size: 18px;
      }
    }
  `,
};

type Props = {
  onGoBack: () => void;
};

export const GoBack: React.FC<Props> = ({ onGoBack }) => {
  return (
    <button css={styles.button} onClick={onGoBack}>
      <MdArrowBack />
      <span>Go Back</span>
    </button>
  );
};