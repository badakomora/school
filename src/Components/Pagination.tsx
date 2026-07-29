/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const styles = {
  pagination: css`
    margin-top: 20px;
    display: flex;
    justify-content: space-between;

    span {
      display: flex;
      align-items: center;
      gap: 5px;
      background: linear-gradient(135deg, #1f56c6, #3b82f6);
      padding: 8px 12px;
      border-radius: 5px;
      color: white;
      cursor: pointer;
      user-select: none;
      transition: 0.2s;

      &:hover:not(.disabled) {
        opacity: 0.9;
      }

      &.disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    }
  `,
};

type PaginationProps = {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({
  currentPage,
  totalItems,
  itemsPerPage = 10,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div css={styles.pagination}>
      <span
        className={currentPage === 1 ? "disabled" : ""}
        onClick={() => currentPage > 1 && setCurrentPage((page) => page - 1)}
      >
        <MdOutlineKeyboardDoubleArrowLeft />
        Prev
      </span>

      <span>
        Page {currentPage} of {totalPages || 1}
      </span>

      <span
        className={currentPage === totalPages ? "disabled" : ""}
        onClick={() =>
          currentPage < totalPages && setCurrentPage((page) => page + 1)
        }
      >
        Next
        <MdOutlineKeyboardDoubleArrowRight />
      </span>
    </div>
  );
};

export default Pagination;
