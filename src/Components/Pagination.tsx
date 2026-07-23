/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";

const styles = {
  pagination: css`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      background: linear-gradient(50deg, #fff 0%, #1f56c6 20%);
      padding: 5px;
      border-radius: 5px;
      color: white;
      margin: 5px;

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  `,
};

const Pagination = () => {
  return (
    <div css={styles.pagination}>
      <span>
        <MdOutlineKeyboardDoubleArrowLeft />
        <a href=".">Prev</a>
      </span>

      <span>
        <a href=".">Next</a>
        <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </div>
  );
};

export default Pagination;