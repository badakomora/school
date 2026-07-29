/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { MdArrowBack } from "react-icons/md";

const styles = {
  button: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: fit-content;
    height: fit-content;
    flex-shrink: 0;

    gap: 8px;
    padding: 10px 18px;
    border: none;
    border-radius: 8px;
    background: linear-gradient(135deg, #1f56c6, #3b82f6);
    color: #fff;
    cursor: pointer;

    &:hover {
      background: linear-gradient(135deg, #1f56c6, #3b82f6);
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
